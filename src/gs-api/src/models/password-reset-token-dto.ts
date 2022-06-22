/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface PasswordResetTokenDto {
  expiryDate?: string;
  id?: number;
  token?: string;
  utilisateur?: UtilisateurDto;
}
