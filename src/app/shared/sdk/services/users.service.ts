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

import { MemberDto } from '../models/member-dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersGet
   */
  static readonly ApiUsersGetPath = '/api/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: {
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<MemberDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetPath, 'get');
    if (params) {
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: {
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<MemberDto>> {

    return this.apiUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDto>>) => r.body as Array<MemberDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: {
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<MemberDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetPath, 'get');
    if (params) {
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: {
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<MemberDto>> {

    return this.apiUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDto>>) => r.body as Array<MemberDto>)
    );
  }

  /**
   * Path part for operation apiUsersIdIdGet
   */
  static readonly ApiUsersIdIdGetPath = '/api/Users/id/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdIdGet$Plain(params: {
    id: number;
  }): Observable<MemberDto> {

    return this.apiUsersIdIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdIdGet$Json(params: {
    id: number;
  }): Observable<MemberDto> {

    return this.apiUsersIdIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * Path part for operation apiUsersUsernameUsernameGet
   */
  static readonly ApiUsersUsernameUsernameGetPath = '/api/Users/username/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUsernameUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameUsernameGet$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersUsernameUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersUsernameUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameUsernameGet$Plain(params: {
    username: string;
  }): Observable<MemberDto> {

    return this.apiUsersUsernameUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUsernameUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameUsernameGet$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersUsernameUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersUsernameUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersUsernameUsernameGet$Json(params: {
    username: string;
  }): Observable<MemberDto> {

    return this.apiUsersUsernameUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

}
