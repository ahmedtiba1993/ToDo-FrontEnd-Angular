/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { PasswordResetTokenDto } from '../models/password-reset-token-dto';

/**
 * Utilisateur Controller
 */
@Injectable({
  providedIn: 'root',
})
class UtilisateurControllerService extends __BaseService {
  static readonly findAllUsingGET2Path = '/todo/v1/utilisateurs/all';
  static readonly demandeChangerMdpUsingPOSTPath = '/todo/v1/utilisateurs/changermdp/demandeChangerMdp/{email}';
  static readonly veriftokenChangerMdpUsingGETPath = '/todo/v1/utilisateurs/changermdp/veriftokenChangerMdp/{idutilisateur}/{token}';
  static readonly changerMdpUsingPOSTPath = '/todo/v1/utilisateurs/changermdp/{idutilisateur}/{token}/{mdp}/{confirmerMdp}';
  static readonly saveUsingPOST2Path = '/todo/v1/utilisateurs/create';
  static readonly deleteUsingDELETE2Path = '/todo/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByEmailUsingGETPath = '/todo/v1/utilisateurs/email/{emailUtilisateur}';
  static readonly findByIdUsingGET2Path = '/todo/v1/utilisateurs/{idUtilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET2(): __Observable<Array<UtilisateurDto>> {
    return this.findAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * demandeChangerMdp
   * @param email email
   */
  demandeChangerMdpUsingPOSTResponse(email: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/utilisateurs/changermdp/demandeChangerMdp/${encodeURIComponent(String(email))}`,
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
   * demandeChangerMdp
   * @param email email
   */
  demandeChangerMdpUsingPOST(email: string): __Observable<null> {
    return this.demandeChangerMdpUsingPOSTResponse(email).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * veriftokenChangerMdp
   * @param params The `UtilisateurControllerService.VeriftokenChangerMdpUsingGETParams` containing the following parameters:
   *
   * - `token`: token
   *
   * - `idutilisateur`: idutilisateur
   *
   * @return OK
   */
  veriftokenChangerMdpUsingGETResponse(params: UtilisateurControllerService.VeriftokenChangerMdpUsingGETParams): __Observable<__StrictHttpResponse<PasswordResetTokenDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.token != null) __params = __params.set('token', params.token.toString());
    if (params.idutilisateur != null) __params = __params.set('idutilisateur', params.idutilisateur.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/utilisateurs/changermdp/veriftokenChangerMdp/${encodeURIComponent(String(params.idutilisateur))}/${encodeURIComponent(String(params.token))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PasswordResetTokenDto>;
      })
    );
  }
  /**
   * veriftokenChangerMdp
   * @param params The `UtilisateurControllerService.VeriftokenChangerMdpUsingGETParams` containing the following parameters:
   *
   * - `token`: token
   *
   * - `idutilisateur`: idutilisateur
   *
   * @return OK
   */
  veriftokenChangerMdpUsingGET(params: UtilisateurControllerService.VeriftokenChangerMdpUsingGETParams): __Observable<PasswordResetTokenDto> {
    return this.veriftokenChangerMdpUsingGETResponse(params).pipe(
      __map(_r => _r.body as PasswordResetTokenDto)
    );
  }

  /**
   * changerMdp
   * @param params The `UtilisateurControllerService.ChangerMdpUsingPOSTParams` containing the following parameters:
   *
   * - `token`: token
   *
   * - `mdp`: mdp
   *
   * - `idutilisateur`: idutilisateur
   *
   * - `confirmerMdp`: confirmerMdp
   */
  changerMdpUsingPOSTResponse(params: UtilisateurControllerService.ChangerMdpUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/utilisateurs/changermdp/${encodeURIComponent(String(params.idutilisateur))}/${encodeURIComponent(String(params.token))}/${encodeURIComponent(String(params.mdp))}/${encodeURIComponent(String(params.confirmerMdp))}`,
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
   * changerMdp
   * @param params The `UtilisateurControllerService.ChangerMdpUsingPOSTParams` containing the following parameters:
   *
   * - `token`: token
   *
   * - `mdp`: mdp
   *
   * - `idutilisateur`: idutilisateur
   *
   * - `confirmerMdp`: confirmerMdp
   */
  changerMdpUsingPOST(params: UtilisateurControllerService.ChangerMdpUsingPOSTParams): __Observable<null> {
    return this.changerMdpUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST2Response(dto: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todo/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST2(dto: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.saveUsingPOST2Response(dto).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * delete
   * @param idUtilisateur idUtilisateur
   */
  deleteUsingDELETE2Response(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/todo/v1/utilisateurs/delete/${encodeURIComponent(String(idUtilisateur))}`,
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
   * @param idUtilisateur idUtilisateur
   */
  deleteUsingDELETE2(idUtilisateur: number): __Observable<null> {
    return this.deleteUsingDELETE2Response(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findByEmail
   * @param emailUtilisateur emailUtilisateur
   * @return OK
   */
  findByEmailUsingGETResponse(emailUtilisateur: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/utilisateurs/email/${encodeURIComponent(String(emailUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * findByEmail
   * @param emailUtilisateur emailUtilisateur
   * @return OK
   */
  findByEmailUsingGET(emailUtilisateur: string): __Observable<UtilisateurDto> {
    return this.findByEmailUsingGETResponse(emailUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * findById
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findByIdUsingGET2Response(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todo/v1/utilisateurs/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * findById
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findByIdUsingGET2(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdUsingGET2Response(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module UtilisateurControllerService {

  /**
   * Parameters for veriftokenChangerMdpUsingGET
   */
  export interface VeriftokenChangerMdpUsingGETParams {

    /**
     * token
     */
    token: string;

    /**
     * idutilisateur
     */
    idutilisateur: number;
  }

  /**
   * Parameters for changerMdpUsingPOST
   */
  export interface ChangerMdpUsingPOSTParams {

    /**
     * token
     */
    token: string;

    /**
     * mdp
     */
    mdp: string;

    /**
     * idutilisateur
     */
    idutilisateur: number;

    /**
     * confirmerMdp
     */
    confirmerMdp: string;
  }
}

export { UtilisateurControllerService }
