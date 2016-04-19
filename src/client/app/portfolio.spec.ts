import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {PortfolioApp} from '../app/portfolio';

beforeEachProviders(() => [PortfolioApp]);

describe('App: Portfolio', () => {
  it('should have the `defaultMeaning` as 42', inject([PortfolioApp], (app: PortfolioApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([PortfolioApp], (app: PortfolioApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

