import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RebeloutpostAppComponent } from '../app/rebeloutpost.component';

beforeEachProviders(() => [RebeloutpostAppComponent]);

describe('App: Rebeloutpost', () => {
  it('should create the app',
      inject([RebeloutpostAppComponent], (app: RebeloutpostAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rebeloutpost works!\'',
      inject([RebeloutpostAppComponent], (app: RebeloutpostAppComponent) => {
    expect(app.title).toEqual('rebeloutpost works!');
  }));
});
