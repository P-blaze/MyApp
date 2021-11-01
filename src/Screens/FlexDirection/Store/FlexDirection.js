import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import FlexDirectionApi from '@/Screens/FlexDirection/Services/FlexDirectionAPI'

export default {
  initialState: buildAsyncState('FlexDirection'),
  action: buildAsyncActions('FlexDirection/FlexDirection', FlexDirectionApi),
  reducers: buildAsyncReducers(
    {
      errorKey: 'FlexDirection.error',
      loadingKey: 'FlexDirection.loading'
    }),

}
