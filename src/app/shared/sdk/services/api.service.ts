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

import { CeshtjetDto } from '../models/ceshtjet-dto';
import { CreateKategoriteDto } from '../models/create-kategorite-dto';
import { CreateKomentiDto } from '../models/create-komenti-dto';
import { PersonatDto } from '../models/personat-dto';
import { UpdateKategoriteDto } from '../models/update-kategorite-dto';
import { UpdateKomentiDto } from '../models/update-komenti-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation ceshtjetControllerFindAll
   */
  static readonly CeshtjetControllerFindAllPath = '/api/v1/ceshtjet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ceshtjetControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  ceshtjetControllerFindAll$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.CeshtjetControllerFindAllPath, 'get');
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
   * To access the full response (for headers, for example), `ceshtjetControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ceshtjetControllerFindAll(params?: {
  }): Observable<void> {

    return this.ceshtjetControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ceshtjetControllerCreate
   */
  static readonly CeshtjetControllerCreatePath = '/api/v1/ceshtjet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ceshtjetControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ceshtjetControllerCreate$Response(params: {
    body: CeshtjetDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.CeshtjetControllerCreatePath, 'post');
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
   * To access the full response (for headers, for example), `ceshtjetControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ceshtjetControllerCreate(params: {
    body: CeshtjetDto
  }): Observable<void> {

    return this.ceshtjetControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ceshtjetControllerFindOne
   */
  static readonly CeshtjetControllerFindOnePath = '/api/v1/ceshtjet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ceshtjetControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  ceshtjetControllerFindOne$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.CeshtjetControllerFindOnePath, 'get');
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
   * To access the full response (for headers, for example), `ceshtjetControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ceshtjetControllerFindOne(params: {
    id: string;
  }): Observable<void> {

    return this.ceshtjetControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ceshtjetControllerRemove
   */
  static readonly CeshtjetControllerRemovePath = '/api/v1/ceshtjet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ceshtjetControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  ceshtjetControllerRemove$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.CeshtjetControllerRemovePath, 'delete');
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
   * To access the full response (for headers, for example), `ceshtjetControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ceshtjetControllerRemove(params: {
    id: string;
  }): Observable<void> {

    return this.ceshtjetControllerRemove$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ceshtjetControllerUpdate
   */
  static readonly CeshtjetControllerUpdatePath = '/api/v1/ceshtjet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ceshtjetControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ceshtjetControllerUpdate$Response(params: {
    id: string;
    body: CeshtjetDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.CeshtjetControllerUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `ceshtjetControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ceshtjetControllerUpdate(params: {
    id: string;
    body: CeshtjetDto
  }): Observable<void> {

    return this.ceshtjetControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation personatControllerFindAll
   */
  static readonly PersonatControllerFindAllPath = '/api/v1/personat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personatControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  personatControllerFindAll$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PersonatControllerFindAllPath, 'get');
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
   * To access the full response (for headers, for example), `personatControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personatControllerFindAll(params?: {
  }): Observable<void> {

    return this.personatControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation personatControllerCreate
   */
  static readonly PersonatControllerCreatePath = '/api/v1/personat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personatControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personatControllerCreate$Response(params: {
    body: PersonatDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PersonatControllerCreatePath, 'post');
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
   * To access the full response (for headers, for example), `personatControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personatControllerCreate(params: {
    body: PersonatDto
  }): Observable<void> {

    return this.personatControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation personatControllerFindOne
   */
  static readonly PersonatControllerFindOnePath = '/api/v1/personat/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personatControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  personatControllerFindOne$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PersonatControllerFindOnePath, 'get');
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
   * To access the full response (for headers, for example), `personatControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personatControllerFindOne(params: {
    id: string;
  }): Observable<void> {

    return this.personatControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation personatControllerRemove
   */
  static readonly PersonatControllerRemovePath = '/api/v1/personat/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personatControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  personatControllerRemove$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PersonatControllerRemovePath, 'delete');
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
   * To access the full response (for headers, for example), `personatControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personatControllerRemove(params: {
    id: string;
  }): Observable<void> {

    return this.personatControllerRemove$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation personatControllerUpdate
   */
  static readonly PersonatControllerUpdatePath = '/api/v1/personat/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personatControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personatControllerUpdate$Response(params: {
    id: string;
    body: PersonatDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PersonatControllerUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `personatControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personatControllerUpdate(params: {
    id: string;
    body: PersonatDto
  }): Observable<void> {

    return this.personatControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation kategoriteControllerFindAll
   */
  static readonly KategoriteControllerFindAllPath = '/api/v1/kategorite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kategoriteControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  kategoriteControllerFindAll$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KategoriteControllerFindAllPath, 'get');
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
   * To access the full response (for headers, for example), `kategoriteControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kategoriteControllerFindAll(params?: {
  }): Observable<void> {

    return this.kategoriteControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation kategoriteControllerCreate
   */
  static readonly KategoriteControllerCreatePath = '/api/v1/kategorite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kategoriteControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kategoriteControllerCreate$Response(params: {
    body: CreateKategoriteDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KategoriteControllerCreatePath, 'post');
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
   * To access the full response (for headers, for example), `kategoriteControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kategoriteControllerCreate(params: {
    body: CreateKategoriteDto
  }): Observable<void> {

    return this.kategoriteControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation kategoriteControllerFindOne
   */
  static readonly KategoriteControllerFindOnePath = '/api/v1/kategorite/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kategoriteControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  kategoriteControllerFindOne$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KategoriteControllerFindOnePath, 'get');
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
   * To access the full response (for headers, for example), `kategoriteControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kategoriteControllerFindOne(params: {
    id: string;
  }): Observable<void> {

    return this.kategoriteControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation kategoriteControllerRemove
   */
  static readonly KategoriteControllerRemovePath = '/api/v1/kategorite/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kategoriteControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  kategoriteControllerRemove$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KategoriteControllerRemovePath, 'delete');
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
   * To access the full response (for headers, for example), `kategoriteControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kategoriteControllerRemove(params: {
    id: string;
  }): Observable<void> {

    return this.kategoriteControllerRemove$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation kategoriteControllerUpdate
   */
  static readonly KategoriteControllerUpdatePath = '/api/v1/kategorite/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kategoriteControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kategoriteControllerUpdate$Response(params: {
    id: string;
    body: UpdateKategoriteDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KategoriteControllerUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `kategoriteControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kategoriteControllerUpdate(params: {
    id: string;
    body: UpdateKategoriteDto
  }): Observable<void> {

    return this.kategoriteControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation komentiControllerFindAll
   */
  static readonly KomentiControllerFindAllPath = '/api/v1/komenti';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `komentiControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  komentiControllerFindAll$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KomentiControllerFindAllPath, 'get');
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
   * To access the full response (for headers, for example), `komentiControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  komentiControllerFindAll(params?: {
  }): Observable<void> {

    return this.komentiControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation komentiControllerCreate
   */
  static readonly KomentiControllerCreatePath = '/api/v1/komenti';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `komentiControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  komentiControllerCreate$Response(params: {
    body: CreateKomentiDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KomentiControllerCreatePath, 'post');
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
   * To access the full response (for headers, for example), `komentiControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  komentiControllerCreate(params: {
    body: CreateKomentiDto
  }): Observable<void> {

    return this.komentiControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation komentiControllerFindOne
   */
  static readonly KomentiControllerFindOnePath = '/api/v1/komenti/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `komentiControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  komentiControllerFindOne$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KomentiControllerFindOnePath, 'get');
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
   * To access the full response (for headers, for example), `komentiControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  komentiControllerFindOne(params: {
    id: string;
  }): Observable<void> {

    return this.komentiControllerFindOne$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation komentiControllerRemove
   */
  static readonly KomentiControllerRemovePath = '/api/v1/komenti/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `komentiControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  komentiControllerRemove$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KomentiControllerRemovePath, 'delete');
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
   * To access the full response (for headers, for example), `komentiControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  komentiControllerRemove(params: {
    id: string;
  }): Observable<void> {

    return this.komentiControllerRemove$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation komentiControllerUpdate
   */
  static readonly KomentiControllerUpdatePath = '/api/v1/komenti/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `komentiControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  komentiControllerUpdate$Response(params: {
    id: string;
    body: UpdateKomentiDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.KomentiControllerUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `komentiControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  komentiControllerUpdate(params: {
    id: string;
    body: UpdateKomentiDto
  }): Observable<void> {

    return this.komentiControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
