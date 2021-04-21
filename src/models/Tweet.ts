import mongoose, {Model, Document} from 'mongoose'
const Schema = mongoose.Schema;
import { IUser } from './User'

export interface ITweet extends Document {
  _id: String,
  user: {
    id: IUser['_id'],
    handle: String
  },
  text: String,
  date: Date,
  likedBy: [
    {
      id: IUser['_id'],
      handle: String
    }
  ]
}

const TweetSchema = new Schema({
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    handle: {
      type: String
    }
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likedBy: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', handle: String
    },
    handle: {
      type: String,
      required: true
    }
  }]
})

export default mongoose.model<ITweet>('Tweet', TweetSchema)