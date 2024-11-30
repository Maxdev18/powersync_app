import { StyleSheet } from 'react-native';

const createStyles = (theme: { theme: any }) =>
  StyleSheet.create({  
    
    container: {
    flex: 1,
    backgroundColor:theme.theme === 'light' ? '#edfaff' : '#333333',
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
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
    padding: 12,  
  },
  inputBox: {
    backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
    padding: 6,
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 5,
    width: '46%',
    borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'
  },

  fullWidth: {
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5,
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
  },
  para: {
    textAlign: 'right',
    color: '#0086f3',
    marginVertical: 10,
    paddingRight: 15,
  },
  darkModeToggle: {
    backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
    marginVertical: 10, 
    marginHorizontal: 12,
    borderWidth: 1,
   borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff',
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
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
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

export default createStyles;