import { SEND_SMS } from './smsActions';

const initialState = {
	isSending: "True",
	isSent: "False",
	isSentFailed: "False"
};

const smsReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'SEND_SMS':
			return Object.assign({},state,{
				
				isSending: "False",
				isSent: "True",
				isSentFailed: "False",
				data: action.sendDetails
			});
	
		default: 
			return state
	}
}
export default smsReducers;

