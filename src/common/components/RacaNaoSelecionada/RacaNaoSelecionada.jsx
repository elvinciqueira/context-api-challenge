import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    display: block;
    height: 150px;
    margin: 0 auto;
`

const RacaNaoSelecionada = () => (
  <div>
    <Image
      alt="Pug triste"
      src="https://www.oversodoinverso.com.br/wp-content/uploads/2015/05/pugs-tristes-2.jpg"
    />
  </div>
)

export default RacaNaoSelecionada