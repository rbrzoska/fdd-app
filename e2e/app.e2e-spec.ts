import { FddAppPage } from './app.po';

describe('fdd-app App', function() {
  let page: FddAppPage;

  beforeEach(() => {
    page = new FddAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
