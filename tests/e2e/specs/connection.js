describe('Should get ', () => {
  it('Should get romms', () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Pedro');
    cy.get('.btn').click();
    cy.get('.btn-info:first', {timeout: 10000});
  });
  it('Send MsG', () => {
    cy.visit('http://localhost:8080');
    cy.get('input').type('Pedro');
    cy.get('.btn').click();
    cy.get('.btn-info:first', {timeout: 10000}).click();
    cy.get('#box', {timeout: 5000}).find('p');
  });
});
