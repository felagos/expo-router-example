import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Layout = ({ children }) => {

    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});