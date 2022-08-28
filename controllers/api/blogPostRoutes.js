const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const blogPostRoutes = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(blogPostRoutes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const delteblogPostRoutes = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostRoutes) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(deleteblogPostRoutes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
