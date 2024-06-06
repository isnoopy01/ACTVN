import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/router/navigators/AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persist, store} from './src/redux/store';

export default function App() {
  const role = store.getState().roleReducer.role;
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <NavigationContainer>
          {role === 'teacher' ? null : <AppNavigator />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
