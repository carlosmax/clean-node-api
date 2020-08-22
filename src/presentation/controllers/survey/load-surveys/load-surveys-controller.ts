import {
  Controller, HttpResponse, LoadSurveys
} from './load-surveys-controller-protocols';
import { ok, serverError, noContent } from '../../../helpers/http/http-helper';

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurvey: LoadSurveys) {}

  async handle(): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurvey.load();
      return surveys.length ? ok(surveys) : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
