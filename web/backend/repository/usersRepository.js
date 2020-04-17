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
    },
    getUserReservations: () => {
      const qs = `SELECT users.first_name AS Name,
      stores.name AS Store,
      reservations.start_time AS timeslot
      FROM reservations
      JOIN users ON reservations.user_id = users.id
      JOIN stores ON reservations.store_id = stores.id
      WHERE users.id = 1
      GROUP BY reservations.id;`
    }
  };
};
