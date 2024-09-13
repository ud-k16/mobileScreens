import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB5B1',
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    flexDirection: 'row',
    height: 70,
  },
  contentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: 110,
    flex: 1,
  },
  dog1: {
    zIndex: 100,
    width: 63.45,
    height: 83.06,
    top: 147.56,
    left: 179,
    position: 'absolute',
  },
  dog2: {
    zIndex: 100,
    width: 75.73,
    height: 90.41,
    top: 142,
    left: 237.45,
    position: 'absolute',
  },
  dog3: {
    zIndex: 100,
    width: 64.4,
    height: 75.55,
    top: 153.39,
    left: 308.18,

    position: 'absolute',
  },
  paw1: {width: 28.94, height: 29.5, top: 101, left: 350, position: 'absolute'},
  paw2: {width: 29.99, height: 40.5, top: 164, left: 38, position: 'absolute'},
  helloText: {
    paddingLeft: 25,
    fontFamily: 'SFProDisplay',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    lineHeight: 23.87,
  },
  descriptionText: {
    paddingLeft: 25,
    fontFamily: 'SFProDisplay',
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    lineHeight: 19.09,
  },
});
