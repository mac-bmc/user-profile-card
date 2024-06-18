import { UserCard } from '@/components/UserCard';
import { UserProfile } from '@/components/UserProfile';
import { User,createUser } from '@/type/UserUtils';
import { StyleSheet, SafeAreaView} from 'react-native';


export default function App() {

  const user = createUser('Morgan Sweeney',
    'https://fastly.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )

  const style=StyleSheet.create({
    MainAppContainer:{
      flex:1,
      justifyContent:'center',
    }
  })
  return (
    <SafeAreaView style={style.MainAppContainer}>
       <UserProfile user={user} render={(user:User)=><UserCard user={user} />}/>
    </SafeAreaView>
)
}
