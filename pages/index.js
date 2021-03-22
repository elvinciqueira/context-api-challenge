import styled from 'styled-components'

import Cabecalho from '../src/common/components/Cabecalho'
import ListaRacas from '../src/common/components/ListaRacas'
import Raca from '../src/common/components/Raca'

const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Container>
      <Cabecalho />
      <Raca />
      <ListaRacas />
    </Container>
  )
}
