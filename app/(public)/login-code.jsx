import { Link } from "expo-router";
import { View, Text } from "react-native";

const LoginCode = () => {

    return (
        <View>
            <Text>Login Code Screen</Text>
            <Link href='setting-company'>
                <Text>Go to Setting company</Text>
            </Link>
        </View>
    );
}

export default LoginCode;