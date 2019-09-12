export const GET_USER_LIST = Symbol();
export const GET_ROLE_LIST = Symbol();

export type GET_ROLE_LIST = typeof GET_ROLE_LIST;
export type GET_USER_LIST = typeof GET_USER_LIST;

export type ActionTypes = GET_ROLE_LIST | GET_USER_LIST;
