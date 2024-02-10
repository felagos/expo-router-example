import { Link } from "expo-router";
import { View, Text } from "react-native";

const Login = () => {

    return (
        <View>
            <Text>Login Screen</Text>
            <Link href='login-code'>
                <Text>Go to Login code validation</Text>
            </Link>
        </View>
    );
}

export default Login;