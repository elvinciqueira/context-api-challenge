import React from 'react'
import styled from 'styled-components'

import {useRaca} from '../../../hooks/raca'


const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 4px solid ${({theme}) => theme.colors.rosa};
  border-radius: 5px;
  text-align: center;
  background-color: ${({theme}) => theme.colors.rosaClaro};
  display: flex;
  flex-direction: column;

  &.invisivel {
    display: none;
  }

  h2 {
    margin: 0;
    background-color: ${({theme}) => theme.colors.rosa};
    color: ${({theme}) => theme.colors.branco};
    padding-top: 10px;
    font-size: 18px;
    font-weight: normal;
  }

  p {
    background-color: ${({theme}) => theme.colors.rosa};
    margin: 0;
    color: ${({theme}) => theme.colors.branco};
    padding: 5px;
    font-size: 14px;

    span {
      font-weight: bold;
    }
  }

  img {
    max-width: 100%;
    min-width: 300px;
    max-height: 300px;
    object-fit: cover;
    flex-grow: 1;
  }
`

const RacaSelecionada = () => {
  const {raca} = useRaca()
  
  return (
    <Container>
      <h2>
        {raca.name}
      </h2>
      <p>
        <span>
          Tempo de vida:
        </span>
        {raca.life_span}
      </p>
      <img
        alt="Imagem de raca"
        src={raca.imagem}
      />
    </Container>
  )
}

export default RacaSelecionada