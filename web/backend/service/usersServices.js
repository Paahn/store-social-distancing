module.exports = userRepository => {
  return {
    getAllUsers: () => {
      return userRepository.getAllUsers();
    },
    getWalmartAddress: () => {
      return userRepository.getWalmartAddress();
    },
    getUserReservations: () => {
      return userRepository.getUserReservations();
    }
  };
};
