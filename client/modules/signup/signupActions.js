import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_SIGNUP = 'ADD_SIGNUP';

//action creators
export function addUser(userDetails) {
  return {
    type: ADD_SIGNUP,
    userDetails,
  };
}

export function addSignUpRequest(userDetails) {
  return (dispatch) => {
    return callApi('userRegistration', 'post', {
      userDetails: {
        fname: userDetails.fname,
        lname: userDetails.lname,
        email: userDetails.email,
        password: userDetails.password,
        mobile: userDetails.mobile,
      },
    }).then(res => dispatch(addUser(res.userDetails)));
  };
}


