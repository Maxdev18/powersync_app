import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    backgroundColor: '#FFF5E9',
    padding: 16,
    justifyContent: 'space-between', // Spaces elements from top to bottom
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Aligns "Login" to the left
    marginBottom: 32,
  },
  centeredContent: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  forgotText: {
    color: '#0077FF',
    textAlign: 'right',
    width: '100%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#0077FF',
    alignSelf: 'flex-start', // Aligns "Don't have an account?" to the left
    marginTop: 16,
  },
  errorMessage: {
        color: '#FF6464',
        width: '100%',
        textAlign: 'right',
        marginBottom: 16
      }

      
});

export default styles;