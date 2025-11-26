export interface RefreshTokenModel {
    id: string;
    hashedToken: string;
    userId: string ;
    expiresAt: Date;
    revoked: boolean;
  }