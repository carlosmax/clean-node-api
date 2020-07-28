import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest } from '../../helpers/http-helper';
import { MissingParamError } from '../../erros';

export class LoginController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise((resolve) => resolve(badRequest(new MissingParamError('email'))));
    }

    if (!httpRequest.body.password) {
      return new Promise((resolve) => resolve(badRequest(new MissingParamError('password'))));
    }

    return new Promise((resolve) => resolve());
  }
}
