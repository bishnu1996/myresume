let USER_DATA = {};
export const registerUser = (payload) => {
  USER_DATA = {
    username: payload.username,
    email: payload.email,
    password: payload.password,
    confirmPassword: payload.confirmPassword,
    id: Math.random().toString().slice(2),
    token: "xx5x2x91331x3x3x341xx51176x7xxx182x65xxx",
  };
  return Promise.resolve({
    status: {
      type: 'success',
      code: 200,
      message: "Registration successfull",
      error: false,
    },
    data: {
      ...USER_DATA,
    },
  });
};
