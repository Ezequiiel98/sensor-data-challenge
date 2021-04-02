module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      businessName: {
        type: Sequelize.STRING,
      },
      rucNumber: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.INTEGER,
      },
      zone: {
        type: Sequelize.ENUM('norte', 'centro', 'sur'),
      },
      phone: {
        type: Sequelize.STRING,
      },
      fax: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      web: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      transitInsurance: {
        type: Sequelize.ENUM('si', 'no', 'opcional'),
      },
      transitCargeInsurance: {
        type: Sequelize.ENUM('si', 'no', 'opcional'),
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  },
};
