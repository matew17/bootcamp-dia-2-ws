import { DayTwoWsPage } from './app.po';

describe('day-two-ws App', () => {
  let page: DayTwoWsPage;

  beforeEach(() => {
    page = new DayTwoWsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
