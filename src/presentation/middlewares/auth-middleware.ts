import { Middleware, HttpRequest, HttpResponse } from '../protocols';
import { forbidden } from '../helpers/http/http-helper';
import { AccessDeniedError } from '../erros';

export class AuthMiddleware implements Middleware {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError());
    return new Promise((resolve) => resolve(error));
  }
}
