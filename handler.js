const UsersService = require('./src/services/User/user.service')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.createUser = async (event) => {
  // handler for creating user
}

module.exports.getUsers = async (event) => {
  // handler for getting users
  return {
    statusCode: 200,
    body: JSON.stringify({ data: UsersService.listUsers() })
  }
}

module.exports.getUserInfo = async (event) => {
  // handler for getting user details
}

module.exports.updateUserInfo = async (event) => {
  // handler for updating user details
}

module.exports.deleteUser = async (event) => {
  // handler for deleting user
}
