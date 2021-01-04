import React from 'react';
import { Text,
   View,
   TouchableOpacity,
   TextInput,
   Image,
   StyleSheet,
  KeyboardAvoidingView ,
 Alert} from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            Email_ID:'',
            Password:'',
        }
    }
    login = async(Email,Password)=>{
        if(Email && Password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(Email,Password)
                if(response){
                    this.props.navigation.navigate('WriteStoryScreen')
                }
            }
            catch(error){
                switch (error.code){
                    case 'auth/user-not-found':
                        Alert.alert("User Dosen't Exits")
                        break
                    case 'auth/invalid-email':
                        Alert.alert("Incorrect E-mail or Password")
                        break  
                }
            }
        }
        else{
            Alert.alert('Enter E-mail and Password')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
                <View>
                    <Image source={require('../assets/write.png')} style={{width:200,height:200}}/>
                    <Text style={{textAlign:'center',fontSize:30}}>Story Hub</Text>
                </View>
                <View>
                    <TextInput 
                    style={styles.loginBox} 
                    placeholder={'Enter E-mail Address'} 
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            Email_ID:text
                        })
                    }} />

                    <TextInput 
                    style={styles.loginBox} 
                    placeholder={'Enter Password'} 
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            Password:text
                        })
                    }} />
                </View>
                <View>
                <TouchableOpacity style={{height:30,widht:90,borderWidth:1,marginTop:20}} 
                onPress={()=>{
                    this.login(this.state.Email_ID,this.state.Password)
                }}>
                    <Text style={{textAlign:'center'}}>
                        Login
                    </Text>
                </TouchableOpacity>
                </View>
                
            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        margin:10,
    }
})