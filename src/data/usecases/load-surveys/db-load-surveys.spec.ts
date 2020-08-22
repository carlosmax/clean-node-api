import { LoadSurveysRepository } from '../../protocols/db/survey/load-surveys-repository';
import { SurveyModel } from '../../../domain/models/survey';
import { DbLoadSurveys } from './db-load-surveys';

const makeFakeSurveys = (): SurveyModel[] => [{
  id: 'any_id',
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
}, {
  id: 'other_id',
  question: 'other_question',
  answers: [{
    image: 'other_image',
    answer: 'other_answer'
  }],
  date: new Date()
}];

describe('DbLoadSurveys', () => {
  test('Should call LoadSurveysRepository', async () => {
    class LoadSurveysRepositoryStub implements LoadSurveysRepository {
      async loadAll(): Promise<SurveyModel[]> {
        return new Promise((resolve) => resolve(makeFakeSurveys()));
      }
    }

    const loadSurveysRepository = new LoadSurveysRepositoryStub();
    const sut = new DbLoadSurveys(loadSurveysRepository);
    await sut.load();
  });
});