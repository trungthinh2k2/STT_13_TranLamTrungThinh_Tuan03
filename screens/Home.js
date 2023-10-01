import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

function index({ navigation }) {
    return (
        <View style={styles.btn}>
            <Button
                title="FirstScreen"
                onPress={() => navigation.navigate("FirstScreen")} />
            <Button
                title="One_a"
                onPress={() => navigation.navigate("One_a")}
            />
            <Button
                title="One_b"
                onPress={() => navigation.navigate("One_b")} />
            <Button
                title="One_c"
                onPress={() => navigation.navigate("One_c")} />
            <Button
                title="One_d"
                onPress={() => navigation.navigate("One_d")} />
            <Button
                title="One_e"
                onPress={() => navigation.navigate("One_e")} />
            <Button
                title="Two_a"
                onPress={() => navigation.navigate("Two_a")} />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: '25%',
        textAlign: "center",
        width: "50%",
        height: 100
    },
});

export default index;