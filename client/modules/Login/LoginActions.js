import callApi from '../../util/apiCaller';

export const LOGIN = 'LOGIN';
//action creators
export function createUser(users) {
  return {
    type: LOGIN,
    users,
  };
}

export function addLoginRequest(users) {
  console.log('user values are:',users);
  return (dispatch) => {
    return callApi('userLogin', 'post', {
      users: {
        email: users.email,
        password: users.password,
        
      },
    }).then(res => dispatch(createUser(res.users)));
  };
}


// export const REQUEST_LOGIN = 'REQUEST_LOGIN';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';


// //action creators
// export function requestLogin(username, password) {
// 	const user ={
// 		username: username,
// 		password: password
// 	};
// 	return {
// 		user,
// 		type: REQUEST_LOGIN,

// 	};
// }

// export function loginSuccess(user) {
// 	return dispatch => {
// 		dispatch({
// 		user,
// 		type: LOGIN_SUCCESS,
// 		});
// 	}
// }

// export function loginFailure(err) {
// 	return {
// 		err
// 		type: LOGIN_FAILURE,
		
// 	};
// }
// export function login(username, password){
// 	console.log("Logged in")
// 	return dispatch =>
// 	fetch('http://',{
// 		method:'POST',
// 		body:JSON.str
// 	})
// }