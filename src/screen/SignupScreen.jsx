import React, {useState, useContext} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';  // Import AuthContext

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {register, isLoading} = useContext(AuthContext);  // Get register from AuthContext

  const handleRegister = () => {
    register(name, email, password);  // Call the register function
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back-outline'} color={'#000'} size={25} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get started</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'mail-outline'} size={30} color={'#aaa'} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor={'#aaa'}
            value={name}
            onChangeText={setName}  // Set name
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={'mail-outline'} size={30} color={'#aaa'} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={'#aaa'}
            value={email}
            onChangeText={setEmail}  // Set email
          />
        </View>

        <View style={styles.inputContainer}>
          <SimpleLineIcons name={'lock'} size={30} color={'#aaa'} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={'#aaa'}
            value={password}
            onChangeText={setPassword}  // Set password
            secureTextEntry={secureEntry}
          />
          <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
            <SimpleLineIcons name={'eye'} size={20} color={'#aaa'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleRegister}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    fontWeight: '600',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: '#000'
  },
  loginButtonWrapper: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
