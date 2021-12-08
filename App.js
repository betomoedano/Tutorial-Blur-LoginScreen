import React from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { BlurView } from 'expo-blur';

const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = 'https://randomuser.me/api/portraits/men/34.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'blue', top: 120, position: 'absolute', transform: [{rotate: '25deg'}] }}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 120 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>
      <ScrollView contentContainerStyle= {{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}> 
        <BlurView intensity={100}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
              <TextInput style={styles.input} placeholder="betomoedano@outlook.com" />
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
              <TextInput style={styles.input} placeholder="password" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#6792F090'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  }

});
