import React from 'react';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import Registration from '../components/Registration/Registration';
import { store } from '../redux/store';
function registration() {
  return (
    <>
      <Provider store={store}>
        <Registration />
        <Footer />
      </Provider>
    </>
  );
}

export default registration;
