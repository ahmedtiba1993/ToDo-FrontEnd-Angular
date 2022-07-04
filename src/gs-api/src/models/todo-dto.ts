/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface TodoDto {
  corbeille?: boolean;
  dateTodo?: string;
  descriptionTodo?: string;
  etatTodo?: boolean;
  id?: number;
  important?: boolean;
  libelleTodo?: string;
  utilisateur?: UtilisateurDto;
}
