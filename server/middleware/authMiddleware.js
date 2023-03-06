import supabase from '../supabaseClient.js';

export const requireAuth = async (req, res, next) => {
    const access_token = req.body.access_token;
    //check if there is a access_token, if not go to else...
    if (access_token) {
        const { data: { user } } = await supabase.auth.getUser(access_token)
        //now check if the access_token is valid continue, if not go to else...
        if (user) {
            next();
        } else {
            return res.send('error token not valid');
        }
    } else {
        return res.send('you have no token');
    }
}