import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // withCredentials: true
};

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private httpClient: HttpClient) {}

  async callApiPost(serviceURL, requestData) {
    const serviceRequestPromise = this.httpClient
      .post(serviceURL, JSON.stringify(requestData), httpOptions)
      .toPromise();
    const rawSrvResp: any = await serviceRequestPromise;
    return rawSrvResp;
  }
  async callApiPut(serviceURL, requestData) {
    const serviceRequestPromise = this.httpClient
      .put(serviceURL, JSON.stringify(requestData), httpOptions)
      .toPromise();
    const rawSrvResp: any = await serviceRequestPromise;
    return rawSrvResp;
  }

  async callApiGet(serviceURL) {
    const serviceRequestPromise = this.httpClient.get(serviceURL).toPromise();
    const rawSrvResp: any = await serviceRequestPromise;
    return rawSrvResp;
  }

  async callApiDelete(serviceURL) {
    const serviceRequestPromise = this.httpClient
      .delete(serviceURL)
      .toPromise();
  }
}
