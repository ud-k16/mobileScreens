import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradient: {
    width: 390,
    height: 186,
    borderBottomRightRadius: 50,
  },
  welcomeViewContainer: {
    width: 296,
    height: 180,
    top: 94,
    left: -4,
    position: 'absolute',
    backgroundColor: '#EDFFCE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
  welcomeTextContainer: {
    width: 153,
    height: 78,
  },
  welcomeText: {
    fontFamily: 'SFProDisplay',
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
    lineHeight: 16.71,
  },
  welcomeTextBold: {
    fontFamily: 'SFProDisplay',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.64,
    color: '#000000',
  },
  dotsContainer: {
    width: 102,
    height: 72,
    position: 'absolute',
    left: 193,
  },
  searchBarStyle: {
    width: 248,
    height: 46,

    paddingVertical: 13,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  exploreCategoryContainer: {
    backgroundColor: 'white',
  },
});
