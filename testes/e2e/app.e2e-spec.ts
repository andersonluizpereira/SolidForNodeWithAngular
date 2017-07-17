import { TestesPage } from './app.po';

describe('testes App', () => {
  let page: TestesPage;

  beforeEach(() => {
    page = new TestesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
