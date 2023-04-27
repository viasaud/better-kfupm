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
    const check_service = await supabase
        .from('services')
        .select(`*`)
        .eq('id', service_id)

    //check if the service exists, if yes then fetch the evaluations in the entity.
    //if not return an error message.
    if (check_service.data.length == 0) {
        res.status(404).json('entity doees not exist.')
    } else {
        //returnes the evaluations along ith the evaluator information and the upvotes
        const { data } = await supabase
            .from('evaluations')
            .select(`* , profiles (first_name, last_name), upvotes(count))`)
            .eq('service_id', service_id)

        if (data) {
            if (data.length != 0) {
                return res.status(200).json(data)
            } else {
                res.status(404).json('no evaluations in this entity')
            }
        } else {
            res.status(404).json('somthing went wrong, retry.')
        }
    }


}

export const addEvaluation = async (req, res) => {
    const { service_id, review, rating, access_token } = req.body;
    const { data: { user } } = await supabase.auth.getUser(access_token);
    const { error } = await supabase
        .from('evaluations')
        .insert({ user_id: user.id, service_id, review, rating })
    if (error) return res.json(error.message);

    res.send('evaluation created succesfully')

}

export const upvoteEvaluation = async (req, res) => {
    const { evaluation_id, access_token } = req.body;
    const { data: { user } } = await supabase.auth.getUser(access_token);
    const { error } = await supabase
        .from('upvotes')
        .insert({ upvoter_id: user.id, evlauation_id: evaluation_id })
    if (error) return res.json(error.message);

    res.send('evaluation upvoted')

}

export const unvoteEvaluation = async (req, res) => {
    const { evaluation_id, access_token } = req.body;
    const { data: { user } } = await supabase.auth.getUser(access_token);
    const {data} = await supabase
        .from('upvotes')
        .delete()
        .match({ evlauation_id: evaluation_id, upvoter_id: user.id }).select()

        //check if there is un evaluation unvoted then return success, else return error.
    if (data.length === 1) return res.json('evaluation unvoted.');
    else return res.json('somthing went wrong, retry.')


}