import { ADD_SIGNUP } from './signupActions';

const initialState = {
	isRegistering: "True",
	isRegistered: "False",
	isRegisteredFailed: "False"
};

const signupReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_SIGNUP':
			return Object.assign({},state,{
				
				isRegistering: "False",
				isRegistered: "True",
				isRegisteredFailed: "False"
			});
	
		default: 
			return state
	}
}
export default signupReducers;

