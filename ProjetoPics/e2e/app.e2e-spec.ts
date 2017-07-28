import { ProjetoPicsPage } from './app.po';

describe('projeto-pics App', () => {
  let page: ProjetoPicsPage;

  beforeEach(() => {
    page = new ProjetoPicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
