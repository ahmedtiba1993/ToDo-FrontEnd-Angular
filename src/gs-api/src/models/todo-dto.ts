/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface TodoDto {
  dateTodo?: string;
  descriptionTodo?: string;
  etatTodo?: boolean;
  id?: number;
  libelleTodo?: string;
  utilisateur?: UtilisateurDto;
}
