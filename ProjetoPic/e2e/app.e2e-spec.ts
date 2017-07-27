import { ProjetoPicPage } from './app.po';

describe('projeto-pic App', () => {
  let page: ProjetoPicPage;

  beforeEach(() => {
    page = new ProjetoPicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
