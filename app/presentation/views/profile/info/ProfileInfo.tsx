import {Button, Image, Text, View} from "react-native";
import ViewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {styles} from "./StyleProfile";
import {InfoProfileItem} from "./ItemInfo";
import {RoundedButton} from "../../../components/RoundedButton";


export const ProfileInfoScreen = ({navigation, route}: PropsStackNavigation) => {

    const {user, deleteSession} = ViewModel.ProfileViewModel();

    return (
        <View style={styles.profileContainer}>
            <Image
                style={styles.imageBackground}
                source={require("../../../../../assets/chef.jpg")}
                ></Image>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../../../../assets/logo.png")}/>
            </View>

            <View style={styles.formContainer}>
                <InfoProfileItem
                    image={require("../../../../../assets/user.png")}
                    title={user?.firstName + " " + user?.lastName}
                    text={'Usuario'}
                    ></InfoProfileItem>
                <InfoProfileItem
                    image={require("../../../../../assets/email.png")}
                    title={`${user?.email}`}
                    text={'Correo electronico'}
                ></InfoProfileItem>
                <InfoProfileItem
                    image={require("../../../../../assets/phone.png")}
                    title={`${user?.phone}`}
                    text={'Telefono'}
                ></InfoProfileItem>

                <RoundedButton text={"Actualizar información"}
                               onPress={()=>navigation.goBack()}/>
            </View>
        </View>
    );

}
