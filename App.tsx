import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./app/presentation/views/auth/login";
import RegistroScreen from "./app/presentation/views/auth/registro";
import {RolesScreen} from "./app/presentation/views/roles/RolesInfo";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigator";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import {ClienteTabNavigator} from "./app/presentation/navigation/ClienteTabNavigator";
import {ProfileUpdateScreen} from "./app/presentation/views/profile/update/ProfileUpdate";

export type RootStackParamList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    ProfileInfoScreen: undefined,
    RolesScreen: undefined,
    AdminTabNavigator: undefined,
    ClienteTabNavigator: undefined,
    ProfileUpdateScreen: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true, title: "Registro"}}></Stack.Screen>
                <Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{headerShown: true, title: "Roles"}}></Stack.Screen>
                <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{title: "Navegacion de admin"}}></Stack.Screen>
                <Stack.Screen name={"ClienteTabNavigator"} component={ClienteTabNavigator} options={{title: "Navegacion de cliente"}}></Stack.Screen>
                <Stack.Screen name={"ProfileUpdateScreen"} component={ProfileUpdateScreen} options={{title: "Actualizar perfil"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}