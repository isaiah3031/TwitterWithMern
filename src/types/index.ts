import { IUser } from "../../src/models/User";
import { ITweet } from "../../src/models/Tweet";

declare global {
  namespace Express {
    interface Request {
      _doc: IUser
    }
  }
}
