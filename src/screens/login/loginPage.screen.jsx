import { View } from "react-native"
import { Login } from "../../components"

export const LoginScreen = ({navigation}) =>{
    return(
        <View>
            <Login navigation={navigation} />
        </View>
    )
}