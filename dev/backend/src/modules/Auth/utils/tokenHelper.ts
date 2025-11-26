// src/utils/tokenUtils.ts
import jwt from "jsonwebtoken";
import crypto from "crypto"; // Pour générer des tokens de rafraîchissement aléatoires si besoin
import bcrypt from "bcrypt"; // Pour hacher les refresh tokens
import { Global } from "../../../Global";
import { AccessTokenPayload } from "../model/TokenPayloadModel";
import { createFutureDateHoursUTC } from "../../../shared/utils/createFutureDate";

export const ACCESS_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "7";
export const REFRESH_EXPIRY_DAYS = parseInt(
  process.env.REFRESH_TOKEN_COOKIE_EXPIRY_DAYS || "7",
  10
);

// Génère un JWT Access Token
export function generateAccessToken(payload: AccessTokenPayload): string {
  return jwt.sign(
    { ...payload, expireAt: Global.ACCESS_EXPIRY_MIN },
    Global.ACCESS_SECRET,
    {
      expiresIn: "3m",
    }
  );
}

// Génère une chaîne aléatoire sécurisée pour le Refresh Token
export function generateRefreshTokenString(): string {
  return crypto.randomBytes(64).toString("hex");
}

// Hache le Refresh Token avant de le stocker en BDD
export async function hashRefreshToken(token: string): Promise<string> {
  const saltRounds = 10; // Ou plus
  return bcrypt.hash(token, saltRounds);
}

// Compare un token reçu avec son hachage stocké
export async function compareRefreshToken(
  receivedRefreshToken: string,
  storedHashRfTken: string
): Promise<boolean> {
  return bcrypt.compare(receivedRefreshToken, storedHashRfTken);
}

// Calcule la date d'expiration pour le stockage en BDD
export function calculateRefreshTokenExpiry(): Date {
  const expiry = new Date(
    createFutureDateHoursUTC(
      parseInt(Global.REFRESH_TOKEN_COOKIE_EXPIRY_HOURS || "7")
    )
  );
  return expiry;
}

// Vérifie un Access Token (utilisé par la stratégie passport-jwt)
// Note : passport-jwt gère la vérification de la signature et de l'expiration
export function verifyAccessToken(token: string): AccessTokenPayload | null {
  try {
    const decoded = jwt.verify(token, Global.ACCESS_SECRET);
    console.log("decoded", decoded);
    return decoded as AccessTokenPayload; // Assurez-vous que le payload correspond
  } catch (error) {
    console.error(
      "Access token verification failed:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
}

export const decodeToken = (token: string) => {
  return jwt.decode(token, { complete: true, json: true });
};
