import React from 'react'
import styled from 'styled-components'
import {useRaca} from '../../../hooks/raca'

const Paragraph = styled.p`
    padding: 10px;
    display: inline-block;
    font-weight: bold;
`

const Status = () => {
  const { status } = useRaca()

  return (
    <Paragraph>{status}</Paragraph>
  )
}

export default Status