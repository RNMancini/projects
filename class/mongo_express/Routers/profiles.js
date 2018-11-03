const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Profile from '../models/Profile';

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.get('/models/profiles', (req, res) => res.send('Welcome to Your Profile'))

profileRouter.route('/:profile')
   
    router.get(( req, res) => {
      Profile.find(req, res) => {
       Profile.findByEmail(req.params.email, (err, profile) => {
           res.json(profile)
       })
  
    router.post((req, res) => {
    let profile = new Profile({name: String, email: String});
    profile.save();
    res.status(201).send(profile)
})

   router.put((req, res) => {
       const { name } = req.params.profile, (err, profile) => {
           profile.name =
           profile.email =
           profile.save()
           res.json(profile)
   })
   
      router.delete((req, res) => 
      { Profile.findByID(req.params.profile, (err, profile) => {
           profile.remove(err=> {
               if(err){
                   res.statues(500).send(err)
               } else {
                   res.status(204).send('removed')
               }
           })
       })
   })

const port = process.env.PORT || 8080
app.listen(port, () => console.log('Application listening on port', port))







   