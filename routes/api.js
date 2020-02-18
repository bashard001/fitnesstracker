const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  console.log(body)
  workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
 workout.update(
    { _id: req.params.id },
    { $push: {exercises: req.body}  }
 )
 .then(dbworkout => {
  res.json({success: dbworkout});
})
.catch(err => {
  res.status(400).json(err);
});

});

router.get("/api/workouts/exercise", ({ body }, res) => {

  workout.find()
  .then(dbworkout => {
    console.log(res.json(dbworkout))
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });

  // workout.insertMany(body)
  //   .then(dbworkout => {
  //     res.json(dbworkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get("/api/workouts", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
