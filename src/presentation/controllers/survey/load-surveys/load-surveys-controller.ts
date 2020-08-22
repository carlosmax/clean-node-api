import {
  Controller, HttpResponse, LoadSurveys
} from './load-surveys-controller-protocols';
import { ok } from '../../../helpers/http/http-helper';

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurvey: LoadSurveys) {}

  async handle(): Promise<HttpResponse> {
    const surveys = await this.loadSurvey.load();
    return ok(surveys);
  }
}
