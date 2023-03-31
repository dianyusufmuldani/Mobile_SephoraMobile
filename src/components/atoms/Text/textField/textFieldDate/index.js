//Import Library
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

//Import Assets
import DateIcon from '../../../../../../assets/icon/date.png';

const TextFieldDate = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  keyboardType,
  birthdayValue,
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  birthdayValue = moment(date).format('Do MMMM YYYY');

  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <View style={styles.ContainerDateBirthday}>
        <TextInput
          placeholder={placeholder}
          editable={false}
          keyboardType={keyboardType}
          value={birthdayValue}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.Container}
        />
        <Image source={DateIcon} style={styles.IconDateBirtday} />
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            console.log(birthdayValue);
          }}
          confirmText="Simpan"
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TextFieldDate;
const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#F3F7FD',
    paddingLeft: 10,
    width: 320,
  },
  ContainerDateBirthday: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconDateBirtday: {
    left: -30,
    bottom: -8,
  },
});
