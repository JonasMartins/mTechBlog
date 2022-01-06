import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParans";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const navigation = useNavigation<homeScreenProp>();

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
};

export default Home;
