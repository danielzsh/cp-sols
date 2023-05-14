import React from 'react'
import { AccordionElement } from './AccordionElement'

describe('<AccordionElement />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AccordionElement label="button">content</AccordionElement>)
  })
})