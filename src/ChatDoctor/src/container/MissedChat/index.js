import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  Pressable,
  Alert,
  View,
  Text,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//imagePicker
import ImagePicker from 'react-native-image-picker';

//vector Icons
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import typingdots from 'assets/images/3dot.gif';
import Ionicons from 'react-native-vector-icons/Ionicons';

//styles
import {globalStyle, color} from '../../utility';
import styles from './styles';
import {deviceHeight} from '../../utility/styleHelper/appStyle';
import {smallDeviceHeight} from '../../utility/constants';
import basicStyles from 'styles/BasicStyles';

//components
import {InputField, ChatBox} from '../../component';
import database from '@react-native-firebase/database';
import {senderMsg, recieverMsg} from '../../network';
import {BASE_URL, makeRequest} from 'api/ApiInfo';
import {showToast} from 'components/CustomToast';

import {nsPop} from 'routes/NavigationService';
import {withPreventDoubleClick} from 'ViewUtils/Click';
const Touchable = withPreventDoubleClick(TouchableOpacity);
const MissedChat = ({route, navigation}) => {
  var {params} = route;

  var {
    name,
    img,
    imgText,
    guestUserId,
    currentUserId,
    dob,
    time,
    date,
    userId,
    consultationId,
    now,
    availableMinutes,
    email,
  } = params;

  const [msgValue, setMsgValue] = useState('');
  const [messeges, setMesseges] = useState([]);
  const [moreInfo, setMoreInfo] = useState(false);
  const [templateList, setTemplateList] = useState('');
  const [type, setTyping] = useState(false);
  // const [isEndChat, setEndChat] = useState(0);
  // const [countTimer, setCountTimer] = useState(3);
  const [tempMessage, setTempMessage] = useState('');
  // const [isExtended, setIsExtended] = useState(true);
  // const [extendsChat, setExtendedChat] = useState(0);
  // const [extendTime, setExtendTime] = useState(availableMinutes);
  // const [isSetTime, setIsSetTime] = useState(false);
  // const [valueChange, setValueChange] = useState(0);

  //*USE LAYOUT EFFECT
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: [
        <View>
          <Text style={{color: '#fff', fontSize: wp(3.2), fontWeight: '700'}}>
            {name}
          </Text>
        </View>,
      ],
      headerLeft: () => [
        <Pressable onPress={() => nsPop()} style={{paddingLeft: wp(3)}}>
          <Ionicons name="arrow-back-sharp" color="#fff" size={26} />
        </Pressable>,
      ],
      headerRight: () => [
        <View style={styles.headerButtons}>
          {/* <Pressable onPress={() => nsPop()} style={{paddingRight: wp(5)}}>
              <Text style={{color: 'white'}}>End Chat</Text>
            </Pressable> */}
          <SimpleLineIcons
            name="info"
            size={20}
            color={color.WHITE}
            style={{right: 10}}
            onPress={() =>
              Alert.alert(
                `${name}`,
                `\nDate Of Birth: ${dob}\nBirth Time: ${time}\nBirth Place: ${date}`,
                [
                  {
                    text: 'Ok',
                    // onPress: () => logout(),
                  },
                ],
                {cancelable: true},
              )
            }
          />
        </View>,
      ],
    });
  }, [navigation]);

  //*USE EFFECT
  useEffect(() => {
    try {
      database()
        .ref('messeges')
        .child(`${currentUserId}`)
        .child(`${guestUserId}`)
        .on('value', dataSnapshot => {
          let msgs = [];
          dataSnapshot.forEach(child => {
            msgs.push({
              timer: child.val().messege.time,
              sendBy: child.val().messege.sender,
              recievedBy: child.val().messege.reciever,
              msg: child.val().messege.msg,
              img: child.val().messege.img,
            });
          });
          setMesseges(msgs.reverse());
          console.log('userEffect Calling');
          console.log('chat response are false');
          setTyping(false);
        });
    } catch (error) {
      alert(error);
    }
    tempLets();
    checkConnectivity();
  }, []);

  ///* internet and db connectivity status
  const checkConnectivity = async () => {
    try {
      // since I can connect from multiple devices or browser tabs, we store each connection instance separately
      // any time that connectionsRef's value is null (i.e. has no children) I am offline
      await database().setPersistenceEnabled(true);

      // stores the timestamp of my last disconnect (the last time I was seen online)
      var lastOnlineRef = database().ref('connection/579/636');

      var connectedRef = database().ref('.info/connected');
      connectedRef.on('value', function (snap) {
        if (snap.val() === true) {
          // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
          var con = lastOnlineRef;

          // When I disconnect, remove this device
          con.onDisconnect().cancel();
          // Add this device to my connections list
          // this value could contain info about the device or a timestamp too
          con.set(true);

          // When I disconnect, update the last time I was seen online
          lastOnlineRef.onDisconnect().set(false);
        }
      });
    } catch (error) {
      console.log('error while connectivity ', error);
    }
  };

  //*CHAT SEND with typing
  const handleSend = () => {
    setMsgValue('');
    const eTime = Date();
    // var date = new Date();
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var day = date.getDate();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // var eTime =
    //   year +
    //   '-' +
    //   month +
    //   '-' +
    //   day +
    //   ' ' +
    //   hours +
    //   ':' +
    //   minutes +
    //   ':' +
    //   seconds;
    if (msgValue) {
      senderMsg(msgValue, currentUserId, guestUserId, '', eTime)
        .then(() => {})
        .catch(err => alert(err));

      // * guest user

      recieverMsg(msgValue, currentUserId, guestUserId, '', eTime)
        .then(() => {})
        .catch(err => alert(err));
    }
  };

  //*FOR BLOCK USER
  const BlockUser = async () => {
    const params = {
      userId,
    };
    const response = await makeRequest(
      BASE_URL + 'api/Astrologers/blockUser',
      params,
      true,
      false,
    );
    if (response) {
      const {success, message} = response;
      if (success) {
        showToast(message);
      } else {
        showToast(message);
      }
    }
  };
  //*CAMERA
  const handleCamera = () => {
    setMoreInfo(false);

    const option = {
      skipBackup: true,
      includeBase64: true,
      mediaType: 'photo',
      quality: 0.4,
      maxWidth: 250,
      maxHeight: 250,
    };

    ImagePicker.launchCamera(option, response => {
      if (response.didCancel) {
        console.log('User cancel image picker');
      } else if (response.error) {
        console.log(' image picker error', response.error);
      } else {
        // Base 64
        const eTime = Date();
        // var date = new Date();
        // var year = date.getFullYear();
        // var month = date.getMonth() + 1;
        // var day = date.getDate();
        // var hours = date.getHours();
        // var minutes = date.getMinutes();
        // var seconds = date.getSeconds();
        // var eTime =
        //   year +
        //   '-' +
        //   month +
        //   '-' +
        //   day +
        //   ' ' +
        //   hours +
        //   ':' +
        //   minutes +
        //   ':' +
        //   seconds;
        let source = 'data:image/jpeg;base64,' + response.data;

        senderMsg(msgValue, currentUserId, guestUserId, source, eTime)
          .then(() => {})
          .catch(err => alert(err));

        // * guest user

        recieverMsg(msgValue, currentUserId, guestUserId, source, eTime)
          .then(() => {})
          .catch(err => alert(err));
      }
    });
  };
  //*FOR GALLERY
  const handleDocumentPicker = () => {
    setMoreInfo(false);

    const option = {
      skipBackup: true,
      includeBase64: true,
      mediaType: 'photo',
      quality: 0.4,
      maxWidth: 250,
      maxHeight: 250,
    };

    ImagePicker.launchImageLibrary(option, response => {
      if (response.didCancel) {
        console.log('User cancel image picker');
      } else if (response.error) {
        console.log(' image picker error', response.error);
      } else {
        // Base 64

        let source = 'data:image/jpeg;base64,' + response.data;
        const eTime = Date();
        // var date = new Date();
        // var year = date.getFullYear();
        // var month = date.getMonth() + 1;
        // var day = date.getDate();
        // var hours = date.getHours();
        // var minutes = date.getMinutes();
        // var seconds = date.getSeconds();
        // var eTime =
        //   year +
        //   '-' +
        //   month +
        //   '-' +
        //   day +
        //   ' ' +
        //   hours +
        //   ':' +
        //   minutes +
        //   ':' +
        //   seconds;
        senderMsg(msgValue, currentUserId, guestUserId, source, eTime)
          .then(() => {})
          .catch(err => alert(err));

        // * guest user

        recieverMsg(msgValue, currentUserId, guestUserId, source, eTime)
          .then(() => {})
          .catch(err => alert(err));
      }
    });
  };
  //*CLIENT FINANCIAL INFO
  const handleClientData = async () => {
    const data = {email};
    const response = await makeRequest(
      BASE_URL + 'api/Astrologers/getClientDetails',
      data,
      true,
      false,
    );

    const {currentBalance, maxDuration, youRating, allRating} = response;
    setMoreInfo(false);
    Alert.alert(
      `${name}`,
      `Current Balance: ${currentBalance}\nMax Duration: ${maxDuration}\nAvg. Rating(You): ${youRating}\nAvg. Rating(All): ${allRating}`,
      [
        {
          text: 'Ok',
          // onPress: () => logout(),
        },
      ],
      {cancelable: true},
    );
  };
  //*MESSAGE FOR WAITING Templates with typing
  const handleWaitMessage = async () => {
    let msgValue = 'Please Wait Doctor Will check your Report';
    const eTime = Date();
    // var date = new Date();
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var day = date.getDate();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // var eTime =
    //   year +
    //   '-' +
    //   month +
    //   '-' +
    //   day +
    //   ' ' +
    //   hours +
    //   ':' +
    //   minutes +
    //   ':' +
    //   seconds;
    await senderMsg(msgValue, currentUserId, guestUserId, '', eTime)
      .then(() => {})
      .catch(err => alert(err));
    await recieverMsg(msgValue, currentUserId, guestUserId, '', eTime)
      .then(() => {})
      .catch(err => alert(err));
  };
  //*HANDLE CHANGE ALL VALUES
  const handleOnChange = text => {
    setMsgValue(text);
  };

  //   * On image tap
  const imgTap = chatImg => {
    navigation.navigate('ShowFullImg', {name, img: chatImg});
  };
  //*FOR PRE-TYPED MESSAGES
  const tempLets = async () => {
    const response = await makeRequest(
      BASE_URL + 'api/Astrologers/userTemplateList',
      null,
      true,
      false,
    );
    if (response) {
      const {success, message} = response;
      if (success) {
        const {templateList} = response;
        setTemplateList(templateList);
      } else {
        setTempMessage(message);
      }
    }
  };

  const handleInfo = () => {
    if (moreInfo === true) {
      setMoreInfo(false);
    } else {
      setMoreInfo(true);
    }
  };

  const chatItem = ({item}) => (
    <ScrollView style={styles.moreData}>
      <Text
        style={styles.preDefineText}
        onPress={() => handleOnChange(item.userName)}>
        {item.userName}
      </Text>
    </ScrollView>
  );

  const keyExtractor = (item, index) => index.toString();

  const itemSeparator = () => (
    <View style={{height: 1, backgroundColor: '#ffffff80'}} />
  );

  return (
    <SafeAreaView
      style={[basicStyles.flexOne, basicStyles.whiteBackgroundColor]}>
      <View style={basicStyles.flexOne}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={deviceHeight > smallDeviceHeight ? 90 : 90}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[globalStyle.flex1]}>
          <TouchableWithoutFeedback
            style={[globalStyle.flex1]}
            onPress={Keyboard.dismiss}>
            <View style={[globalStyle.flex1]}>
              <FlatList
                inverted
                data={messeges}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                  <ChatBox
                    msg={item.msg}
                    userId={item.sendBy}
                    img={item.img}
                    onImgTap={() => imgTap(item.img)}
                    uuid={currentUserId}
                    block={BlockUser}
                    typing={type}
                    timer={item.timer}
                  />
                )}
              />
              {type === true || type ? (
                <Image source={typingdots} style={styles.typingIcon} />
              ) : null}
              {/* Send Message */}
              <View style={styles.sendMessageContainer}>
                <InputField
                  placeholder="Type Here"
                  placeholderTextColor="#333"
                  numberOfLines={10}
                  inputStyle={styles.input}
                  value={msgValue}
                  onChangeText={text => handleOnChange(text)}
                />
                <View style={styles.sendBtnContainer}>
                  <MaterialCommunityIcons
                    name="send-circle"
                    color={'#333'}
                    size={30}
                    onPress={() => handleSend()}
                  />
                </View>
              </View>
              <View style={styles.chatBottomOption}>
                <Touchable onPress={() => handleInfo('moreInfo')}>
                  <FontAwesome5 name="list-alt" color={'#333'} size={22} />
                </Touchable>
                <Touchable onPress={handleDocumentPicker}>
                  <FontAwesome name="photo" color={'#333'} size={22} />
                </Touchable>
                <Touchable onPress={handleCamera}>
                  <Entypo name="camera" color={'#333'} size={22} />
                </Touchable>
                <Touchable onPress={handleWaitMessage}>
                  <FontAwesome5 name="star-of-david" color={'#333'} size={22} />
                </Touchable>
                <Touchable onPress={handleClientData}>
                  <FontAwesome5 name="user-circle" color={'#333'} size={22} />
                </Touchable>
              </View>
              {moreInfo ? (
                <View style={{minHeight: hp(10)}}>
                  {templateList ? (
                    <View style={{height: hp(30)}}>
                      <FlatList
                        data={templateList}
                        renderItem={chatItem}
                        keyExtractor={keyExtractor}
                        ItemSeparatorComponent={itemSeparator}
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: '#bc0f1780',
                        height: hp(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>{tempMessage}</Text>
                    </View>
                  )}
                </View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default MissedChat;
