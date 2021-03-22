import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import {useRaca} from '../../../hooks/raca'

const Raca = () => {
  const {raca} = useRaca()
  const racaFoiSelecionada = Boolean(raca.name)

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada  />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca