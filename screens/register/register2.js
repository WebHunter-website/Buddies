import React, {useState, useEffect, useStateWithCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/globalStyle';
import {Formik} from 'formik';
import RNPickerSelect from 'react-native-picker-select';
// import DatePickerCalendar from '../../components/DatePicker';
import setStatus from '../../components/register/fetchStatus';
// import DatePicker from 'react-native-datepicker';
import DatePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../../src/helpers';

export default function Regster2(props) {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [statusList, setstatusList] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setStatus().then(
      data => {
        setstatusList(
          data.result.map(e => {
            return {label: e.status, value: e.statusid};
          }),
        );
      },
      reject => {
        console.warn(reject);
      },
    );
  }, []);

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleSubmit = values => {
    // const tmpDate = date.split('-');
    values.date = formatDate(date);
    console.log(values);
    if (values.status == null) {
      alert('Wybierz status');
    } else if (values.sex == null) {
      alert(
        'Podaj swoją płeć lub daj nam znać, że nie chcesz dzielić się tą informacją',
      );
    } else if (values.date === 'Invalid Date') {
      alert('Podaj swoją datę urodzenia');
    } else {
      props.navigation.navigate('AddFirstPhoto', {
        values: {...values, ...props.route.params.values},
      });
    }
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => {
        const sexOptions = [
          {label: 'kobieta', value: 0},
          {label: 'mężczyzna', value: 1},
          {label: 'nie chcę podawać', value: ''},
        ];

        return (
          <View style={styles.container}>
            <Text
              style={[styles.thirdText, {marginVertical: 20, fontSize: 20}]}>
              Krok 2/4
            </Text>
            <View style={styles.right}>
              <Text style={[styles.thirdText, {fontSize: 18}]}>
                Wybież status- dzięki temu inni będą mogli łatwiej Cię znaleść!
              </Text>
              <Text style={[styles.thirdText, {fontSize: 18}]}>
                Status będziesz mógł/mogła zmieniać na bieżąco w aplikacji
              </Text>
              <View style={styles.select_input}>
                <RNPickerSelect
                  style={pickerSelectStyles.inputAndroid}
                  onValueChange={value => {
                    values.status = value;
                  }}
                  items={statusList}
                  placeholder={{label: 'Wybież status', value: null}}
                  style={{inputAndroid: {color: 'black'}}}
                />
              </View>
              <View style={styles.select_input}>
                <Text
                  style={
                    ([styles.thirdText, {fontSize: 20}], styles.miniSection)
                  }>
                  {' '}
                  Podaj płeć
                </Text>
                <RNPickerSelect
                  style={pickerSelectStyles.inputAndroid}
                  onValueChange={value => {
                    values.sex = value;
                  }}
                  items={sexOptions}
                  placeholder={{label: 'Wybież płeć', value: null}}
                  style={{inputAndroid: {color: 'black'}}}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShow(prev => !prev);
                }}
                style={styles.secondaryButton}>
                <Text
                  style={
                    ([styles.thirdText, {fontSize: 20}], styles.miniSection)
                  }>
                  Wybież datę urodzenia
                </Text>
                <Text
                  style={
                    ([styles.thirdText, {fontSize: 20}], styles.miniSection)
                  }>
                  Wybrana data {date.toDateString()}
                </Text>
              </TouchableOpacity>
              <View>
                {show && (
                  <DatePicker
                    style={styles.datePickerStyle}
                    value={date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    // getDate={(date) => (values.date = date)}
                    placeholder="Wybież datę"
                    format="DD-MM-YYYY"
                    minDate="01-01-1920"
                    // maximumDate={Date.now()}
                    confirmBtnText="Potwierdź"
                    cancelBtnText="Wyjdź"
                    customStyles={{
                      dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                    }}
                    onChange={_date => {
                      if (_date.type != 'set') {
                        return;
                      }
                      const newDate = new Date(_date.nativeEvent.timestamp)
                      setDate(newDate);
                      setShow(false);
                      console.log(newDate);
                    }}
                  />
                )}
                {/* <View style={styles.row}> */}
                {/* <Pressable
                  style={styles.secondaryButton}
                  onPress={showDatepicker}
                >
                  <Text style={styles.colorText}>Dodaj datę urodzenia</Text>
                </Pressable> */}
                {/* <Text style={{ paddingLeft: 10 }}>{date}</Text>
              </View> */}
              </View>
            </View>
            <Pressable
              onPress={handleSubmit}
              title="presable"
              style={[styles.secondaryButton, {marginBottom: 90}]}>
              <Text>Dodaj zdjecie profiliowe</Text>
            </Pressable>
          </View>
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#bada55',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: 200,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#bada55',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
