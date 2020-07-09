import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../erros/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';

export class SignUpController implements Controller {
  handle(_httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requiredFields) {
      if (!_httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return null;
  }
}
