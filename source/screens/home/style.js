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
    marginBottom: 80,
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
  searchBarStyle: {
    alignItems: 'center',
    width: 342,
    height: 46,
    backgroundColor: '#FFEDF2',
    left: 24,
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 50,
  },
  inputStyle: {
    width: 272,
  },
  bannerStyle: {
    width: 342,
    height: 127,
    left: 24,
    borderRadius: 20,
  },
  headingTextcontainer: {
    flexDirection: 'row',
    left: 24,
    marginVertical: 25,
    columnGap: 180,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16.94,
    color: 'black',
  },
  servicesView: {
    paddingLeft: 24,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  serviceContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
    rowGap: 12,
    marginBottom: 25,
  },
  serviceCardContainer: {
    backgroundColor: '#FFE7EA',
    width: 342,
    height: 99,
    left: 24,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 14,
  },
  serviceImageView: {
    width: 84,
    height: 81,

    borderRadius: 10,
  },
  serviceText: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    color: '#000000',
    width: 230,
    height: 33,
    paddingLeft: 15,
  },
  decorationImageStyle: {
    width: 59,
    height: 58,
    left: 284,

    opacity: 0.6,

    borderTopRightRadius: 20,

    position: 'absolute',
  },
  deocorationLeftSide: {
    width: 41,
    height: 58,
    top: 42,

    zIndex: 100,
    opacity: 0.58,

    borderTopRightRadius: 20,
    transform: [{rotate: '180deg'}],
    position: 'absolute',
  },
  exploreButton: {
    backgroundColor: '#995BFF',
    borderRadius: 5,
    height: 24,
    width: 76,
    padding: 5,
    left: 15,
  },
  serviceProviderName: {
    fontFamily: 'SFProDisplay',
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    lineHeight: 16,
    left: 15,
  },
  RatingsCardContainer: {
    backgroundColor: '#FFFFFF',
    width: 342,
    height: 99,
    left: 24,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFCCD2',
    flexDirection: 'row',
    marginBottom: 14,
  },
  ratedUserImage: {
    width: 100,
    height: 98,
    right: -10,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  boneImage: {width: 108, height: 20, left: 15},
});
