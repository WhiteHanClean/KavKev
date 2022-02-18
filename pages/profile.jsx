import React from 'react';
import Profile from "../components/ContestComponents/Profile/Profile.jsx"
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useDispatch } from 'react-redux';


function profile() {
  return (
    <Provider store={store}>
      <Profile/>
    </Provider>
  );
}

export default profile;
