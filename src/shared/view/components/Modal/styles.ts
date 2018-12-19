import { StyleSheet } from 'react-native';
import getFont from 'shared/helpers/getFont';

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  title: {
    ...getFont(),
    fontSize: 22,
    marginBottom: 20,
  },

  description: {
    ...getFont(),
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
});
