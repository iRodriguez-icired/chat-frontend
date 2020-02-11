describe('Create Romm', () => {
  it('Create', () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Pedro');
    cy.get('.btn').click();
    cy.get('button').type('Crea una sala');
    cy.get('input').type('Sala Test').type('{enter}');
  });
});

describe('Send Msg', () => {
  it('Send MsG', () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Pedro');
    cy.get('.btn').click();
    cy.get('.btn-info:first', { timeout: 10000 }).click();
    cy.get('input').type('Mensaje test').type('{enter}');
  });
});
