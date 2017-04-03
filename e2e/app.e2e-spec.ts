import { WikiboardPage } from './app.po';

describe('wikiboard App', () => {
  let page: WikiboardPage;

  beforeEach(() => {
    page = new WikiboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
