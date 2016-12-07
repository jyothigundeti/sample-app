import { LOGIN } from './LoginActions';

const initialState = {
	isLogin: "True",
	isLogged: "False",
	isLoggedFailed: "False"
};

const LoginReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return Object.assign({},state,{
				
				isLogin: "False",
				isLogged: "True",
				isLoggedFailed: "False"
			});
	
		default: 
			return state
	}
}
export default LoginReducers;


// const initialState = {
// 	isFetching: false,
// 	isAuthenticated: false,
// 	errMessage: ''
// };

// export default function (state = initialState, action) {
// 	switch (action.type) {
// 		case 'REQUEST_LOGIN':
// 			return Object.assign(
// 				{
// 				username:action.username,
// 				password:action.password,
// 				state,
// 				isFetching: true,
// 				isAuthenticated: false
// 			});
// 		case 'LOGIN_SUCCESS':
// 			return Object.assign(
// 				{
// 				err:'',
// 				state,
// 				isFetching: false,
// 				isAuthenticated:true
// 				});
// 		case 'LOGIN_FAILURE':
// 			return Object.assign(
// 				{
// 				err:action.err,
// 				state,
// 				isFetching:false,
// 				isAuthenticated:false
// 				});
// 			break;
// 		default: 
// 			return state;
// 	}
// }