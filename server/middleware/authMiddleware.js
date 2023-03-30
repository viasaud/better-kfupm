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

export const requireAdmin = async (req, res, next) => {
    const access_token = req.body.access_token;
    //check if there is a access_token, if not go to else...
    if (access_token) {
        const { data: { user } } = await supabase.auth.getUser(access_token)
        //now check if the access_token is valid continue, if not go to else...
        if (user) {
            //check if the token belongs to an admin
            if (user.role == 'admin') {
                next();
            } else {
                return res.send('you need to be Admin to continue...');
            }
        } else {
            return res.send('error token not valid');
        }
    } else {
        return res.send('you have no token');
    }
}

export const requireProvider = async (req, res, next) => {
    const access_token = req.body.access_token;
    //check if there is a access_token, if not go to else...
    if (access_token) {
        const { data: { user } } = await supabase.auth.getUser(access_token)
        //now check if the access_token is valid continue, if not go to else...
        if (user) {
            //check if the token belongs to an admin
            if (user.role == 'provider') {
                next();
            } else {
                return res.send('you need to be a provider to continue...');
            }
        } else {
            return res.send('error token not valid');
        }
    } else {
        return res.send('you have no token');
    }
}