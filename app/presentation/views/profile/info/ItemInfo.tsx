import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../../themes/AppTheme";

interface Props {
    image: any;
    title: string;
    text: string;
}


export const InfoProfileItem = ({image, title, text}: Props) => {
    // uri equivale a una URL.
    return (
        <View style={styles.formInfo}>
            <Image style={styles.formImage} source={image}></Image>
            <View style={styles.formContent}>
                <Text style={styles.formTextTitle}>{title}</Text>
                <Text style={styles.formTextDescription}>{text}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    formInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    formImage: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    formContent: {
        marginLeft: 15,
    },
    formTextTitle: {
        fontSize: 16,
        fontFamily: AppFonts.medium,
    },
    formTextDescription: {
        fontSize: 15,
        color: AppColors.secondary,
        marginTop: 3,
        fontFamily: AppFonts.regular,
    }
})
