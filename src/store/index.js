import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'modules';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware()
  )
)

export default store;