import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/ButtonComponents';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/InputComponents';
import { createProfile } from '../store/actions/profileAction';
import { Icon } from 'react-native-elements';

const RegisterScreen = (props) => {
  const { navigation } = props;
  const globalProfileData = useSelector(store => store.profileReducer)
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const dispatch = useDispatch()
  const onChangeInput = (inputType, value) => {
    setForm({
      //spread operator
      ...form,
      [inputType]: value,
    })
  }
  const sendData = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (form.username === '' || form.email === '' || form.password === '') {
      alert('Mohon isikan semua kolom')
    } else if (!emailRegex.test(form.email)) {
      alert('Mohon isikan email dengan benar')
    }
    else {
      dispatch(createProfile(form))
    }
  }
  useEffect(() => {
    console.log(form)
  },)
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>

        <View style={styles.inputContainer}>
          <Input title="username" isPassword={false} onChangeText={(text) => onChangeInput('username', text)} />
          <Input title="email" isPassword={true} tonChangeText={(text) => onChangeInput('email', text)} />
          <Input title="password" isPassword={true} onChangeText={(text) => onChangeInput('password', text)} />
        </View>
        <Button text="Register" onPress={() => sendData()} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: '#E6E6FA',
    flex: 1,
    alignItems: 'center',
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
  loginText: {
    color: '#1A5B0A',
    fontSize: 16,
  },
});
