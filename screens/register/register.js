import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import styles from '../../styles/globalStyle';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterTextInput from '../../components/register/registerTextInput';

export default function Register({navigation, route}) {
  const {
    params: {email = '', given_name = ''},
  } = route;

  const [requirePassword, _] = useState(email === '');

  useEffect(() => {
    email != '' &&
      alert(
        `Witaj ${given_name}! Logujesz się po raz pierwszy, podaj proszę dodatkowe dane.`,
      );
  }, []);

  const prevSubmit = values => {
    // return true;
    return values.password === values.password2;
  };

  const handleSubmit = values => {
    console.log(values);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
      alert('Podany email jest nieprawidłowy');
    } else if (values.name === '') {
      alert('Imię jest wymagane');
    } else if (requirePassword && values.password.length < 5) {
      alert('Hasło powinno zawierać przynajmniej 5 znaków');
    } else {
      if (prevSubmit(values)) {
        navigation.navigate('Register2', {values: values});
      } else {
        alert('hasła są różne');
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: email,
        name: given_name,
        password: '',
        password2: '',
        description: "",
        // city: "chrzanów"
      }}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => {
        const registerTextInputs = [
          {
            name: 'email',
            value: values.email,
            placeholder: 'e-mail',
            email: true,
            defaultValue: 'emilia.zemlok@gmail.com',
          },
          {
            name: 'name',
            value: values.name,
            placeholder: 'imię',
            defaultValue: 'Emilia',
          },
          email === '' && {
            name: 'password',
            value: values.password,
            placeholder: 'hasło',
            secureTextEntry: true,
            defaultValue: 'abc123',
          },
          email === '' && {
            name: 'password2',
            value: values.password2,
            placeholder: 'powtórz hasło',
            secureTextEntry: true,
            defaultValue: 'abc123',
          },
          {
            name: 'description',
            value: values.description,
            placeholder:
              'napisz coś o sobie- opis będzie widoczny na Twoim profilu',
            multiline: true,
            numberOfLines: 4,
            defaultValue: 'nic ciekawego',
          },
          {
            name: 'city',
            value: values.city,
            placeholder: 'miasto z krórego pochodzisz',
            defaultValue: 'Chrzanów',
          },
        ];
        return (
          <KeyboardAwareScrollView
            resetScrollToCoords={{x: 0, y: 0}}
            contentContainerStyle={sty.key}>
            <View style={(styles.column, styles.container)}>
              <Text style={styles.secondaryText}>ZAREJESTRUJ SIĘ</Text>
              <Text
                style={[styles.thirdText, {marginVertical: 20, fontSize: 20}]}>
                Uzupełnij dane konta w kilku prostych krokach:{' '}
              </Text>
              <Text
                style={[styles.thirdText, {marginVertical: 20, fontSize: 20}]}>
                Krok 1/4
              </Text>

              {registerTextInputs
                .filter(rti => rti)
                .map((rti, index) => (
                  <RegisterTextInput
                    name={rti.name}
                    value={rti.value}
                    placeholder={rti.placeholder}
                    email={rti.email}
                    secureTextEntry={rti.secureTextEntry}
                    multiline={rti.multiline}
                    numberOfLines={rti.numberOfLines}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    key={`register-text-input-${index}`}
                  />
                ))}

              <Pressable
                onPress={handleSubmit}
                title="presable"
                style={[styles.secondaryButton, {marginTop: 20}]}>
                <Text>Dodaj kolejne informacje</Text>
              </Pressable>
            </View>
          </KeyboardAwareScrollView>
        );
      }}
    </Formik>
  );
}

const sty = StyleSheet.create({
  key: {
    height: Dimensions.get('window').height,
  },
  onPress: {
    borderColor: 'black',
  },
});
