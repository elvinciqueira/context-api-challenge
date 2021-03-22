import React from 'react'
import styled from 'styled-components'
import {useRaca} from '../../../hooks/raca'

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    background-color: ${({theme}) => theme.colors.rosaClaro};
    border: 2px solid ${({theme}) => theme.colors.rosaClaro};
    border-radius: 5px;
    color: ${({theme}) => theme.colors.branco};
    cursor: pointer;
    flex-grow: 1;
    margin: 10px;
    padding: 15px;
    text-align: center;

    &:hover {
      background-color: ${({theme}) => theme.colors.rosaClaro};
      color: ${({theme}) => theme.colors.rosa};
    }
  }
`


const ListaRacas = () => {
  const {selecionaRaca, racas} = useRaca()
  
  return (
    <Container>
      {
        racas.map(({id, name}) => (
          <li
            key={id}
            onClick={() => selecionaRaca(name)}
          >
            {name}
          </li>
        ))
      }
    </Container>
  )
}

export default ListaRacas