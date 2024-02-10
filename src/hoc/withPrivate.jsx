import { router } from "expo-router";
import { useEffect } from "react";

const getIsLogged = async () => true;

export const withPrivate = (Component) => {

    return () => {
        useEffect(() => {
            getIsLogged().then((response) => {
                if (!response) router.replace('/login');
            });
        }, [])

        return <Component />;
    }

};