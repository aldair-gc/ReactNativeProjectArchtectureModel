import { githubApi } from '../api';
import { GithubUserResponse } from '../types/users';

export const githubUserRequest = async (username: string) => {
    return await githubApi.get<GithubUserResponse>(`users/${username}`).then(resp => resp.data);
};
