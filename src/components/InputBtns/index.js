import React from 'react'
import { Container } from './styles'

export const InputBtns = ({ title }) => {

  return (
    <Container>
      <div>
        <span>
          {title}
        </span>
      </div>
    </Container>
  )
}