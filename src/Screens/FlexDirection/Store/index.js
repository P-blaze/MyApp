import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

import FlexDirection from './FlexDirection'

const sliceInitialState = {item: []}

export default buildSlice('FlexDirection', [FlexDirection], sliceInitialState)
  .reducer
