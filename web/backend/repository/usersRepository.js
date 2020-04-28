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
      reservations.res_date AS date,
      reservations.start_time AS timeslot
      FROM reservations
      JOIN users ON reservations.user_id = users.id
      JOIN stores ON reservations.store_id = stores.id
      WHERE users.id = 1
      GROUP BY users.first_name, stores.name, reservations.id, reservations.res_date;`;
      return db.query(qs);
    },
    getStoreReservations: () => {
      const qs = `SELECT reservations.* AS bookings
      FROM reservations
      JOIN stores ON reservations.store_id = stores.id
      WHERE stores.id = 2
      AND reservations.res_date > now()::date;`;
      return db.query(qs);
    }
  };
};
