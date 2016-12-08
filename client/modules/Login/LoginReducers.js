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
				isLoggedFailed: "False",
				data: action.users
			});
	
		default: 
			return state
	}
}


export default LoginReducers;


