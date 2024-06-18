import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { User, createUser } from '@/type/UserUtils'

interface UserCardInputProps {
  user:User
}


export const UserCard: React.FC<UserCardInputProps> = ({user}) => {

    const styles = StyleSheet.create({
        MainLayoutContainer:
        {
            borderRadius: 20,
            margin: 10,
            borderWidth: 1,
            height: 500
        },
        TopLayoutContainer:
        {
            flex: 1,
            backgroundColor: 'yellow',
            borderRadius: 20
        },
        BottomLayoutContainer:
        {
            alignItems: 'center',
            flex: 1,
            padding: 20,
            paddingTop:50
        },
        UserImageContainer:
        {
            height: 100,
            top: -50,
            width: 100,
            position:'absolute',
            borderRadius: 50,
            elevation: 20,
            overflow:'hidden',
        },
        UserNameTextLayout: {
            margin: 5,
            fontSize: 22,
            fontWeight: 'bold'
        },
        DesgTextLayout: {
            color: 'grey'
        },
        BioTextLayout: {
            fontSize:16,
            marginBottom:10
        },

        FollowBtnLayout: {
            borderRadius: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            margin: 10,
            alignSelf: 'stretch'
        }
    })
    return (
        <View style={styles.MainLayoutContainer}>
            <LinearGradient colors={['rgba(255, 0, 255, 1.0)', 'transparent']} style={styles.TopLayoutContainer} />
            <View style={styles.BottomLayoutContainer}>
                <View style={styles.UserImageContainer}>
                    <Image 
                    resizeMode='cover'
                    style={{height:"100%", width:"100%"}}
                    source={{
                        uri:'https://fastly.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY'
                    }}
                     
                    />
                </View>
                <Text style={styles.UserNameTextLayout}>{user.name}</Text>
                <Text style={styles.DesgTextLayout}>Status</Text>
                <Pressable style={styles.FollowBtnLayout}>
                    <Text>Follow</Text>
                </Pressable>
                <Text style={styles.BioTextLayout}>{user.biography}</Text>
            </View>
        </View>
    )


}