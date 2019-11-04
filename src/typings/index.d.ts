import {UserDocument} from '../../resources/user/user.model'
import {ChannelDocument} from '../resources/channel/channel.model'
import {CategoryDocument} from '../resources/category/category.model'

declare global {
	namespace jest {
		interface Matchers<R> {
			toEqualUser(user: UserDocument): R
		}
	}
}

declare global {
	namespace Express {
		interface Request {
			channel?: ChannelDocument
			category?: CategoryDocument
		}
	}
}
