import React from 'react';
import { Stack, Redirect } from 'expo-router';
import { Provider ,useSelector } from 'react-redux';
import store from '../redux/store';
import { RootState } from '../redux/store';
const Navigation = () => {
  const isLogin = useSelector((state: RootState) => state.product !== '');

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href='/(main)' /> : <Redirect href='/(auth)' />}
    </>
  );
};

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default RootNavigation;
