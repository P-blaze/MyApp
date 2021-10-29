import { Button } from 'native-base'
import React from 'react'

const ButtonComponents = props => {
  return (
    <Button
      size="lg"
      alignSelf="flex-start"
      width="47%"
      m={1}
      onPress={() => props.btnHandler(props.btnName)}
    >
      {props.btnName}
    </Button>
  )
}

export default ButtonComponents
