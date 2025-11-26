import bcrypt from "bcrypt";
import crypto from "crypto"; // Pour générer des tokens de rafraîchissement aléatoires si besoin

import jwt from "jsonwebtoken";
import {
  ACCESS_SECRET,
  BCRIPT_SALT_ROUNDS,
  ACCESS_EXPIRY,
  Global
} from "../../../../../Global";
import { AccessTokenPayload } from "../../../model/TokenPayloadModel";
import { createFutureDateHoursUTC } from "../../../../../shared/utils/createFutureDate";

// Génère un JWT Access Token
function generateAccessToken(payload: AccessTokenPayload): string {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: ACCESS_EXPIRY,
  });
}

// Génère une chaîne aléatoire sécurisée pour le Refresh Token
function generateRefreshTokenString(): string {
  return crypto.randomBytes(64).toString("hex");
}

// Hache le Refresh Token avant de le stocker en BDD
async function hashRefreshToken(token: string): Promise<string> {
  return bcrypt.hash(token, BCRIPT_SALT_ROUNDS);
}

// Compare un token reçu avec son hachage stocké
async function compareRefreshToken(
  receivedRefreshToken: string,
  storedHash: string
): Promise<boolean> {
  return bcrypt.compare(receivedRefreshToken, storedHash);
}

// Calcule la date d'expiration pour le stockage en BDD
function calculateRefreshTokenExpiry(): Date {
  const expiry = new Date(createFutureDateHoursUTC(
  parseInt(Global.REFRESH_TOKEN_COOKIE_EXPIRY_HOURS || "7")
));
  return expiry;
}

// Vérifie un Access Token (utilisé par la stratégie passport-jwt)
// Note : passport-jwt gère la vérification de la signature et de l'expiration
function verifyAccessToken(token: string): AccessTokenPayload | null {
  try {
    const decoded = jwt.verify(token, ACCESS_SECRET);
    return decoded as AccessTokenPayload; // Assurez-vous que le payload correspond
  } catch (error) {
    console.error(
      "Access token verification failed:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
}

export const hashPassword = async (value: string): Promise<string> => {
  return bcrypt.hash(value, BCRIPT_SALT_ROUNDS);
};
export const compare = async (
  value: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(value, hash);
};
export const bcryptService = {
  generateAccessToken,
  generateRefreshTokenString,
  hashRefreshToken,
  compareRefreshToken,
  calculateRefreshTokenExpiry,
  verifyAccessToken,
  hashPassword,
  compare,
};
