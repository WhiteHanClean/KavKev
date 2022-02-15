import React from 'react';
import { Provider } from 'react-redux';
import Registration from '../components/Registration/Registration';
import { store } from '../redux/store';
function registration() {
  return (
    <>
      <Provider store={store}>
        <Registration />
      </Provider>
    </>
  );
}

export default registration;
