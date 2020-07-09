import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../erros/missing-param-error';

export class SignUpController {
  handle(_httpRequest: HttpRequest): HttpResponse {
    if (!_httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      };
    }

    if (!_httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      };
    }

    return null;
  }
}
