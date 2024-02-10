import { Link } from "expo-router";
import { View, Text } from "react-native";

const Onboarding = () => {

    return (
        <View>
            <Text>Onboarding Screen</Text>
            <Link href='login'>
                <Text>Go to Login</Text>
            </Link>
        </View>
    );
}

export default Onboarding;