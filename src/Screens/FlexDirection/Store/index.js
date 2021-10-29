import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

import FlexDirection from './FlexDirection'

const sliceInitialState = {}

export default buildSlice('flexDirection', [FlexDirection], sliceInitialState)
  .reducer
