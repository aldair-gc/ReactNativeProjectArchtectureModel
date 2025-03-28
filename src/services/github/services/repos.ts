import { githubApi } from '../api';
import { GithubUserReposResponse } from '../types/repos';

export const githubUserReposRequest = async (username: string) => {
    return await githubApi.get<GithubUserReposResponse>(`users/${username}/repos`).then(resp => resp.data);
};
