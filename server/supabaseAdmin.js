import * as dotenv from 'dotenv'
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SERVICE_ROLE;
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabaseUrl, supabaseSecretKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export default supabase