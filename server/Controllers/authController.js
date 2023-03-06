import supabase from '../supabaseClient.js';

export const signupUser = async (req, res) => {

    //create a user in databse
    var { data, error } = await supabase.auth.signUp(
        {
            email: req.body.email,
            password: req.body.password,
            role: 'evaluator'
        }
    )

    //if there is an error return error message
    if (error) {
        return res.status(400).json(error.message)
    }

    //link the profile with user created to store user information
    var { error } = await supabase
        .from('profiles')
        .insert({
            id: data.user.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            photo: req.body.photo
        })

    //if there is an error return error message
    if (error) {
        return res.status(400).json(error.message);
    }
    res.status(201).json({ userID: data.user.id, access_token: data.session.access_token })
}

export const loginUser = async (req, res) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password,
    })
    if (error) {
        return res.status(400).json(error.message)
    }
    res.status(200).json({ userID: data.user.id, access_token: data.session.access_token })
}

