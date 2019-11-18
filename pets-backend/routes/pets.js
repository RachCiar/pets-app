var express = require('express');
var router = express.Router();
const Pet = require('../models').Pet


// const pets = ['Diesel', 'Creamy', 'Ravioli', 'Pepper', 'Boots'];

/* GET All pets */
router.get('/', (req, res) => {
  Pet.findAll()
    .then(pets => {
      res.json({ pets });
    })
});

/* GET one pet */
router.get('/:id', (req, res) => {
  Pet.findByPk(req.params.id)
    .then(pet => {
      res.json({ pet })
    })
})

// CREATE A PET
router.post('/', (req, res) => {

  Pet.create({name: req.body.name, breed: req.body.breed, ownerId: req.body.ownerId})

    .then(() => {
      return Pet.findAll()
    })
    .then(pets => {
      res.json({ pets: pets })
    })
    .catch(error =>
      res.json({message:error}))
})


//UPDATE a pet
router.put('/:id', (req, res) => {
  Pet.update(req.body, {
    where: { id: req.params.id }
  })
  .then(pet => {
    res.json({ pet: pet })
  })
})

// DELETE A PET
router.delete('/:id', (req, res) => {
  Pet.destroy({ where: { id: req.params.id } })
    .then(() => {
      return Pet.findAll()
    })
    .then(pets => {
      res.json({ pets: pets })
    })
})


module.exports = router;