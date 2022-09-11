const router = require('express').Router();
const { Blogpost, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
//post
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
//get route

//delete
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteblogPostRoutes = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteblogPostRoutes) {
      res.status(404).json({ message: 'No project found with this id!' });

      return;
    }

    res.status(200).json(deleteblogPostRoutes);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update
router.put('/:id', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const updatePostroutes = await Blogpost.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id, user_id: req.session.user_id },
      }
    );
    res.status(200).json(updatePostroutes);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//comment
router.post('/:id/comment', withAuth, async (req, res) => {
  console.log(req.body);
  console.log(req.session.user_id)
  try {
    const comment = await Comment.create({
      user_id: req.session.user_id,
      text: req.body.message,
      blogpost_id: +req.params.id,
    });
    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
