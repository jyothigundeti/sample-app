/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import signup from './modules/signup/signupReducers';
import Login from './modules/Login/LoginReducers';
import sms from './modules/smsmessage/smsReducers';
//import register from './modules/register/registerReducers';
// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  signup,
  Login,
  sms
});
