import { HttpResponse, HttpRequest } from '../protocols/http';

export class SignUpController {
  handle(_httpRequest: HttpRequest): HttpResponse {
    if (!_httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      };
    }

    if (!_httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      };
    }

    return null;
  }
}
