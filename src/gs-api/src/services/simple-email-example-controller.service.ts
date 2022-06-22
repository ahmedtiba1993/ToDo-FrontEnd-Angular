/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Simple Email Example Controller
 */
@Injectable({
  providedIn: 'root',
})
class SimpleEmailExampleControllerService extends __BaseService {
  static readonly sendSimpleEmailUsingGETPath = '/sendSimpleEmail';
  static readonly sendSimpleEmailUsingHEADPath = '/sendSimpleEmail';
  static readonly sendSimpleEmailUsingPOSTPath = '/sendSimpleEmail';
  static readonly sendSimpleEmailUsingPUTPath = '/sendSimpleEmail';
  static readonly sendSimpleEmailUsingDELETEPath = '/sendSimpleEmail';
  static readonly sendSimpleEmailUsingOPTIONSPath = '/sendSimpleEmail';
  static readonly sendSimpleEmailUsingPATCHPath = '/sendSimpleEmail';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingGET(): __Observable<string> {
    return this.sendSimpleEmailUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingHEADResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingHEAD(): __Observable<string> {
    return this.sendSimpleEmailUsingHEADResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingPOSTResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingPOST(): __Observable<string> {
    return this.sendSimpleEmailUsingPOSTResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingPUTResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingPUT(): __Observable<string> {
    return this.sendSimpleEmailUsingPUTResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingDELETEResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingDELETE(): __Observable<string> {
    return this.sendSimpleEmailUsingDELETEResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingOPTIONS(): __Observable<string> {
    return this.sendSimpleEmailUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingPATCHResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/sendSimpleEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * sendSimpleEmail
   * @return OK
   */
  sendSimpleEmailUsingPATCH(): __Observable<string> {
    return this.sendSimpleEmailUsingPATCHResponse().pipe(
      __map(_r => _r.body as string)
    );
  }
}

module SimpleEmailExampleControllerService {
}

export { SimpleEmailExampleControllerService }
