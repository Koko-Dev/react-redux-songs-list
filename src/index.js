import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore } from 'redux';
import { legacy_createStore as createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

/*
	NOTE:
	 // Redux STORE
	 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	 const prodMiddleware = [thunk, immutableStateInvariant, serializableStateInvariant]:
	 const devMiddleware = [thunk];
	 const middleware = process.env.prod ? prodMiddleware : devMiddleware;
	 const enhancer = composeEnhancers(applyMiddleware(...middleware));

	 NOTE: const ReduxStore = createStore(rootReducer, enhancer);

	 NOTE: // RTK STORE
	  const RTKStore = configureStore({reducer: rootReducer}); */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <Provider store={createStore(reducers)}>
		  <App />
	  </Provider>
  </React.StrictMode>
);


