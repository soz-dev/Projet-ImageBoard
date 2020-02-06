const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// send mail
const nodeMailer = require('nodemailer');
// const bodyParser = require('body-parser');
// test format date
const dateFormat = require('dateformat');

//
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./passport/passport')(passport);
const cors = require('cors');

const app = express();
// send mail
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// -----
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const validateRegisterInput = require('./validation/register');
const validateLoginInput = require('./validation/login');
const validateUsernameInput = require('./validation/username');
const validateEmailInput = require('./validation/email');
const validatePasswordInput = require('./validation/password');

const Post = require('./Post');
const Discussion = require('./Discussion');
const Comment = require('./Comment');
const User = require('./User');
const Tag = require('./Tag');
const Category = require('./Category');
// const Image = require('./Image');

mongoose.connect('mongodb+srv://boardTeam:boardTeam@cluster0-gwch2.mongodb.net/board?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected");
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/email', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.send('Welcome');
});

app.get('/api/posts', (req, res) => {
  Post.find().sort({ modificationDate: 'desc', creationDate: 'desc' }).limit(20).then(posts => res.json(posts));
});

app.get('/api/posts/:id', (req, res) => {
  Post.findById(req.params.id).populate('discussions').then(onePost => res.json(onePost));
});

app.get('/api/discussions/:id', (req, res) => {
  Discussion.findById(req.params.id).populate('comments').then(oneDiscussion => res.json(oneDiscussion));
});

const storage = multer.diskStorage({
  destination: './public/',
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// express route where we receive files from the client
// passing multer middleware
// app.post('/api/public', upload.single('file'), (req, res) => {
//   const newImage = new Image({
//     filename: req.file.path,
//   });
//   newImage.save().then(image => res.json(image));
// });

app.post('/api/posts/addPost', upload.single('file'), (req, res) => {
  // console.log(req.body);
  const now = Date.now();
  const newPost = new Post({
    _id: mongoose.Types.ObjectId(),
    // req matches the web brower request, title is the key of the value we are looking for
    // Title is the name of the input.
    author: req.body.author,
    description: req.body.description,
    image: req.file.path,
    creationDate: dateFormat(now, 'd/m/yy HH:MM'),
    modificationDate: Date.now(),
  });
  newPost.save().then(post => res.json(post));
});

app.post('/api/discussions/addDiscussion', upload.single('file'), (req, res) => {
  // console.log(req.body);
  const now = Date.now();
  const newDiscussion = new Discussion({
    _id: mongoose.Types.ObjectId(),
    // req matches the web brower request, title is the key of the value we are looking for
    // Title is the name of the input.
    author: req.body.author,
    description: req.body.description,
    image: req.file.path,
    creationDate: dateFormat(now, 'd/m/yy HH:MM'),
  });
  newDiscussion.save().then(discussion => res.json(discussion));
  Post.findOneAndUpdate({
    _id: req.body.id,
  }, {
    $set: {
      modificationDate: Date.now(),
    },
    $push: {
      discussions: {
        _id: newDiscussion._id,
      },
    },
  }, { new: true }).then(discussion => res.json(discussion));
});

app.post('/api/comments/addComment', upload.single('file'), (req, res) => {
  // console.log(req.body);
  const now = Date.now();
  const newComment = new Comment({
    _id: mongoose.Types.ObjectId(),
    // req matches the web brower request, title is the key of the value we are looking for
    // Title is the name of the input.
    author: req.body.author,
    description: req.body.description,
    image: req.file.path,
    creationDate: dateFormat(now, 'd/m/yy HH:MM'),
  });
  newComment.save().then(comment => res.json(comment));
  Discussion.findOneAndUpdate({
    _id: req.body.id,
  }, {
    $push: {
      $set: {
        modificationDate: Date.now(),
      },
      comments: {
        _id: newComment._id,
      },
    },
  }, { new: true }).then(comment => res.json(comment));
});

// Tests Upload: ------------------------------------

// app.get('/api/image', (req, res) => {
//   res.sendFile(`${__dirname}/image.html`);
// });

// const UPLOAD_PATH = path.resolve(__dirname, 'server/uploads');
// const upload = multer({
//   dest: UPLOAD_PATH,
//   limits: { fileSize: 1000000, files: 5 },
// });

// // get image with id
// app.get('/api/image/:id', (req, res, next) => {
//   Image.findOne({ _id: req.params.id }, (err, image) => {
//     if (err) return res.sendStatus(404);
//     fs.createReadStream(path.resolve(UPLOAD_PATH, image.filename)).pipe(res);
//   });
// });

//-------------------------------------

app.post('/api/posts/deletePost', (req, res) => {
  // console.log(req.body);
  Post.deleteOne({ _id: req.body.id }).then(post => res.json(post));
});

app.post('/api/posts/addLikes', (req, res) => {
  Post.count({ _id: req.body.id, userLikes: req.body.user.id }, (err, count) => {
    if (count > 0) {
      Post.findOneAndUpdate({ _id: req.body.id, userLikes: req.body.user.id }, {
        $pull: { userLikes: req.body.user.id },
        $inc: { likes: -1 },
      }, { new: true }).then(post => res.json(post));
    }
    else {
      Post.findOneAndUpdate({ _id: req.body.id, userLikes: { $ne: req.body.user.id } }, {
        $push: { userLikes: req.body.user.id },
        $inc: { likes: 1 },
      }, { new: true }).then(post => res.json(post));
    }
  });
});

app.get('/api/users', (req, res) => {
  User.find().then(users => res.json(users));
});

app.get('/api/users/:id', (req, res) => {
  User.findById(req.params.id).then(oneUser => res.json(oneUser));
});

// eslint-disable-next-line consistent-return
app.post('/api/users/addUser', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email,
    username: req.body.username,
  // eslint-disable-next-line consistent-return
  }).then((users) => {
    if (users) {
      return res.status(400).json({
        email: 'L\'email existe déjà',
        username: 'Ce nom d\'utilisateur existe déjà',
      });
    }
    const newUser = new User({
      _id: mongoose.Types.ObjectId(),
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      creationDate: Date.now(),
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) console.error('Une erreur s\'est produite', err);
      else {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) console.error('Une erreur s\'est produite', error);
          else {
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                res.json(user);
              });
          }
        });
      }
    });
  });
});

