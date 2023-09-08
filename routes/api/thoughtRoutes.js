const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
 //   deleteThought,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtID
router
    .route('/:thoughtID')
    .get(getSingleThought)
    .put(updateThought)
   // .delete(deleteUser);






module.exports = router;