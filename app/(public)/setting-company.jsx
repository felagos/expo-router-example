import { Link } from "expo-router";
import { View, Text } from "react-native";

const SettingCompanyScreen = () => {

    return (
        <View>
            <Text>Setting company Screen</Text>
            <Link href='dashboard'>
                <Text>Go to dashboard</Text>
            </Link>
        </View>
    );
}

export default SettingCompanyScreen;