/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface GroupeTodoDto {
  creation?: string;
  id?: number;
  nom?: string;
  utilisateur?: UtilisateurDto;
}
