import mongoose, { Model, Document, Schema } from 'mongoose'
import { Request } from 'express'
import { ITweet } from './Tweet'

export interface IGetUserAuthInfoRequest extends Request {
  user: {
    id: string,
    handle: string,
    email: string
  }
}

export interface IUser extends Document {
  handle?: string,
  email?: string,
  password?: string,
  likedTweets?: Array<ITweet['_id']>
}

export interface InputUser {
  email?: IUser['email'],
  password?: IUser['password']
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
  likedTweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }]
}, {
  timestamps: true
})

export default mongoose.model<IUser>('User', UserSchema)
