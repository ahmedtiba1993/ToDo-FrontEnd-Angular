/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TodoDto } from '../models/todo-dto';
import { GroupeTodoDto } from '../models/groupe-todo-dto';

/**
 * Groupe Todo Controller
 */
@Injectable({
  providedIn: 'root',
})
class GroupeTodoControllerService extends __BaseService {
  static readonly ajouterTodoUsingPOSTPath = '/todo/v1/groupetodo/ajoutertodo/{id}';
  static readonly findAllUsingGETPath = '/todo/v1/groupetodo/all';
  static readonly saveUsingPOSTPath = '/todo/v1/groupetodo/create';
  static readonly deleteUsingDELETEPath = '/todo/v1/groupetodo/delete/{idTodo}';
  static readonly findByIdUsingGETPath = '/todo/v1/groupetodo/id/{idTodo}';
  static readonly totalGrTodoUsingGETPath = '/todo/v1/groupetodo/total/{id}';
  static readonly findAllByUtilisateurIdUsingGETPath = '/todo/v1/groupetodo/utilsateur/{idTodo}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * ajouterTodo
   * @param params The `GroupeTodoControllerService.AjouterTodoUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `dto`: dto
   */
  ajouterTodoUsingPOSTResponse(params: GroupeTodoControllerService.AjouterTodoUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/groupetodo/ajoutertodo/${encodeURIComponent(String(params.id))}`,
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
   * ajouterTodo
   * @param params The `GroupeTodoControllerService.AjouterTodoUsingPOSTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `dto`: dto
   */
  ajouterTodoUsingPOST(params: GroupeTodoControllerService.AjouterTodoUsingPOSTParams): __Observable<null> {
    return this.ajouterTodoUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<GroupeTodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/groupetodo/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GroupeTodoDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<GroupeTodoDto>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<GroupeTodoDto>)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOSTResponse(dto: GroupeTodoDto): __Observable<__StrictHttpResponse<GroupeTodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/groupetodo/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupeTodoDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST(dto: GroupeTodoDto): __Observable<GroupeTodoDto> {
    return this.saveUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as GroupeTodoDto)
    );
  }

  /**
   * delete
   * @param idTodo idTodo
   */
  deleteUsingDELETEResponse(idTodo: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/todo/v1/groupetodo/delete/${encodeURIComponent(String(idTodo))}`,
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
   * delete
   * @param idTodo idTodo
   */
  deleteUsingDELETE(idTodo: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(idTodo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findById
   * @param idTodo idTodo
   * @return OK
   */
  findByIdUsingGETResponse(idTodo: number): __Observable<__StrictHttpResponse<GroupeTodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/groupetodo/id/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupeTodoDto>;
      })
    );
  }
  /**
   * findById
   * @param idTodo idTodo
   * @return OK
   */
  findByIdUsingGET(idTodo: number): __Observable<GroupeTodoDto> {
    return this.findByIdUsingGETResponse(idTodo).pipe(
      __map(_r => _r.body as GroupeTodoDto)
    );
  }

  /**
   * totalGrTodo
   * @param id id
   * @return OK
   */
  totalGrTodoUsingGETResponse(id?: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/groupetodo/total/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * totalGrTodo
   * @param id id
   * @return OK
   */
  totalGrTodoUsingGET(id?: number): __Observable<number> {
    return this.totalGrTodoUsingGETResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * findAllByUtilisateurId
   * @param idTodo idTodo
   * @return OK
   */
  findAllByUtilisateurIdUsingGETResponse(idTodo: number): __Observable<__StrictHttpResponse<Array<GroupeTodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/groupetodo/utilsateur/${encodeURIComponent(String(idTodo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GroupeTodoDto>>;
      })
    );
  }
  /**
   * findAllByUtilisateurId
   * @param idTodo idTodo
   * @return OK
   */
  findAllByUtilisateurIdUsingGET(idTodo: number): __Observable<Array<GroupeTodoDto>> {
    return this.findAllByUtilisateurIdUsingGETResponse(idTodo).pipe(
      __map(_r => _r.body as Array<GroupeTodoDto>)
    );
  }
}

module GroupeTodoControllerService {

  /**
   * Parameters for ajouterTodoUsingPOST
   */
  export interface AjouterTodoUsingPOSTParams {

    /**
     * id
     */
    id: number;

    /**
     * dto
     */
    dto: TodoDto;
  }
}

export { GroupeTodoControllerService }
