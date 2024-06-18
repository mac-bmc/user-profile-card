export interface User 
{
   name : String;
   avatar :String;
   biography:String
}

export function createUser(
   name : String,
   avatar :String,
   biography:String
): User {
    return {
      name,
      avatar,
      biography
      
    };
}