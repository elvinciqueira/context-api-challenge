import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'
import {RacaProvider} from './raca'
import {theme} from '../theme'

const GlobalProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RacaProvider>{children}</RacaProvider>
    </ThemeProvider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalProvider
