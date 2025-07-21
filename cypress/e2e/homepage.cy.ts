describe("Page d'accueil", () => {
  it("affiche le titre, le contenu et le bouton", () => {
    cy.visit("/")

    // Vérifie le titre
    cy.contains("h1", "Welcome to the Homepage").should("be.visible")

    // Vérifie un paragraphe
    cy.contains("This is the homepage content.").should("exist")

    // Vérifie que le bouton est présent
    cy.contains("button", "Click Me").should("be.visible")
  })

  it("déclenche une alerte au clic sur le bouton", () => {
    cy.visit("/")

    // Intercepte l'alerte
    cy.on("window:alert", (txt) => {
      expect(txt).to.equal("Bienvenue !")
    })

    // Clique sur le bouton
    cy.contains("Click Me").click()
  })
})
