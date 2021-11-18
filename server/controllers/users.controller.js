const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');
const { validationResult } = require('express-validator');

module.exports.usersController = {
  register: async (req, res) => {
    const body = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Ошибка при регистрации', errors: errors.array() });
    }

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

      return res.status(201).json({
        status: 'success',
        message: 'Пользователь успешно зарегистрирован!',
      });
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
          .json({ message: 'Пользователь с таким email не найден!' });
      }

      const validPassword = bcrypt.compareSync(password, candidate.password);

      if (!validPassword) {
        return res.status(401).json({ message: 'Введен неправильный пароль!' });
      }

      const token = jwt.sign(
        {
          userId: candidate._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
      );

      return res.status(200).json({
        status: 'success',
        token: `Bearer ${token}`,
        user: {
          _id: candidate._id,
          email: candidate.email,
          name: candidate.name,
          img: candidate.img,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  me: async (req, res) => {
    const { userId } = req.user;

    try {
      const user = await UserModel.findById(userId);

      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        img: user.img,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
