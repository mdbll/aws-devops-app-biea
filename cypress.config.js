import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173/",
    setupNodeEvents(on, config) {
      // node events si nécessaire
    },
  },
})
