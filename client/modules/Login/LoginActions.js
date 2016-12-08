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

