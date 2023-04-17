import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {profileReducer} from './src/store/reducers/profileReducers';

const rootReducer = combineReducers({
  profileReducer: profileReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
