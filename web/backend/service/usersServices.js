module.exports = userRepository => {
  return {
    getAllUsers: () => {
      return userRepository.getAllUsers();
    }
  };
};
