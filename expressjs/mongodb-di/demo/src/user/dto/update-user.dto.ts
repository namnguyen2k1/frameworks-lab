import { CreateUserData } from './create-user.dto';

export interface UpdateUserData extends Pick<CreateUserData, 'name'> {}
