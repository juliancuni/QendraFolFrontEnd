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

import { ApiRole } from '../models/api-role';
import { IdentityResult } from '../models/identity-result';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRoleGet
   */
  static readonly ApiRoleGetPath = '/api/Role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ApiRole>>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApiRole>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRoleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleGet$Plain(params?: {
  }): Observable<Array<ApiRole>> {

    return this.apiRoleGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApiRole>>) => r.body as Array<ApiRole>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ApiRole>>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApiRole>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRoleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleGet$Json(params?: {
  }): Observable<Array<ApiRole>> {

    return this.apiRoleGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApiRole>>) => r.body as Array<ApiRole>)
    );
  }

  /**
   * Path part for operation apiRolePost
   */
  static readonly ApiRolePostPath = '/api/Role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolePost$Plain$Response(params?: {
    body?: ApiRole
  }): Observable<StrictHttpResponse<IdentityResult>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRolePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolePost$Plain(params?: {
    body?: ApiRole
  }): Observable<IdentityResult> {

    return this.apiRolePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IdentityResult>) => r.body as IdentityResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRolePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolePost$Json$Response(params?: {
    body?: ApiRole
  }): Observable<StrictHttpResponse<IdentityResult>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRolePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRolePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRolePost$Json(params?: {
    body?: ApiRole
  }): Observable<IdentityResult> {

    return this.apiRolePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IdentityResult>) => r.body as IdentityResult)
    );
  }

  /**
   * Path part for operation apiRoleDelete
   */
  static readonly ApiRoleDeletePath = '/api/Role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleDelete$Response(params?: {
    body?: ApiRole
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiRoleDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRoleDelete(params?: {
    body?: ApiRole
  }): Observable<void> {

    return this.apiRoleDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRoleIdGet
   */
  static readonly ApiRoleIdGetPath = '/api/Role/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ApiRole>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiRole>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRoleIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleIdGet$Plain(params: {
    id: number;
  }): Observable<ApiRole> {

    return this.apiRoleIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiRole>) => r.body as ApiRole)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ApiRole>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiRole>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRoleIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleIdGet$Json(params: {
    id: number;
  }): Observable<ApiRole> {

    return this.apiRoleIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApiRole>) => r.body as ApiRole)
    );
  }

  /**
   * Path part for operation apiRoleNameNameGet
   */
  static readonly ApiRoleNameNameGetPath = '/api/Role/name/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleNameNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleNameNameGet$Plain$Response(params: {
    name: string;
  }): Observable<StrictHttpResponse<ApiRole>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleNameNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiRole>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRoleNameNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleNameNameGet$Plain(params: {
    name: string;
  }): Observable<ApiRole> {

    return this.apiRoleNameNameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiRole>) => r.body as ApiRole)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRoleNameNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleNameNameGet$Json$Response(params: {
    name: string;
  }): Observable<StrictHttpResponse<ApiRole>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.ApiRoleNameNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiRole>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRoleNameNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRoleNameNameGet$Json(params: {
    name: string;
  }): Observable<ApiRole> {

    return this.apiRoleNameNameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApiRole>) => r.body as ApiRole)
    );
  }

}
