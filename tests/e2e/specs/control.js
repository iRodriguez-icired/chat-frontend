describe('Not empty', () => {
  it('Cant navigate without name', () => {
    cy.visit('http://localhost:8080');
    cy.get('.btn').click();
    cy.get('.toasted');
  });
  it('Cant create room witout name', () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Pedro');
    cy.get('.btn').click();
    cy.get('button').type('Crea una sala');
    cy.get('input').type('{enter}');
    cy.get('.toasted');
  });
  it('Cant send a empty sms', () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Pedro');
    cy.get('.btn').click();
    cy.get('.btn-info:first', { timeout: 10000 }).click();
    cy.get('input').type('{enter}');
    cy.get('.toasted');
  });
});
