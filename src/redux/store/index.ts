import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../reducer/authReducer';
import { invoiceReducer } from '../reducer/invoiceReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'invoice']
}

const reducers = combineReducers({
  auth: authReducer,
  invoice: invoiceReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer, // persistedReducer, reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);