import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('flexDirection/FlexDirection'),
  reducers(state, { payload }) {
    state.FlexDirection = ['row', 'column']
  },
}
