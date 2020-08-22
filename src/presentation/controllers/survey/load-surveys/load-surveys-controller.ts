import {
  Controller, HttpResponse, LoadSurveys
} from './load-surveys-controller-protocols';

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurvey: LoadSurveys) {}

  async handle(): Promise<HttpResponse> {
    await this.loadSurvey.load();
    return null;
  }
}
