import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import ViewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {styles} from "./StylesProfile";
import {InfoProfileItem} from "../info/ItemInfo";
import {RoundedButton} from "../../../components/RoundedButton";
import {FormInput} from "../../../components/FormInput";


export const ProfileUpdateScreen = ({navigation, route}: PropsStackNavigation) => {

    const {user, deleteSession} = ViewModel.ProfileViewModel();

    return (
        <View style={styles.profileContainer}>
            <Image
                style={styles.imageBackground}
                source={require("../../../../../assets/chef.jpg")}
            ></Image>
            <TouchableOpacity style={styles.logoutContainer}
                              onPress={() => {
                                  deleteSession()
                                  navigation.navigate("LoginScreen")
                              }}>
                <Image style={styles.logout} source={require("../../../../../assets/logout.png")}></Image>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../../../../assets/logo.png")}/>
            </View>

            <View style={styles.formContainer}>
                <FormInput image={require("../../../../../assets/user.png")}
                           placeholder={"Usuario"}
                           keyboardType={"default"}
                           secureTextEntry={false}
                           onPressFormInterface={() => {}}/>
                <FormInput image={require("../../../../../assets/email.png")}
                           placeholder={"Correo electronico"}
                           keyboardType={"default"}
                           secureTextEntry={false}
                           onPressFormInterface={() => {}}/>
                <FormInput image={require("../../../../../assets/phone.png")}
                           placeholder={"Telefono"}
                           keyboardType={"default"}
                           secureTextEntry={false}
                           onPressFormInterface={() => {}}/>

                <RoundedButton text={"Actualizar información"}
                               onPress={() => { navigation.navigate("ClienteTabNavigator") }}>
                </RoundedButton>

            </View>

        </View>
    );

}
