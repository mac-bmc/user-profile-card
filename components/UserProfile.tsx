import { User } from "@/type/UserUtils"
import { ReactNode } from "react";
import { View } from "react-native";

interface UserProfileProps
{
    user:User;
    render:(user:User)=>ReactNode

}

export const UserProfile:React.FC<UserProfileProps>=({user,render})=>
    {
        return(
            <View>
            {render(user)}
            </View>
        )
    }