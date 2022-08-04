import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

export default function DatePickerCalendar(props) {
  if (!props.show) {
    return null;
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date(Date.now());
    props.getDate(currentDate);
  };

  return (
    <View>
      <DateTimePicker value={props.date} onChange={onChange} />
    </View>
  );
}
