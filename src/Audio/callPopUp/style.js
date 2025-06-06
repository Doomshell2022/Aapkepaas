import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default StyleSheet.create({
  // before
  popUpScreen: {
    backgroundColor: '#0008',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popUpContainer: {
    height: hp(70),
    width: wp(80),
    padding: wp(3),
    borderRadius: 8,
  },
  requestContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(2),
    borderRadius: wp(5),

    shadowColor: '#0006',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    margin: wp(3),
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  userImage2: {
    height: wp(12),
    aspectRatio: 1 / 1,
    borderRadius: wp(6),
    borderWidth: 4,
    borderColor: '#bc0f1780',
    marginRight: hp(2),
    // alignSelf: 'center',
  },
  requestText: {
    flex: 1,
    fontWeight: '700',
  },
  chatIcon: {
    marginVertical: hp(4),
    alignSelf: 'center',
    height: wp(40),
    aspectRatio: 1 / 1,
  },

  buttonIcon2: {
    height: wp(12),
    aspectRatio: 1 / 1,
    borderRadius: wp(6),
  },
  screenLogo: {
    height: wp(16),
    aspectRatio: 1 / 1,
    alignSelf: 'center',
    margin: wp(2),
  },

  // app popup data after accept
  max: {
    flex: 1,
  },
  buttonHolder: {
    width: wp(80),
    bottom: hp(2),
    borderRadius: wp(2),
    // paddingLeft: wp(3),
    alignItems: 'center',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    left: wp(10),
    right: wp(10),
    margin: 'auto',
    alignSelf: 'center',
    zIndex: 9999,
    backgroundColor: '#fff9',
  },
  button: {
    // paddingHorizontal: wp(20),
    paddingVertical: wp(4),
    justifyContent: 'space-between',
    borderRadius: 25,
  },
  Iconbutton: {
    // paddingHorizontal: wp(20),
    paddingVertical: wp(4),
    justifyContent: 'space-between',
    borderRadius: 25,
  },
  buttonText: {
    // color: '#fff',
    width: wp(12),
    height: wp(12),
    // aspectRatio: 1 / 1,
  },
  buttonIcon: {
    // color: '#fff',
    width: wp(6),
    height: wp(6),
    // aspectRatio: 1 / 1,
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height,
  },
  remoteContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 5,
  },
  remote: {
    width: 250,
    height: 250,
    marginHorizontal: 2.5,
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9',
  },
  container: {
    flex: 1,
    backgroundColor: '#fffcd5',
  },
  liveStreamButton: {
    backgroundColor: '#34495e',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 25,
    marginBottom: 15,
  },
  textButton: {
    color: 'white',
    fontSize: 25,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 25,
    fontSize: 23,
    fontWeight: '600',
  },
  flatList: {
    padding: wp(3),
  },
  welcomeText: {
    fontSize: wp(3.5),
    color: '#333',
    fontWeight: 'bold',
  },
  welcomeText2: {
    fontSize: wp(4),
    color: '#333',
    fontWeight: 'bold',
  },
  title: {
    fontSize: wp(4),
    color: 'black',
    fontWeight: '700',
    marginHorizontal: wp(3),
  },
  separator: {
    height: wp(2),
  },
  listContainer: {
    padding: wp(2),
  },
  bcgImg: {
    flex: 1,
    width: wp(100),
  },
  buttonStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: wp(3),
  },
  profileButton: {
    height: wp(59),
    width: wp(59),
    borderRadius: wp(29.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8e9f9',
  },
  border2: {
    height: wp(56),
    width: wp(56),
    borderRadius: wp(28),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: '#f8e2f4',
  },
  border3: {
    height: wp(53),
    width: wp(53),
    borderRadius: wp(26.5),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: '#f8dbef',
  },
  border4: {
    height: wp(50),
    width: wp(50),
    borderRadius: wp(25),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: '#f9c5e010',
    borderWidth: 5,
    borderColor: '#f9c5e0',
  },
  userImage: {
    height: wp(47),
    aspectRatio: 1 / 1,
    borderRadius: wp(23.5),
    // borderWidth: 1,
    // marginTop: 20,
    // borderColor: '#ccc',
  },
  endIcon: {
    height: wp(10),
    aspectRatio: 1 / 1,
    borderRadius: wp(5),
  },
  liveCount: {
    color: '#333',
    fontSize: wp(5),
    fontWeight: '700',
    marginTop: hp(2),
    textAlign: 'center',
  },
  buttonEnd: {
    // position: 'absolute',
    width: wp(5),
    aspectRatio: 1 / 1,
    padding: wp(2),
    borderRadius: wp(4),
    // alignSelf: 'flex-end',
  },
  callDialerContainer: {
    borderWidth: 1,
    backgroundColor: '#00000095',
    borderRadius: 50,
    position: 'absolute',
    top: hp(16),
    left: wp(1),
    zIndex: 99999,
  },
  DialerContainer: {
    flexDirection: 'row',
    padding: wp(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
