import {Dimensions, StyleSheet} from 'react-native';
//Responsive Screen
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const styles = StyleSheet.create({
  followouter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(20),
    paddingHorizontal: wp(3),
    height: hp(4),
    borderRadius: hp(2),
    // backgroundColor: 'dodgerblue',
    borderColor: '#fff',
    // backgroundColor: '#bc0f17',
    backgroundColor: '#fff',
    // marginTop: wp(5),
  },
  unfollowouter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(20),
    paddingHorizontal: wp(3),
    height: hp(4),
    borderRadius: hp(2),
    borderWidth: 1,
    borderColor: '#fff',
    // backgroundColor: '#fff',
  },
  oldPrice: {
    fontSize: wp(3),
    color: '#a04f06',
    textDecorationLine: 'line-through',
    marginHorizontal: wp(1),
  },
  newPrice: {
    fontSize: wp(3),
    color: '#fffcd5',
    fontWeight: '700',
    marginHorizontal: wp(1),
  },
  ChatPrice: {
    fontSize: wp(3),
    color: '#333',
    fontWeight: '700',
    marginHorizontal: wp(1),
  },
  linearGradient: {
    height: hp(25),
    borderBottomRightRadius: wp(10),
    justifyContent: 'center',
  },
  astroInfoContainer: {
    padding: wp(3),
    marginBottom: hp(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  astroPhoto: {
    width: wp(18),
    aspectRatio: 1 / 1,
    borderRadius: wp(9),
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: wp(2),
  },
  astroName: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#fff',
    marginBottom: wp(1),
  },
  followButton: {
    height: hp(4),
    backgroundColor: '#fff',
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(3),
  },
  postButton: {
    height: hp(4),
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(3),
    marginLeft: wp(2),
  },
  infoContainer: {
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    paddingVertical: wp(5),
    marginHorizontal: wp(3),
    marginBottom: wp(3),
    marginTop: hp(-8),
    borderRadius: 5,
  },
  value: {
    fontSize: wp(5.5),
    fontWeight: '700',
    color: '#fd6c33',
    marginBottom: wp(1),
  },

  headings: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#333',
    marginBottom: wp(1),
  },
  VerifiedContainer: {
    // backgroundColor: '#fd6c33',
    // width: wp(5),
    // height: wp(10),
    // aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedIcon: {
    // backgroundColor: '#fd6c33',
    // width: wp(5),
    height: wp(10),
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: wp(2),
  },
  reviewSeparator: {
    height: 1,
    backgroundColor: '#00000020',
    marginVertical: wp(1),
  },
  chatButton: {
    backgroundColor: '#fd6c33',
    height: hp(7),
    alignItems: 'center',
  },
  liveButton: {
    backgroundColor: '#bc0f17',
    height: hp(7),
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#fd8933',
    height: hp(7),
    alignItems: 'center',
  },
  iconRow: {
    marginRight: wp(2),
  },
  iconRow2: {
    width: wp(4),
    marginRight: wp(2),
    aspectRatio: 1 / 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000080',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  screenContainer: {
    backgroundColor: '#fd6c33',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  screenContainer2: {
    flex: 1,
  },
  popupContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: wp(3),
    borderTopRightRadius: wp(3),
    padding: wp(3),
  },

  popupContainer2: {
    backgroundColor: '#00000080',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  mainContent: {
    backgroundColor: '#fff',
    // height: hp(70),
    width: wp(80),
    borderRadius: wp(3),
    padding: wp(3),
  },
  listContainerMain: {
    // borderWidth: 1,
    // borderColor: '#cccccc',
    padding: wp(2),
    // marginTop: wp(3),
    // width: wp(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainerMain2: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: wp(2),
    marginTop: wp(3),
    // marginBottom: 'auto',
    alignItems: 'center',
  },
  listContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(0),
    paddingVertical: wp(1),
  },
  popupButton: {
    height: hp(6),
    // width: hp(80),
    width: '100%',
    backgroundColor: '#4faee4',
    // padding: wp(3),
    // marginTop: hp(10),
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  chatIcon: {
    height: wp(6),
    aspectRatio: 1 / 1,
  },
  popupButton2: {
    backgroundColor: '#c60b0f',
    height: hp(7),
    width: hp(7),
    // backgroundColor: '#ff417b',
    padding: wp(3),
    // marginTop: hp(10),
    marginBottom: hp(5),
    borderRadius: hp(3.5),
    alignSelf: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupButtonText: {
    color: '#fff',
    fontSize: wp(3.5),
    fontWeight: '700',
  },
  allSetIcon: {
    height: wp(10),
    aspectRatio: 1 / 1,
    alignSelf: 'center',
    marginTop: hp(3),
  },
  astroImage: {
    width: wp(12),
    aspectRatio: 1 / 1,
    marginHorizontal: wp(3),
    borderRadius: wp(10),
  },
  line: {
    width: wp(6),
    aspectRatio: 1 / 1,
  },
  close: {
    position: 'absolute',
    right: wp(2),
    top: wp(4),
  },
  // busyBlock: {
  //   height: hp(6),
  //   backgroundColor: '#52361b',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  busyButton: {
    backgroundColor: '#ffbf00',
    alignItems: 'center',
    paddingVertical: wp(2.5),
    marginTop: wp(2),
    flexDirection: 'row',
    justifyContent: 'center',
    // margin: wp(2),
  },
  expertImage: {
    height: hp(10),
    aspectRatio: 1 / 1,
  },
  expertImageContainer: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // alignSelf: 'center',
  },
  dataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  // Extra
  startCallContainer: {
    backgroundColor: '#fff',
    minHeight: hp(30),
    padding: wp(3),
  },
  listContainerMain00: {
    // padding: wp(3),
    flex: 1,
  },
  processingLoader: {
    height: wp(6),
    aspectRatio: 4 / 1,
    alignSelf: 'center',
    marginBottom: hp(3),
  },

  // after call accept code
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
    backgroundColor: '#4cade2',
  },
  border2: {
    height: wp(56),
    width: wp(56),
    borderRadius: wp(28),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: '#4cade2',
  },
  border3: {
    height: wp(53),
    width: wp(53),
    borderRadius: wp(26.5),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: '#4cade2',
  },
  border4: {
    height: wp(50),
    width: wp(50),
    borderRadius: wp(25),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: '#4cade2',
    borderWidth: 5,
    borderColor: '#b1dcf2',
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
export default styles;
