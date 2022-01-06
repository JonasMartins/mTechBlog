import { Formik, FormikProps, Form } from "formik";
import { View, TextInput, Button } from "react-native";
import React from "react";
import * as Yup from "yup";

interface LoginFormProps {}

interface inputValues {
    email: string;
    password: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const LoginForm: React.FC<LoginFormProps> = () => {
    const initialValues: inputValues = { email: "", password: "" };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log("Values ", values);
            }}
            validationSchema={LoginSchema}
        >
            {(props: FormikProps<inputValues>) => (
                <View>
                    <TextInput
                        onChangeText={props.handleChange("email")}
                        onBlur={props.handleBlur("email")}
                        value={props.values.email}
                        placeholder="email"
                    />
                    <TextInput
                        onChangeText={props.handleChange("password")}
                        onBlur={props.handleBlur("password")}
                        value={props.values.password}
                        placeholder="password"
                        secureTextEntry={true}
                    />

                    <Button
                        onPress={() => {
                            props.handleSubmit();
                        }}
                        title="Submit"
                    />
                </View>
            )}
        </Formik>
    );
};

export default LoginForm;
