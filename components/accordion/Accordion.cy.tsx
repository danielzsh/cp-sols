import React from 'react'
import { Accordion } from './Accordion'

describe('<Accordion />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Accordion style={{flex: 1}}
        content={
          {
            'button 1': <>content 1</>,
            'button 2': <>content 2</>,
            'button 3': {
              'nested': <>content 3</>
            }
          }
        }
      />
    )
  })
})