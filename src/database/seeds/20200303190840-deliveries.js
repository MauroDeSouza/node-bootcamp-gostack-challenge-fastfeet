module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      { tableName: 'deliveries', model: 'Delivery' },
      [
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Store 1',
          start_date: null,
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Store 2',
          start_date: null,
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Withdraw 1',
          start_date: new Date(),
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Withdraw 2',
          start_date: new Date(),
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Completed 1',
          start_date: new Date(),
          end_date: new Date(),
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Completed 2',
          start_date: new Date(),
          end_date: new Date(),
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Canceled 1',
          start_date: new Date(),
          end_date: null,
          canceled_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Canceled 2',
          start_date: new Date(),
          end_date: null,
          canceled_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
