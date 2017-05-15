const getters = {
  token: state => state.login.token,
  avatar: state => state.login.avatar,
  name: state => state.login.name,
  uid: state => state.login.uid,
  email: state => state.login.email,
  introduction: state => state.login.introduction,
  auth_type: state => state.login.auth_type,
  status: state => state.login.status,
  roles: state => state.login.roles,
  setting: state => state.login.setting
};
export default getters
