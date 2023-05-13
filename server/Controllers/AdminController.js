import supabase from '../supabaseAdmin.js';

export const updateRole = async (req, res) => {
  const { role, user_id } = req.body

  const { data: user, error } = await supabase.auth.admin.updateUserById(
    user_id,
    {role}
  )
  res.send(user)
}

export const updateEvaluation = async (req, res) => {
  const {evaluation_id, condition} = req.body

  const {error} = await supabase
  .from('evaluations')
  .update({ condition: condition })
  .eq('id',evaluation_id )
    if(error) res.json(error)

  res.json({'evaluation set to': condition})
}