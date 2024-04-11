import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const ai = {
      "codereply": "# Assuming the data is already loaded into the variable 'dataframe'\n\nclass_counts = dataframe['Class'].value_counts().to_dict()",
      "messagereply": "This is the message reply." 
    };
    return {ai};
  }

  post(reqInfo: RequestInfo) {
    // 获取请求的URL和body
    const collectionName = reqInfo.collectionName;
    let body = reqInfo.utils.getJsonBody(reqInfo.req) || {};

    return reqInfo.utils.createResponse$(() => {
      const res = this.createResponse(collectionName, body);
      return this.addDelay(res);
    });
  }

  private createResponse(collectionName: string, body: any) {
    body = {
      "codereply": "# Assuming the data is already loaded into the variable 'dataframe'\n\nclass_counts = dataframe['Class'].value_counts().to_dict()",
      "messagereply": "This is the message reply." 
    }
    return {
      status: STATUS.OK,
      body
    };
  }

  private addDelay(response: any) {
    return response;
  }
}
