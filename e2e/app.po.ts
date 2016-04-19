export class PortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('portfolio-app p')).getText();
  }
}
