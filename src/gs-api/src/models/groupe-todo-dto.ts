/* tslint:disable */
import { LigneGroupeTodoDto } from './ligne-groupe-todo-dto';
import { UtilisateurDto } from './utilisateur-dto';
export interface GroupeTodoDto {
  creation?: string;
  id?: number;
  ligneGroupeTodo?: Array<LigneGroupeTodoDto>;
  nom?: string;
  utilisateur?: UtilisateurDto;
}
