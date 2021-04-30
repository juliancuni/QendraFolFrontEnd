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

import { FileModel } from '../models/file-model';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFileUploadPost
   */
  static readonly ApiFileUploadPostPath = '/api/FileUpload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileUploadPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Plain$Response(params?: {
    body?: { 'FileName'?: string | null, 'FormFile'?: Blob | null }
  }): Observable<StrictHttpResponse<FileModel>> {

    const rb = new RequestBuilder(this.rootUrl, FileUploadService.ApiFileUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFileUploadPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Plain(params?: {
    body?: { 'FileName'?: string | null, 'FormFile'?: Blob | null }
  }): Observable<FileModel> {

    return this.apiFileUploadPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<FileModel>) => r.body as FileModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileUploadPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Json$Response(params?: {
    body?: { 'FileName'?: string | null, 'FormFile'?: Blob | null }
  }): Observable<StrictHttpResponse<FileModel>> {

    const rb = new RequestBuilder(this.rootUrl, FileUploadService.ApiFileUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFileUploadPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Json(params?: {
    body?: { 'FileName'?: string | null, 'FormFile'?: Blob | null }
  }): Observable<FileModel> {

    return this.apiFileUploadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<FileModel>) => r.body as FileModel)
    );
  }

}
