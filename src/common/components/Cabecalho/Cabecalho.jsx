import React from 'react'
import styled from 'styled-components'
import Status from '../Status'

const Container = styled.div`
  text-align: center;
  color: ${({theme}) => theme.colors.rosa};

  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: bold;
  }

  p {
    margin: 0;
  }
`

const Cabecalho = () => {
  return (
    <Container>
      <h1>Seja bem-vindo ao InfoCão</h1>

      <p>Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.</p>

      <Status />
    </Container>
  )
}

export default Cabecalho