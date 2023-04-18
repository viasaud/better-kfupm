import supabase from '../supabaseClient.js';

export const getServices = async (req, res) => {
    const type = req.params.type
    let { data } = await supabase
        .from('services')
        .select("*")
        .eq('type', type)
    if (data.length != 0) {
        return res.status(200).json(data)
    } else {
        res.status(404).json('entity not found')
    }
}

export const getEvaluations = async (req, res) => {
    const service_id = req.params.service_id

    const { data, error } = await supabase
        .from('evaluations')
        .select(`* , profiles (first_name, last_name, photo)`)
        .eq('service_id', service_id)
    if(data){
    if (data.length != 0) {
        return res.status(200).json(data)
    } else {
        res.status(404).json('no evaluations in this entity')
    }
}else{
    res.status(404).json('entity doees not exist.')
}

}

export const addEvaluation = async (req, res) => {
    const { service_id, review, rating, access_token } = req.body;
    const { data: { user } } = await supabase.auth.getUser(access_token);
    const { error } = await supabase
        .from('evaluations')
        .insert({ user_id: user.id, service_id, review, rating})
    if (error) return res.json(error.message);

    res.send('evaluation created succesfully')

}

export const upvoteEvaluation = async (req, res) => {
    const { evaluation_id ,access_token } = req.body;
    const { data: { user } } = await supabase.auth.getUser(access_token);
    const { error } = await supabase
        .from('evaluations')
        .insert({ user_id: user.id, service_id, review, rating, upvotes: 0 })
    if (error) return res.json(error.message);

    res.send('evaluation created succesfully')

}