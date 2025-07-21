import { render, screen } from "@testing-library/react"
import { expect, test } from 'vitest'
import { Homepage } from "./homepage"

test("renders homepage", () => {
  render(<Homepage />)
  expect(screen.getByText("Welcome to the Homepag")).toBeInTheDocument()
})
