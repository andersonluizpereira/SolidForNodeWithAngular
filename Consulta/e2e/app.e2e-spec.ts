import { ConsultaPage } from './app.po';

describe('consulta App', () => {
  let page: ConsultaPage;

  beforeEach(() => {
    page = new ConsultaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
