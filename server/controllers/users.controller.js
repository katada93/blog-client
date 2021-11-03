const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');

module.exports.usersController = {
  register: async (req, res) => {
    const body = req.body;

    try {
      const candidate = await UserModel.findOne({ email: body.email });

      if (candidate) {
        return res
          .status(409)
          .json({ message: 'Пользователь с таким email уже существует!' });
      }

      const salt = bcrypt.genSaltSync(10);

      const hashedPassword = bcrypt.hashSync(body.password, salt);

      await UserModel.create({
        ...body,
        password: hashedPassword,
      });

      return res.status(201).json('Пользователь успешно зарегистрирован!');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const candidate = await UserModel.findOne({ email });

      if (!candidate) {
        return res
          .status(404)
          .json({ message: `Пользователь с таким ${email} не найден!` });
      }

      const validPassword = bcrypt.compareSync(password, candidate.password);

      if (!validPassword) {
        return res.status(401).json({ message: 'Введен неправильный пароль!' });
      }

      const token = jwt.sign(
        { email: candidate.email, userId: candidate._id },
        process.env.JWT,
        { expiresIn: '24h' }
      );

      return res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
