/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Statistique Controller
 */
@Injectable({
  providedIn: 'root',
})
class StatistiqueControllerService extends __BaseService {
  static readonly totalGroupeTodoUsingGETPath = '/todo/v1/groupetodo/totalGrTodo/{id}';
  static readonly totalTodoUsingGETPath = '/todo/v1/statistique/totalTodo/{id}';
  static readonly totalTodoEndedUsingGETPath = '/todo/v1/statistique/totalTodoEnded/{id}';
  static readonly totalTodoNotEndedUsingGETPath = '/todo/v1/statistique/totalTodoNotEnded/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * totalGroupeTodo
   * @param id id
   * @return OK
   */
  totalGroupeTodoUsingGETResponse(id?: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/groupetodo/totalGrTodo/${encodeURIComponent(String(id))}`,
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
   * totalGroupeTodo
   * @param id id
   * @return OK
   */
  totalGroupeTodoUsingGET(id?: number): __Observable<number> {
    return this.totalGroupeTodoUsingGETResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * totalTodo
   * @param id id
   * @return OK
   */
  totalTodoUsingGETResponse(id?: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/statistique/totalTodo/${encodeURIComponent(String(id))}`,
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
   * totalTodo
   * @param id id
   * @return OK
   */
  totalTodoUsingGET(id?: number): __Observable<number> {
    return this.totalTodoUsingGETResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * totalTodoEnded
   * @param id id
   * @return OK
   */
  totalTodoEndedUsingGETResponse(id?: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/statistique/totalTodoEnded/${encodeURIComponent(String(id))}`,
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
   * totalTodoEnded
   * @param id id
   * @return OK
   */
  totalTodoEndedUsingGET(id?: number): __Observable<number> {
    return this.totalTodoEndedUsingGETResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * totalTodoNotEnded
   * @param id id
   * @return OK
   */
  totalTodoNotEndedUsingGETResponse(id?: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/statistique/totalTodoNotEnded/${encodeURIComponent(String(id))}`,
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
   * totalTodoNotEnded
   * @param id id
   * @return OK
   */
  totalTodoNotEndedUsingGET(id?: number): __Observable<number> {
    return this.totalTodoNotEndedUsingGETResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }
}

module StatistiqueControllerService {
}

export { StatistiqueControllerService }
