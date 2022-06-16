/* tslint:disable */
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  dateDeNaissance?: string;
  email?: string;
  id?: number;
  mdp?: string;
  nom?: string;
  prenom?: string;
  roles?: Array<RolesDto>;
}
