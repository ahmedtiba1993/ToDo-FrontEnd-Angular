/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TodoDto } from '../models/todo-dto';

/**
 * Todo Controller
 */
@Injectable({
  providedIn: 'root',
})
class TodoControllerService extends __BaseService {
  static readonly changerEtatUsingPOSTPath = '/todo/v1/todo/changeretat/{idTodo}';
  static readonly corbeilleUsingPOSTPath = '/todo/v1/todo/corbeille/{idTodo}';
  static readonly saveUsingPOST1Path = '/todo/v1/todo/create';
  static readonly deleteUsingDELETE1Path = '/todo/v1/todo/delete/{idTodo}';
  static readonly findByIdUsingGET1Path = '/todo/v1/todo/id/{idTodo}';
  static readonly importantUsingPOSTPath = '/todo/v1/todo/important/{idTodo}';
  static readonly findAllNotEndedUsingGETPath = '/todo/v1/todos/NotEnded/{idUtilisateur}';
  static readonly findAllUsingGET1Path = '/todo/v1/todos/all';
  static readonly findAllEndedUsingGETPath = '/todo/v1/todos/allEnded/{idUtilisateur}';
  static readonly findAllCorbeilleUsingGETPath = '/todo/v1/todos/findAllCorbeille/{idUtilisateur}';
  static readonly findAllImportantUsingGETPath = '/todo/v1/todos/findAllImportant/{idUtilisateur}';
  static readonly findAllByUtilisateurIdUsingGET1Path = '/todo/v1/todos/utilsateur/{idTodo}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * changerEtat
   * @param idTodo idTodo
   */
  changerEtatUsingPOSTResponse(idTodo: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/todo/changeretat/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * changerEtat
   * @param idTodo idTodo
   */
  changerEtatUsingPOST(idTodo: number): __Observable<null> {
    return this.changerEtatUsingPOSTResponse(idTodo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * corbeille
   * @param idTodo idTodo
   */
  corbeilleUsingPOSTResponse(idTodo: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/todo/corbeille/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * corbeille
   * @param idTodo idTodo
   */
  corbeilleUsingPOST(idTodo: number): __Observable<null> {
    return this.corbeilleUsingPOSTResponse(idTodo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Enregistrer un todo
   *
   * Cette methode permet d'enregistrer ou modificer un todo
   * @param dto dto
   * @return l'objet todo cree / modifie
   */
  saveUsingPOST1Response(dto: TodoDto): __Observable<__StrictHttpResponse<TodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/todo/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoDto>;
      })
    );
  }
  /**
   * Enregistrer un todo
   *
   * Cette methode permet d'enregistrer ou modificer un todo
   * @param dto dto
   * @return l'objet todo cree / modifie
   */
  saveUsingPOST1(dto: TodoDto): __Observable<TodoDto> {
    return this.saveUsingPOST1Response(dto).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }

  /**
   * Supprimer un todo
   *
   * Cette methode permet de supprimer un todo par ID
   * @param idTodo idTodo
   */
  deleteUsingDELETE1Response(idTodo: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/todo/v1/todo/delete/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un todo
   *
   * Cette methode permet de supprimer un todo par ID
   * @param idTodo idTodo
   */
  deleteUsingDELETE1(idTodo: number): __Observable<null> {
    return this.deleteUsingDELETE1Response(idTodo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un todo par Id
   *
   * Cette methode permet de recherhcer un todo par son Id
   * @param idTodo idTodo
   * @return todo a ete trouve dans la BDD
   */
  findByIdUsingGET1Response(idTodo: number): __Observable<__StrictHttpResponse<TodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todo/id/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoDto>;
      })
    );
  }
  /**
   * Rechercher un todo par Id
   *
   * Cette methode permet de recherhcer un todo par son Id
   * @param idTodo idTodo
   * @return todo a ete trouve dans la BDD
   */
  findByIdUsingGET1(idTodo: number): __Observable<TodoDto> {
    return this.findByIdUsingGET1Response(idTodo).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }

  /**
   * important
   * @param idTodo idTodo
   */
  importantUsingPOSTResponse(idTodo: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/todo/important/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * important
   * @param idTodo idTodo
   */
  importantUsingPOST(idTodo: number): __Observable<null> {
    return this.importantUsingPOSTResponse(idTodo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findAllNotEnded
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllNotEndedUsingGETResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todos/NotEnded/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * findAllNotEnded
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllNotEndedUsingGET(idUtilisateur: number): __Observable<Array<TodoDto>> {
    return this.findAllNotEndedUsingGETResponse(idUtilisateur).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * Renvoi la liste des todo
   *
   * Cette methode permet de charcher et renvoyer la liste des todo qui existant dans la BDD
   * @return La liste des todo / une liste vide
   */
  findAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todos/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des todo
   *
   * Cette methode permet de charcher et renvoyer la liste des todo qui existant dans la BDD
   * @return La liste des todo / une liste vide
   */
  findAllUsingGET1(): __Observable<Array<TodoDto>> {
    return this.findAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * findAllEnded
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllEndedUsingGETResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todos/allEnded/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * findAllEnded
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllEndedUsingGET(idUtilisateur: number): __Observable<Array<TodoDto>> {
    return this.findAllEndedUsingGETResponse(idUtilisateur).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * findAllCorbeille
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllCorbeilleUsingGETResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todos/findAllCorbeille/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * findAllCorbeille
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllCorbeilleUsingGET(idUtilisateur: number): __Observable<Array<TodoDto>> {
    return this.findAllCorbeilleUsingGETResponse(idUtilisateur).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * findAllImportant
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllImportantUsingGETResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todos/findAllImportant/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * findAllImportant
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findAllImportantUsingGET(idUtilisateur: number): __Observable<Array<TodoDto>> {
    return this.findAllImportantUsingGETResponse(idUtilisateur).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * Renvoi la liste des todo d'un utilisateur
   *
   * Cette methode permet de charcher et renvoyer la liste des todo d'un utilisateur qui existant dans la BDD
   * @param idTodo idTodo
   * @return todo a ete supprimer
   */
  findAllByUtilisateurIdUsingGET1Response(idTodo: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/todos/utilsateur/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des todo d'un utilisateur
   *
   * Cette methode permet de charcher et renvoyer la liste des todo d'un utilisateur qui existant dans la BDD
   * @param idTodo idTodo
   * @return todo a ete supprimer
   */
  findAllByUtilisateurIdUsingGET1(idTodo: number): __Observable<Array<TodoDto>> {
    return this.findAllByUtilisateurIdUsingGET1Response(idTodo).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }
}

module TodoControllerService {
}

export { TodoControllerService }
