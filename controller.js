const User = require('./model');

function FetchUser(req,res){
  const data = User.find({}, function(err, docs){
    if(err) res.json(err);
    else{
      res.send(docs)
    }
  })
}

function AddUser(req,res){
  const data = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  data.save()
    .then(() => res.json('Users added'))
    .catch(err => res.status(400).json('Error '+err));
}

module.exports = {
  FetchUser,
  AddUser
}