import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'movies',
      storage,
      whitelist: ['page'],
    },
    reducers
  );

  return persistedReducer;
};
