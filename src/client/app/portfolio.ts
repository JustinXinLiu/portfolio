import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'portfolio-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/portfolio.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class PortfolioApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
