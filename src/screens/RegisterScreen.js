import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import Button from '../components/ButtonComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useDispatch} from 'react-redux/es/exports';
import { useSelector } from 'react-redux'

const RegisterScreen = (props) => {
    const {navigation} = props;
    const globalProfileData = useSelector(store => store.profileReducer)
    useEffect(() => {
        console.log(globalProfileData)
    }, [globalProfileData])
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput title="Username" placeholder="Username" />
          <TextInput title="Email" placeholder="Email" />
          <TextInput title="Password" placeholder="Password" />
        </View>
        <Button text="Register" />
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
