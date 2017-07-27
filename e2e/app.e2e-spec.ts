import { AngularHttpPage } from './app.po';

describe('angular-http App', () => {
  let page: AngularHttpPage;

  beforeEach(() => {
    page = new AngularHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
