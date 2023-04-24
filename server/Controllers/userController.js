import supabase from '../supabaseAdmin.js';

export const getProfile = async (req, res) => {
    //take the token from request body
    const { access_token } = req.body

    //get the id of the user from the token
    const { data: { user } } = await supabase.auth.getUser(access_token)

    const { data, error } = await supabase
        .from('profiles')
        .select(`*`)
        .eq('id', user.id)

    if (data) {
        return res.status(200).json(data[0])
    } else {
        res.status(404).json(error)
    }
}

export const updateProfile = async (req, res) => {
    //take the token from request body
    const { access_token, first_name, last_name, photo } = req.body

    //get the id of the user from the token
    const { data: { user } } = await supabase.auth.getUser(access_token)

    //update the profile then return it
    const { data, error } = await supabase
        .from('profiles')
        .update({ first_name, last_name, photo })
        .eq('id', user.id).select()

    if (data) {
        return res.status(200).json(data[0])
    } else {
        res.status(404).json(error)
    }
}

export const getUserEvaluations = async (req, res) => {
    //take the token from request body
    const {access_token} = req.body

    //get the id of the user from the token
    const { data: { user } } = await supabase.auth.getUser(access_token)

    //get the evaluations then return it
    const { data, error } = await supabase
        .from('evaluations')
        .select('*, services(name)')
        .eq('user_id', user.id)


    if (data) {
        return res.status(200).json(data)
    } else {
        res.status(404).json(error)
    }
}