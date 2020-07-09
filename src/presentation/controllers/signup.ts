import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../erros/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export class SignUpController {
  handle(_httpRequest: HttpRequest): HttpResponse {
    if (!_httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!_httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }

    const requiredFields = ['name', 'email', 'password'];
    for (const field of requiredFields) {
      if (!_httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return null;
  }
}
