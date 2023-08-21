/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(uName: string, pwd: string): Chainable<any>;
  }
}
