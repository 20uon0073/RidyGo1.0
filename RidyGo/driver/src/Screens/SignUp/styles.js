import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  section: {
    width: '100%',
    maxWidth: 420,
    minHeight: 400,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  form: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  input: {
    fontFamily: 'Nunito',
    fontSize: 22,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
  },
  button: {
    fontFamily: 'Nunito',
    fontSize: 22,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
  },
  instructions: {
    fontSize: 12,
    borderRadius: 10,
    backgroundColor: '#000',
    color: '#fff',
    padding: 5,
    position: 'relative',
    bottom: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offscreen: {
    position: 'absolute',
    left: -9999,
  },
  valid: {
    color: 'limegreen',
    marginLeft: 5,
  },
  invalid: {
    color: 'red',
    marginLeft: 5,
  },
  errmsg: {
    backgroundColor: 'lightpink',
    color: 'firebrick',
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
