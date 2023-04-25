
export const AccessTokenContext = () => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));
    const userID = JSON.parse(localStorage.getItem('userID'));

    if (access_token && userID) {
        return { "access_token": `${access_token}`, "userID": `${userID}` };
    }
    else
        return;
}
