import { RebeloutpostPage } from './app.po';

describe('rebeloutpost App', function() {
  let page: RebeloutpostPage;

  beforeEach(() => {
    page = new RebeloutpostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rebeloutpost works!');
  });
});
