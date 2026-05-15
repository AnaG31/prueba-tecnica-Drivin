describe('Login Sauce Demo', ()=>{

beforeEach('visitar Sauce Demo web', () =>{
    cy.visit('/')
})

   it('login exitoso con distintos usuarios', () =>{
    cy.fixture('usersSauceDemo').then((users) =>{

    users.validUsers.forEach((user) =>{

    cy.get('[data-test="username"]').type(user.username)
    cy.get('[data-test="password"]').type(user.password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory')
    cy.get('[data-test="title"]').should('have.text', 'Products')
    cy.logout()

    })
   })
 })

  it('Login con usuario bloqueado', () =>{
    cy.fixture('usersSauceDemo').then((users) =>{

    cy.get('[data-test="username"]').type(users.blockedUser.username)
    cy.get('[data-test="password"]').type(users.blockedUser.password)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Sorry, this user has been locked out.')
    cy.url().should('eq', 'https://www.saucedemo.com/')
   })
  })
})