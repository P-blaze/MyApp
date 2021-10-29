import { Box } from 'native-base'
import React, { useState } from 'react'

import FlexComponent from '@/Screens/FlexDirection/Components/FlexComponent'
import ButtonComponents from '@/Screens/FlexDirection/Components/ButtonComponents'

const FlexDirectionBasics = () => {
  const [currentFlex, setCurrentFlex] = useState('row')
  const buttonNames = ['row', 'column', 'row-reverse', 'column-reverse']
  const boxColors = ['primary.200', 'primary.400', 'primary.600']

  const setFlexHandler = flexValue => {
    setCurrentFlex(flexValue)
  }
  return (
    <Box flex={1} bg="blue.100">
      <Box
        paddingVertical={7}
        paddingHorizontal={2}
        width="100%"
        flexDirection="row"
        flexWrap="wrap"
        backgroundColor="gray.200"
      >
        {buttonNames.map(btnName => (
          <ButtonComponents
            key={btnName}
            btnHandler={setFlexHandler}
            btnName={btnName}
          />
        ))}
      </Box>

      <FlexComponent boxes={boxColors} myFlex={currentFlex} />
    </Box>
  )
}

export default FlexDirectionBasics
