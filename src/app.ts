import mongoose from 'mongoose'
import passport from 'passport'
import express from 'express'
const app: express.Application = express();
import configKeys from './config/keys'
const db = configKeys.mongoURI
import users from './routes/api/users'
import tweets from './routes/api/tweets'


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
