import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/ButtonComponents';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/InputComponents';
import { createProfile } from '../store/actions/profileAction';
import { Alert } from 'react-native';
import { Icon } from 'react-native-elements';

const RegisterScreen = props => {
  const [isPassVisible, setIsPassVisible] = useState(false)
  const { navigation } = props;
  const globalProfileData = useSelector(store => store.profileReducer);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch()
  const onChangeInput = (inputType, value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (inputType === 'email') {
      if (!emailRegex.test(value)) {
        setEmailFormat(false);
      } else {
        setEmailFormat(true);
      }
    }
    setForm({
      ...form,
      [inputType]: value,
    });
  };
  const [isEmailFormat, setEmailFormat] = useState(true);
  const sendData = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (form.username === '' || form.email === '' || form.password === '' || !isEmailFormat) {
      alert('Make sure you fill all the field with the right information!');
    }
    else if (!emailRegex.test(form.email)) {
      alert('Isi email!!');
    }
    else {
      console.log("success")
      dispatch(createProfile(form));
      console.log("form")
      console.log(form)
      Alert.alert(
        "Success",
        "Successfully create an account!",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate('Login')
          }
        ]
      );
    }
  };
  useEffect(() => {
    console.log('global register')
    console.log(globalProfileData)
    if (form.email === '') {
      setEmailFormat(true);
    }
  }, [form.email]);
  ;
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        <Icon
          name='heart'
          type='font-awesome'
          color='#f50'
        />
        <View style={styles.inputContainer}>
          <Input
            title="Username"
            onChangeText={text => onChangeInput('username', text)}
          />
          <Input
            title="Email"
            onChangeText={text => onChangeInput('email', text)}
          />
          {isEmailFormat ? null : (
            <View style={styles.warningContainer}>
              <Text style={styles.warning}>
                Please input the right email format!
              </Text>
            </View>
          )}
          <Input
            title="Password"
            onChangeText={text => onChangeInput('password', text)} isPassword={true} iconName={isPassVisible ? 'eye-off' : 'eye'} secureTextEntry={isPassVisible ? false : true} onPress={() => setIsPassVisible(!isPassVisible)}
          />
        </View>
        <Button text="Register" onPress={() => sendData()} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}> Login</Text>
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
  warningContainer: {
    marginBottom: 16,
    marginLeft: 16,
  },
  warning: {
    color: 'red',
  },
});
