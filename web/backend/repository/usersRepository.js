module.exports = db => {
  return {
    getAllUsers: () => {
      const qs = `SELECT * FROM users;`;
      return db.query(qs);
    },
    getWalmartAddress: () => {
      const qs = `SELECT address, max_capacity FROM stores
      WHERE name='Walmart';`;
      return db.query(qs);
    }
  };
};