// eslint-disable-next-line consistent-return
app.post('/api/authenticate', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username } = req.body;
  const { password } = req.body;

  User.findOne({ username })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      if (!user) {
        errors.username = 'Nom d\'utilisateur inexistant';
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        // eslint-disable-next-line consistent-return
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email,
              iconImage: user.iconImage,
              description: user.description,
              status: user.status,
            };
            jwt.sign(payload, 'secret', {
              expiresIn: '12h',
            }, (err, token) => {
              if (err) console.error('Erreur dans le token', err);
              else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                });
              }
            });
          }
          else {
            errors.password = 'Mot de passe incorrect';
            return res.status(400).json(errors);
          }
        });
    });
});

app.get('/api/me', passport.authenticate('jwt', { session: false }), (req, res) => res.json({
  id: req.user.id,
  username: req.user.username,
  email: req.user.email,
  iconImage: req.user.iconImage,
  description: req.user.description,
  status: req.user.status,
}));

app.post('/api/users/deleteUser', (req, res) => {
  User.deleteOne({ _id: req.body.id }).then(user => res.json(user));
});

// eslint-disable-next-line consistent-return
app.post('/api/users/updateUserEmail', (req, res) => {
  const { errors, isValid } = validateEmailInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email,
  // eslint-disable-next-line consistent-return
  }).then((users) => {
    if (users) {
      return res.status(400).json({
        email: 'L\'email existe déjà',
      });
    }
    User.findByIdAndUpdate({ _id: req.body.id }, {
      $set:
          {
            email: req.body.email,
            modificationDate: Date.now(),
          },
    }, { new: true }).then(updatedUser => res.json(updatedUser));
  });
});

// eslint-disable-next-line consistent-return
app.post('/api/users/updateUserPassword', (req, res) => {
  const { errors, isValid } = validatePasswordInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
      User.findByIdAndUpdate({ _id: req.body.id }, {
        $set:
          {
            password: req.body.password = hash,
            modificationDate: Date.now(),
          },
      }, { new: true }).then(updatedUser => res.json(updatedUser));
    });
  });
});

// eslint-disable-next-line consistent-return
app.post('/api/users/updateUserUsername', (req, res) => {
  const { errors, isValid } = validateUsernameInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    username: req.body.username,
  // eslint-disable-next-line consistent-return
  }).then((users) => {
    if (users) {
      return res.status(400).json({
        username: 'Ce nom d\'utilisateur existe déjà',
      });
    }
    User.findByIdAndUpdate({ _id: req.body.id }, {
      $set:
          {
            username: req.body.username,
            modificationDate: Date.now(),
          },
    }, { new: true }).then(updatedUser => res.json(updatedUser));
  });
});

app.post('/api/users/updateUserIconImage', upload.single('file'), (req, res) => {
  User.findByIdAndUpdate({ _id: req.body.id }, {
    $set:
        {
          iconImage: req.file.path,
          modificationDate: Date.now(),
        },
  }, { new: true }).then(updatedUser => res.json(updatedUser));
});

app.post('/api/users/updateUserDescription', (req, res) => {
  User.findByIdAndUpdate({ _id: req.body.id }, {
    $set:
        {
          description: req.body.description,
          modificationDate: Date.now(),
        },
  }, { new: true }).then(updatedUser => res.json(updatedUser));
});

app.post('/api/discussions/updateDiscussion', (req, res) => {
  Discussion.findOneAndUpdate({
    _id: req.body.id,
  }, {
    $set: {
      description: req.body.description,
    },
  }, { new: true }).then(comment => res.json(comment));
});

app.post('/api/discussions/deleteDiscussion', (req, res) => {
  Discussion.deleteOne({
    _id: req.body.id,
  }).then(comment => res.json(comment));
});

app.post('/api/comments/updateComment', (req, res) => {
  Comment.findOneAndUpdate({
    _id: req.body.id,
  }, {
    $set: {
      description: req.body.description,
    },
  }, { new: true }).then(comment => res.json(comment));
});

app.post('/api/comments/deleteComment', (req, res) => {
  Comment.deleteOne({
    _id: req.body.id,
  }).then(comment => res.json(comment));
});

app.get('/api/tags', (req, res) => {
  Tag.find().then(tags => res.json(tags));
});

app.get('/api/tags/:id', (req, res) => {
  Tag.findById(req.params.id).then(oneTag => res.json(oneTag));
});

app.get('/api/categories', (req, res) => {
  Category.find().then(categories => res.json(categories));
});

app.get('/api/categories/:id', (req, res) => {
  Category.findById(req.params.id).then(oneCategory => res.json(oneCategory));
});

// send mail
app.post('/send-email', (req, res) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'oboard.contact@gmail.com',
      pass: '7te0910:75Jp',
    },
  });
  const mailOptions = {
    from: req.body.from, // sender address
    to: '"O\'board Team" <oboard.contact@gmail.com>', // list of receivers
    cc: `<${req.body.from}>`,
    subject: req.body.subject, // Subject line
    text: req.body.text, // plain text body
    email: req.body.email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.render('index');
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
