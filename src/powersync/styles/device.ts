import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF',
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
  },
  addDeviceButton: {
    backgroundColor: '#A0E7FF',
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
    backgroundColor: '#fff',
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
    color: '#555',
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
  // Add the deleteGroupButton style here
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
});

export default styles;
