import { IMessage } from '../interfaces/message';

export const create_message = (author: String, message: String): IMessage => {
    return {
        author,
        message,
        time: Date.now()
    }
}