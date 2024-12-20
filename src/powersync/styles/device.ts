import { StyleSheet } from 'react-native';

const createStyles = (theme: { theme: any }) =>
  StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor:theme.theme === 'light' ? '#FFF5E9' : '#151414',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
  },
  addDeviceButton: {
    backgroundColor: '#47FFA3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addDeviceButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  deviceGroup: {
    backgroundColor:theme.theme === 'light' ? '#FFFFFF' : '#434343',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  deviceGroupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  deviceGroupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  deviceName: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batterySymbol: {
    fontSize: 14,
    marginRight: 4,
  },
  deviceBattery: {
    fontSize: 14,
    color: theme.theme === 'light' ? 'black' : '#F3EBEB',
  },
  addGroupButton: {
    backgroundColor: '#A0E7FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  addGroupButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteGroupButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  deleteGroupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  getUserIDButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  getUserIDButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  userIDContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  // Styles for the modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default createStyles;
