export const isUserLoggedGuard = () => {
    return localStorage.getItem('access_token') !== null;
}
export const isUserNotLoggedGuard = () => {
    return !localStorage.getItem('access_token');
}