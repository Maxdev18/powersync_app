import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edfaff',
    padding: 20,
  },
  darkBackground: {
    backgroundColor: '#2c2c2c',
  },
  profileIconBackground: {
    height: 100,
    backgroundColor: '#58b4ff',
    justifyContent: 'center',
    alignItems: 'center',
   margin: 0,
  },
  
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
  },
  inputBox: {
    backgroundColor: 'white',
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '46%',
  },
  fullWidth: {
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5,
  },
  para: {
    textAlign: 'right',
    color: '#0086f3',
    marginVertical: 10,
  },
  darkModeToggle: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  darkModeTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  darkModeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#12B8FF',
    padding: 10,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
