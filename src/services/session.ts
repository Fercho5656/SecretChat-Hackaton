import { Session } from "@supabase/supabase-js"
import IUser from "../interfaces/IUser"
import supabase from "./supabase"

export const getUser = async (session: Session): Promise<IUser | null> => {
  const { access_token } = session
  const { user: userInfo, error } = await supabase.auth.api.getUser(access_token)
  if (userInfo == null || userInfo.identities == null) return null

  const { avatar_url, email, full_name } = userInfo.user_metadata!
  const user: IUser = {
    avatar: avatar_url,
    email,
    username: full_name,
    name: full_name,
    token: access_token,
  }

  return user
}