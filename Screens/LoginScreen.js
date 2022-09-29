import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/LoginLogo.png')}
      />

      <View style={styles.inputView}>
        <Image
          source={require('../assets/images/Message.png')}
          style={{marginHorizontal: wp(5)}}></Image>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <Image
          source={require('../assets/images/Lock.png')}
          style={{marginHorizontal: wp(5)}}></Image>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={{color: 'red'}}>{error}</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() =>
          email == 'Ali@gmail.com' && password == '123456789'
            ? props.navigation.navigate('Graphs') & setError('')
            : setError('Wrong email or password')
        }>
        <Text style={{color: 'white'}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: wp(10),
    height: wp(30),
    width: wp(30),
  },

  inputView: {
    backgroundColor: 'skyblue',
    borderRadius: wp(10),
    width: wp(80),
    height: wp(15),
    marginBottom: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
  },

  TextInput: {
    height: hp(10),
    flex: 1,
    padding: hp(1),
  },

  forgot_button: {
    height: hp(10),
    marginBottom: wp(10),
  },

  loginBtn: {
    width: wp(80),
    borderRadius: wp(10),
    height: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
    backgroundColor: 'black',
  },
});
