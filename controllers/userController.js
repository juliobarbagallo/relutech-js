const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };