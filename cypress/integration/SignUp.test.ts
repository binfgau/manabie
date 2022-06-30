/// <reference types="cypress"/>

describe('Multi step form functionality', () => {
  it('should prevent user from submitting a form if inputs are incomplete or miss matched otherwise it complete it and see the Success Message', () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
    cy.contains('This is a required field').should('exist');
    cy.get('input[name=firstName]').type('   ');
    cy.contains('This is a required field').should(
      'have.text',
      'This is a required field'
    );
    cy.get('input[name=firstName]').type('Văn');
    cy.get('button').click();
    cy.get('input[name=lastName]').type('Bình');
    cy.get('button').click();
  });
});
