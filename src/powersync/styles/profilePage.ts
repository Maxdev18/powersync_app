import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E9',
  },

  profileIconBackground: {
    height: 120,
    backgroundColor: '#58b4ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingLeft: 12,
    paddingTop: 12, 
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
    padding: 12,  
  },
  inputBox: {
    backgroundColor: 'white',
    padding: 6,
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
    paddingRight: 15,
  },
  darkModeToggle: {
    backgroundColor: 'white',
    marginVertical: 10, 
    marginHorizontal: 12,
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
    marginTop: 10,
    width: '30%',
    marginLeft: '67%',

  },
  saveButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
