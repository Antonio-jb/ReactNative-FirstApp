import React from "react";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor:"#000,"
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: .7,
        bottom: "30%",
    },
    logoContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: "18%",
    },
    logo: {
        width: 140,
        height: 140,
    },
    formContainer: {
        width: "100%",
        height: "35%",
        backgroundColor: "#FFF",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding:30,
    },
    logoutContainer: {
        position: "absolute",
        top: "6%",
        right: 25,
        zIndex: 1,
    },
    logout: {
        width: 40,
        height: 40,
    },
})


