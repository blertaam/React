import React from "react";

const StudentDetails = () =>{
    return(
        <View>
            <Text style={styles.text}>Student Details Component</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign:'center',
        fontSize: 20,
        marginVertical: 20
    }
})

export default StudentDetails;