const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require("jsonwebtoken");
const config = require('./config')
const bcrypt = require('bcryptjs')
const bodyParser = require("body-parser");
const userModel = require('./models/user');
const { response } = require('express');
const app = express()

mongoose.connect(config.mongoDB, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('DB connecté');
})

app.listen(config.port, () => {
    console.log('Serveur lancé')
})

app.use(cors())
app.use(bodyParser.json());

const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const result = jwt.verify(token.split(" ")[1], config.secret);
      const user = await userModel
        .findOne({
          _id: result.id,
        })
        .exec();
        req.user = user;
      next();
    } catch (err) {
      res.status(401).send("Acces not Allowed");
    }
}

app.post('/signup', async (req, res) => {
    try {
        const user = await userModel.findOne({
            email: req.body.email
        })
        if (user) {
            res.status(400)
            .send(`email ${req.body.email} already exists`)
            return;
        }
        if (req.body.password.length < 8) {
            res.status(400).send("password is too short, it have to be 8 characters")
            return;
        }
        if (req.body.password != req.body.confirmPassword) {
            res.status(400).send("password have to be the same as confirm password")
            return;
        }

        await userModel.create({
            surname: req.body.surname,
            firstName: req.body.firstName,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            password: bcrypt.hashSync(req.body.password)
        })
        res.json({success: true})
    } catch (error) {
        console.log(error)
    }
})

app.post('/login', async (req, res) => {
    try{
        const user = await userModel.findOne({
            email: req.body.email,
        })
        .exec();
        if (bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({
                id: user._id
            }, config.secret,
            {
                expiresIn: 5000
            })
            res.status(200).json({
                success: true,
                token: token,
            })
        }else {
            res.status(401).json({
                success: false,
            })
        }
    } catch(error){
        console.log(error)
    }
    

})

app.get('/admin', verifyToken ,async (req, res) => {
    try{
        const users = await userModel.find({}).exec()
        response.send(`Bienvenue ${req.user.firstName}`).json(users)

    } catch(error){
        console.log(error)
    }

} )