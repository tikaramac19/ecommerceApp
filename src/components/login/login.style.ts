import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    loginContainer: {
        height:'100%',
        backgroundColor:'#fff'
    },
    imageContainer:{
            alignItems:'center'
    },
    heading:{
        alignSelf: "center",
        fontSize: 28,
        fontWeight: 'bold',
        color: "#333"
    },
    usernameContainer:{
            borderWidth:1,
            borderStyle: "solid",
            display:"flex",
            justifyContent: 'center',
            marginTop: 18,
            margin: 20,
            borderColor: "#333",
            borderRadius: 6,
            paddingHorizontal: 5
           
    },
    input:{
        color: 'black'
    },
    paswordContainer:{
        borderWidth:1,
            borderStyle: "solid",
            display:"flex",
            justifyContent: 'center',
            marginTop: 1,
            margin: 20,
            borderColor: "#333",
            borderRadius: 6,
            paddingHorizontal: 5
    },
    forgetPassword:{
        fontSize: 14,
        display:"flex",
        alignSelf: "flex-end",
        marginRight: 20,
        fontWeight:"bold",
        color:"black",
        marginTop: -10
    }, 
    loginBtn:{
        fontSize:14,
        backgroundColor: "#333",
        marginHorizontal: 20,
        padding: 7,
        margin: 15,
        textAlign: "center",
        color: "white",
        borderRadius: 6        
    }, 
    socialContainer:{
        display:"flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop:20,
        gap: 20
    },
    facebook:{
        backgroundColor: "#4e71ba",
        paddingHorizontal: 10,
        paddingVertical:5,
        color: "white",
        height: 33,
        flex: 2,
        textAlign: "center",
        borderRadius: 5
    },
    google:{
        backgroundColor: "#DB4437",
        paddingHorizontal: 10,
        paddingVertical:5,
        color: "white",
        height: 33,
        flex: 2,
        textAlign: "center",
        borderRadius: 5
    }

})