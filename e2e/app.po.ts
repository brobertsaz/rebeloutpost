export class RebeloutpostPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rebeloutpost-app h1')).getText();
  }
}
