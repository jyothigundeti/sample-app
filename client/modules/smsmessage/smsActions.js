import callApi from '../../util/apiCaller';

// Export Constants
export const SEND_SMS= 'SEND_SMS';

//action creators
export function sendSms(sendDetails) {
  return {
    type: SEND_SMS,
    sendDetails,
  };
}

export function sendSMSRequest(sendDetails) {
   console.log('user values are:',sendDetails);
  return (dispatch) => {
    return callApi('smsGateway', 'post', {
      sendDetails: {
        to: sendDetails.to,
        body: sendDetails.body,
        
      },
    }).then(res => dispatch(sendSms(res.sendDetails)));
  };
}

