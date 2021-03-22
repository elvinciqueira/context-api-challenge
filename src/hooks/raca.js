import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas} from '../api'

const RacaContext = React.createContext({
  racas: [],
  racaSelecionada: {},
  selecionaRaca: () => {},
  status: '',
})

const RacaProvider = ({children}) => {
  const [status, setStatus] = useState(
    'Você ainda não selecionou nenhum cachorro :(',
  )
  const [racas, setRacas] = useState([])
  const [racaSelecionada, setRacaSelecionada] = useState({})

  useEffect(() => {
    buscaSobreRacas()
      .then((informacoes) => {
        carregaListaRacas(informacoes)
      })
      .catch((erro) =>
        setStatus(
          'Oops, algo deu errado no carregamento da página. Pode tentar novamente?',
        ),
      )
  }, [])

  function carregaListaRacas(sobreRacas) {
    buscaTodasRacas().then((racas) => {
      const listaRacasMostradas = sobreRacas.filter((sobre) =>
        racas.includes(sobre.name.toLowerCase()),
      )

      setRacas([...listaRacasMostradas])
    })
  }

  function selecionaRaca(raca) {
    const infoSelecionada = racas.filter((infoRaca) => infoRaca.name === raca)

    buscaImagemPorRaca(raca)
      .then((imagem) => {
        setRacaSelecionada({...racaSelecionada, imagem, ...infoSelecionada[0]})

        setStatus(
          'A imagem sempre será diferente, pode clicar quantas vezes quiser!',
        )
      })
      .catch((erro) => {
        const eh404 = erro.response.status === 404
        const mensagem = eh404
          ? 'Não encontramos essa raça :('
          : 'Oops, algo deu errado. Pode tentar novamente?'

        setStatus(mensagem)
      })
  }

  return (
    <RacaContext.Provider
      value={{status, racas, selecionaRaca, raca: racaSelecionada}}
    >
      {children}
    </RacaContext.Provider>
  )
}

function useRaca() {
  const context = React.useContext(RacaContext)

  if (!context) {
    throw new Error('useRaca must be used within an RacaProvider')
  }

  return context
}

RacaProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export {RacaProvider, useRaca}
