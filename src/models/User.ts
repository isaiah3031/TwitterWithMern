import mongoose, {Model, Document} from 'mongoose'
const Schema = mongoose.Schema;
import { ITweet } from './Tweet'

export interface IUser extends Document {
  _id: String,
  handle: String,
  email: String,
  password: String,
  likedTweets: Array<ITweet['_id']>
}

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  likedTweets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' }]
}, {
  timestamps: true
})

export default mongoose.model<IUser>('User', UserSchema)