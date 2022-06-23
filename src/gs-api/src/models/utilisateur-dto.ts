/* tslint:disable */
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  confirmerMdp?: string;
  dateDeNaissance?: string;
  email?: string;
  id?: number;
  idEnreprise?: number;
  mdp?: string;
  nom?: string;
  prenom?: string;
  roles?: Array<RolesDto>;
}
