import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/ButtonComponents';
import Input from '../components/InputComponents';
import { useSelector } from 'react-redux';

const LoginScreen = (props) => {
  const { navigation } = props
  const globalProfileData = useSelector(store => store.profileReducer)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('global login')
    console.log(globalProfileData)
  }, [globalProfileData])

  const checkData = () => {
    if (username === '' || password === '') {
      alert('Please input username and password')
    } else if ((username.toLowerCase() === globalProfileData.username.toLowerCase()) && (password.toLowerCase() === globalProfileData.password.toLowerCase())) {
      alert('Success')
    } else {
      alert('credential didnt match')
    }

    setUsername('')
    setPassword('')
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/login.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input title="Username" placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />
        </View>
        <View style={styles.inputContainer}>
          <Input title="Password" placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} />
        </View>
        <Button text="Login" onPress={() => checkData()} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: '#E6E6FA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 32,
    marginBottom: 16,
  },
  image: {
    width: 180,
    height: 180,
  },
  inputContainer: {
    padding: 16,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
  },
  registerText: {
    color: '#1A5B0A',
    fontSize: 16,
  },
});
