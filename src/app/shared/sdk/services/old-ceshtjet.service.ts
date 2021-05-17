/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { OldCeshtjeDto } from '../models/old-ceshtje-dto';

@Injectable({
  providedIn: 'root',
})
export class OldCeshtjetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation oldCeshtjetControllerFindAll
   */
  static readonly OldCeshtjetControllerFindAllPath = '/api/v1/old-ceshtjet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerFindAll$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerFindAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerFindAll(params?: {
  }): Observable<void> {

    return this.oldCeshtjetControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation oldCeshtjetControllerCreate
   */
  static readonly OldCeshtjetControllerCreatePath = '/api/v1/old-ceshtjet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  oldCeshtjetControllerCreate$Response(params: {
    body: OldCeshtjeDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  oldCeshtjetControllerCreate(params: {
    body: OldCeshtjeDto
  }): Observable<void> {

    return this.oldCeshtjetControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation oldCeshtjetControllerFindOneById
   */
  static readonly OldCeshtjetControllerFindOneByIdPath = '/api/v1/old-ceshtjet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerFindOneById()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerFindOneById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerFindOneByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerFindOneById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerFindOneById(params: {
    id: string;
  }): Observable<void> {

    return this.oldCeshtjetControllerFindOneById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation oldCeshtjetControllerRemove
   */
  static readonly OldCeshtjetControllerRemovePath = '/api/v1/old-ceshtjet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerRemove$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerRemovePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerRemove(params: {
    id: string;
  }): Observable<void> {

    return this.oldCeshtjetControllerRemove$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation oldCeshtjetControllerUpdateOne
   */
  static readonly OldCeshtjetControllerUpdateOnePath = '/api/v1/old-ceshtjet/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerUpdateOne()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  oldCeshtjetControllerUpdateOne$Response(params: {
    body: OldCeshtjeDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerUpdateOnePath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerUpdateOne$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  oldCeshtjetControllerUpdateOne(params: {
    body: OldCeshtjeDto
  }): Observable<void> {

    return this.oldCeshtjetControllerUpdateOne$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation oldCeshtjetControllerBulkInsert
   */
  static readonly OldCeshtjetControllerBulkInsertPath = '/api/v1/old-ceshtjet/bulk';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerBulkInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  oldCeshtjetControllerBulkInsert$Response(params: {
    body: Array<string>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerBulkInsertPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerBulkInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  oldCeshtjetControllerBulkInsert(params: {
    body: Array<string>
  }): Observable<void> {

    return this.oldCeshtjetControllerBulkInsert$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation oldCeshtjetControllerLoginToKeyCloak
   */
  static readonly OldCeshtjetControllerLoginToKeyCloakPath = '/api/v1/old-ceshtjet/login/{username}/{password}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `oldCeshtjetControllerLoginToKeyCloak()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerLoginToKeyCloak$Response(params: {
    username: string;
    password: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjetService.OldCeshtjetControllerLoginToKeyCloakPath, 'post');
    if (params) {
      rb.path('username', params.username, {});
      rb.path('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `oldCeshtjetControllerLoginToKeyCloak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  oldCeshtjetControllerLoginToKeyCloak(params: {
    username: string;
    password: string;
  }): Observable<void> {

    return this.oldCeshtjetControllerLoginToKeyCloak$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
