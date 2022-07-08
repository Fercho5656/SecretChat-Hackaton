import { ApiError, createClient, Provider, Session } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export const getSession = (): Session | null => supabase.auth.session()

export const getAccessToken = (): string | undefined => supabase.auth.session()?.access_token

export const signIn = async (provider: Provider) => {
  await supabase.auth.signIn({
    provider: provider,
  }, {
    redirectTo: 'http://localhost:3000/chat',
  })
}

export const signOut = async (): Promise<{ error: ApiError | null }> => await supabase.auth.signOut()

export default supabase