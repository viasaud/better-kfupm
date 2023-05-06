import supabase from '../supabaseClient.js';

export const signupUser = async (req, res) => {
    const { email, password, first_name, last_name, photo } = req.body;
    if (!(first_name && last_name)) {
        return res.status(400).json("first name and last name must be filled.")
    }
    //create a user in databse
    var { data, error } = await supabase.auth.signUp(
        {
            email,
            password
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
            first_name,
            last_name,
            photo
        })

    //if there is an error return error message
    if (error) {
        return res.status(400).json(error.message);
    }
    res.status(201).json({ userID: data.user.id, role: data.user.role, access_token: data.session.access_token })
}

export const loginUser = async (req, res) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password,
    })
    if (error) {
        return res.status(400).json(error.message)
    }
    res.status(200).json({ userID: data.user.id, role: data.user.role, access_token: data.session.access_token })

}

//********************************TODO*******************************
export const resetPassword = async (req, res) => {
    const email = 'test'
    const gg = await supabase.auth.resetPasswordForEmail(email)
    /*if (error) {
        return res.status(400).json(error.message)
    }*/

    res.status(200).json(gg)

}

export const updatePassword = async (req, res) => {
    const { email, password } = req.body

    const gg = await supabase.auth.updateUser({
        email: "new@email.com",
        password: "new-password",
    })

    res.status(200).json(gg)

}