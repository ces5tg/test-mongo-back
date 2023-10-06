const { Router } = require('express');
const faker = require('Faker');
const User = require('../models/Users');


const router = Router();

router.get('/api/users',async function (req, res) {
    const users = await User.find();
    res.json(users)
})
router.get('/api/users/create',async function (req, res) {
    for (let i = 0; i < 5; i++) {
             const usuarios = await User.create({ 
                firstName:faker.Name.firstName(),
                lastName: faker.Name.lastName() , 
                avatar:faker.Image.avatar()
            
            });
    }
    res.json({ users : res.json(usuarios)})
})

module.exports = router



