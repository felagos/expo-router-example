import { Tabs } from "expo-router";
import { withPrivate } from '../../src/hoc/withPrivate'

const PrivateLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="dashboard" />
            <Tabs.Screen name="payment" />
        </Tabs>
    );
}

export default withPrivate(PrivateLayout);