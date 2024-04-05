import SignIn from "../screen/signIn/signIn";
import SignInAnother from "../screen/signUp/signInAnother";
import ForgotPwd from "../screen/forgotPwd/forgotPwd";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name ="SignIn" component = {SignIn}/>
            <Stack.Screen options={{headerShown: false}} name ="SignInAnother" component = {SignInAnother}/>
            <Stack.Screen options={{headerShown: false}}  name ="ForgotPwd" component = {ForgotPwd}/>
        </Stack.Navigator>
    )
}
export default MyStack;
