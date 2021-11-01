import { Flex, Box } from 'native-base'
import React from 'react'

const FlexComponents = props => {
  return (
    <Flex
      flex={1}
      direction={props.myFlex != ' ' ? props.myFlex : ' '}
      justifyContent={
        props.myJustifyContent != '' ? props.myJustifyContent : ' '
      }
      alignItems={props.alignStyle != '' ? props.alignStyle : ''}
      margin="2%"
      alignContent={
        props.alignContentStyle != '' ? props.alignContentStyle : ' '
      }
    >
      {props.boxes.map(bgColor => (
        <Box key={bgColor} height="70" width="70" backgroundColor={bgColor} />
      ))}
    </Flex>
  )
}

export default FlexComponents
