const UserModel = require('../models/User.model');

module.exports.usersController = {
  createUser: async (req, res) => {
    const { name, email, password, img } = req.body;

    try {
      const newUser = await UserModel.create({ name, email, password, img });

      return res.json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
