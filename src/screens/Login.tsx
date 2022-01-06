import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParans";
import LoginForm from "./../components/form/login.form";

interface LoginProps {}

type loginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const Login: React.FC<LoginProps> = () => {
    const navigation = useNavigation<loginScreenProp>();

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Login</Text>
            <LoginForm />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

export default Login;
