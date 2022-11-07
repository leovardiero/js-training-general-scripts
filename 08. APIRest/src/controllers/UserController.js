import User from '../models/User';

class UserController {
  // Create
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      // Verifying ID
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Invalid id'],
        });
      }

      // Verifying User
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      const newUser = await user.update(req.body);

      return res.json(newUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // Verifying ID
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Invalid id'],
        });
      }

      // Verifying User
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy(req.body);
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
