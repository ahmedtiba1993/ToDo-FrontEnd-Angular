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
  static readonly saveUsingPOSTPath = '/todo/v1/todo/create';
  static readonly deleteUsingDELETEPath = '/todo/v1/todo/delete/{idTodo}';
  static readonly findByIdUsingGETPath = '/todo/v1/todo/id/{idTodo}';
  static readonly findAllUsingGETPath = '/todo/v1/todos/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer un todo
   *
   * Cette methode permet d'enregistrer ou modificer un todo
   * @param dto dto
   * @return l'objet todo cree / modifie
   */
  saveUsingPOSTResponse(dto: TodoDto): __Observable<__StrictHttpResponse<TodoDto>> {
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
  saveUsingPOST(dto: TodoDto): __Observable<TodoDto> {
    return this.saveUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }

  /**
   * Supprimer un todo
   *
   * Cette methode permet de supprimer un todo par ID
   * @param idTodo idTodo
   */
  deleteUsingDELETEResponse(idTodo: number): __Observable<__StrictHttpResponse<null>> {
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
  deleteUsingDELETE(idTodo: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(idTodo).pipe(
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
  findByIdUsingGETResponse(idTodo: number): __Observable<__StrictHttpResponse<TodoDto>> {
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
  findByIdUsingGET(idTodo: number): __Observable<TodoDto> {
    return this.findByIdUsingGETResponse(idTodo).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }

  /**
   * Renvoi la liste des todo
   *
   * Cette methode permet de charcher et renvoyer la liste des todo qui existant dans la BDD
   * @return La liste des todo / une liste vide
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
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
  findAllUsingGET(): __Observable<Array<TodoDto>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }
}

module TodoControllerService {
}

export { TodoControllerService }
