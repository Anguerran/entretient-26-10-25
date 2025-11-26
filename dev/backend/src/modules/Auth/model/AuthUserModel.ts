import { Audit } from "../../../shared/models/Audit";

export interface AuthUserModel extends Audit {
  id: string;
  email: string;
  firstName: string;
  profilImage?: string | null;
  lastName: string;
  role: string;
  password?: string | null;
  googleId?: string | null;
}
