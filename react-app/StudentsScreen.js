import {View} from "react-native-web"

const StudentsScreen = () =>{
    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})

export default StudentsScreen;