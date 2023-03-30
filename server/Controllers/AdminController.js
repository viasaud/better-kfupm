import supabase from '../supabaseAdmin.js';

export const updateRole = async (req, res) => {
  const { role, user_id } = req.body

  const { data: user, error } = await supabase.auth.admin.updateUserById(
    user_id,
    {role}
  )
  res.send(user)
}