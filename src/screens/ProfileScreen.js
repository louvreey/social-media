import {View, Text, Image, ScrollView, StyleSheet, Modal} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../components/ButtonComponents';
import {useSelector} from 'react-redux';
import Input from '../components/InputComponents';

const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const globalData = useSelector(store => store.profileReducer);
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
          <Input
            title="Username"
            editable={false}
            value={globalData.username}
          />
          <Input title="Email" editable={false} value={globalData.email} />
          <Input
            title="Password"
            editable={false}
            value={globalData.password}
          />
          <Button text="Logout" onPress={() => setIsModalVisible(true)} />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.backgroundView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure want to logout?</Text>
            <View style={styles.modalButton}>
              <Button text="yes" />
              <Button
                text="no"
                isLogout={true}
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  inputContainer: {
    padding: 16,
    width: '100%',
  },
  backgroundView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  modalView: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  modalText: {
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
  },
  modalButton: {
    flexDirection: 'row',
  },
});

export default ProfileScreen;
