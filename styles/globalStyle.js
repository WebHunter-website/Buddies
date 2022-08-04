import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  
  // *********** DISPLAY *********** //
  column:{
    display: 'flex',
    flexDirection: 'column'
  },

  row:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },

  miniSection:{
    marginTop: 30,
  },
  right: {    
    display: "flex",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: 'barlow',
    paddingHorizontal: 15,
    lineHeight: 25,
    letterSpacing: .8
  },

  // *********** GENERAL *********** //

  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    marginTop: 40
  },
  secondaryButton:{
    backgroundColor: "white",
    borderColor: "#bada55",
    color: "black",
    borderWidth: 1,
    borderBottomWidth: 1.4,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  colorText: {
    color: '#c5c5c5'
  },
  secondaryText: {
    fontFamily: 'zilla',
    fontSize: 40,
  },
  thirdText: {
    fontFamily: 'barlow',
    fontSize: 30,
    paddingTop: 10,
  },
  // *********** REG & LOG *********** //
  
  register_input:{
      borderColor: "#c5c5c5",
      borderBottomWidth: 1,
      paddingTop: 5,
      paddingLeft: 3,
      marginTop: 10,
      width: 270,
    },
    select_input: {
      width:220,
      borderBottomWidth: 2,
      borderColor: '#c5c5c5',
      marginTop: 15
  },
    datePickerStyle: {
      width: 230,
  },
  
  // *********** NAV *********** //
  
    nav: {
      borderTopWidth: 3,
      borderColor: 'black',
      bottom: 25,
      right: 20,
      left: 20,
      borderRadius: 15,
    },

  // *********** NAV *********** //

    settings: {
      fontFamily: 'roboto',
      fontSize: 16,
      borderBottomWidth: 1,
      borderColor: '#c5c5c5',
      paddingBottom: 5,
      marginVertical: 7,
      color: '#b5b5b5',
      paddingLeft: 15
    }
  });



  export default styles