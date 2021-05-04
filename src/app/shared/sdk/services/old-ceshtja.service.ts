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

import { BulkCreateReport } from '../models/bulk-create-report';
import { OldCeshtja } from '../models/old-ceshtja';

@Injectable({
  providedIn: 'root',
})
export class OldCeshtjaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOldCeshtjaGet
   */
  static readonly ApiOldCeshtjaGetPath = '/api/OldCeshtja';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<OldCeshtja>>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OldCeshtja>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaGet$Plain(params?: {
  }): Observable<Array<OldCeshtja>> {

    return this.apiOldCeshtjaGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OldCeshtja>>) => r.body as Array<OldCeshtja>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<OldCeshtja>>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OldCeshtja>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaGet$Json(params?: {
  }): Observable<Array<OldCeshtja>> {

    return this.apiOldCeshtjaGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OldCeshtja>>) => r.body as Array<OldCeshtja>)
    );
  }

  /**
   * Path part for operation apiOldCeshtjaPut
   */
  static readonly ApiOldCeshtjaPutPath = '/api/OldCeshtja';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaPut$Response(params?: {
    body?: OldCeshtja
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiOldCeshtjaPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaPut(params?: {
    body?: OldCeshtja
  }): Observable<void> {

    return this.apiOldCeshtjaPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiOldCeshtjaPost
   */
  static readonly ApiOldCeshtjaPostPath = '/api/OldCeshtja';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaPost$Plain$Response(params?: {
    body?: OldCeshtja
  }): Observable<StrictHttpResponse<OldCeshtja>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OldCeshtja>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaPost$Plain(params?: {
    body?: OldCeshtja
  }): Observable<OldCeshtja> {

    return this.apiOldCeshtjaPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OldCeshtja>) => r.body as OldCeshtja)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaPost$Json$Response(params?: {
    body?: OldCeshtja
  }): Observable<StrictHttpResponse<OldCeshtja>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OldCeshtja>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaPost$Json(params?: {
    body?: OldCeshtja
  }): Observable<OldCeshtja> {

    return this.apiOldCeshtjaPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<OldCeshtja>) => r.body as OldCeshtja)
    );
  }

  /**
   * Path part for operation apiOldCeshtjaDelete
   */
  static readonly ApiOldCeshtjaDeletePath = '/api/OldCeshtja';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaDelete$Response(params?: {
    body?: OldCeshtja
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiOldCeshtjaDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaDelete(params?: {
    body?: OldCeshtja
  }): Observable<void> {

    return this.apiOldCeshtjaDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiOldCeshtjaIdGet
   */
  static readonly ApiOldCeshtjaIdGetPath = '/api/OldCeshtja/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<OldCeshtja>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OldCeshtja>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaIdGet$Plain(params: {
    id: number;
  }): Observable<OldCeshtja> {

    return this.apiOldCeshtjaIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OldCeshtja>) => r.body as OldCeshtja)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<OldCeshtja>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OldCeshtja>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOldCeshtjaIdGet$Json(params: {
    id: number;
  }): Observable<OldCeshtja> {

    return this.apiOldCeshtjaIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<OldCeshtja>) => r.body as OldCeshtja)
    );
  }

  /**
   * Path part for operation apiOldCeshtjaBulkPost
   */
  static readonly ApiOldCeshtjaBulkPostPath = '/api/OldCeshtja/bulk';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaBulkPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaBulkPost$Plain$Response(params?: {
    body?: Array<OldCeshtja>
  }): Observable<StrictHttpResponse<BulkCreateReport>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaBulkPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BulkCreateReport>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaBulkPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaBulkPost$Plain(params?: {
    body?: Array<OldCeshtja>
  }): Observable<BulkCreateReport> {

    return this.apiOldCeshtjaBulkPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BulkCreateReport>) => r.body as BulkCreateReport)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOldCeshtjaBulkPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaBulkPost$Json$Response(params?: {
    body?: Array<OldCeshtja>
  }): Observable<StrictHttpResponse<BulkCreateReport>> {

    const rb = new RequestBuilder(this.rootUrl, OldCeshtjaService.ApiOldCeshtjaBulkPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BulkCreateReport>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOldCeshtjaBulkPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOldCeshtjaBulkPost$Json(params?: {
    body?: Array<OldCeshtja>
  }): Observable<BulkCreateReport> {

    return this.apiOldCeshtjaBulkPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BulkCreateReport>) => r.body as BulkCreateReport)
    );
  }

}
