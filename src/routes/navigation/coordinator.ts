import { GithubUser, GithubUserRepo } from '@services';

import { navigation } from './navigation';
import { MainStackScreenNames } from '../stack/MainStack.routes';

const mainCoordinator = {
    gotToProfile: (user: GithubUser,
        repos: GithubUserRepo[]) => navigation.push(MainStackScreenNames.Profile, { user, repos }),
};

export const coordinator = {
    ...mainCoordinator,
    goBack: () => navigation.goBack(),
};
