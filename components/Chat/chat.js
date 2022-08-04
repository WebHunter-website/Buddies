import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react';
import {View, Dimensions, Text, Image, TouchableOpacity} from 'react-native';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import Header from './Header';
import styles from '../../styles/globalStyle';
require('dayjs/locale/pl');

function Chat(props) {
  const [socket, _] = useState(props.socket);
  const [selcectMessage, setSelcectMessage] = useState([]);
  const sendImage = require('../../src/img/send.png');

  useEffect(() => {
    socket.on('chat', (sender, message, rawMessage) => {
      if (sender === props.route.params.userWithProps.email) {
        console.log(`You have new message from ${sender}: ${message}`);
        console.log('rawMessage: ');
        setSelcectMessage(prev => GiftedChat.append(prev, [rawMessage]));
      }
    });

    socket.emit(
      'historical chat',
      props.route.params.owner.email,
      props.route.params.userWithProps.email,
      messages => {
        if (messages === null || messages === undefined) {
          messages = [];
        }
        console.log(`Historical chat messages: ${messages}`);
        const formattedMessages = messages.map(mes => {
          return {
            _id: mes.messagesid,
            text: mes.message,
            user: {
              _id: mes.user1id,
              name:
                mes.user1id === props.route.params.owner.email
                  ? props.route.params.owner.name
                  : props.route.params.userWithProps.name,
              avatar:
                mes.user1id === props.route.params.owner.email
                  ? props.route.params.owner.photo
                  : props.route.params.userWithProps.photo,
            },
            createdAt: mes.date,
          };
        });
        console.log('formattedMessages');
        console.log(formattedMessages);
        setSelcectMessage(formattedMessages);
      },
    );
  }, []);

  const onSend = (messages = []) => {
    messages[0].createdAt.setTime(
      messages[0].createdAt.getTime() + 2 * 60 * 60 * 1000,
    );
    messages[0] = {...messages[0], user: {...messages[0].user, avatar: ''}};
    console.log({
      chat: 'chat',
      userid: messages[0].user._id,
      uwpid: props.route.params.userWithProps.email,
      text: messages[0].text,
      created: messages[0].createdAt,
      message: {...messages[0], user: {...messages[0].user, avatar: ''}},
    });
    socket.emit(
      'chat',
      messages[0].user._id,
      props.route.params.userWithProps.email,
      messages[0].text,
      messages[0].createdAt,
      messages[0],
      isSend => {
        if (isSend) {
          setSelcectMessage(previousMessages =>
            GiftedChat.append(previousMessages, messages),
          );
        } else {
          alert('użytkownik zablokował wysyłanie wiadomości');
        }
      },
    );
  };

  const renderItemBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#BADA55',
          },
          left: {
            backgroundColor: '#e5e5e5',
          },
        }}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send
        {...props}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginRight: 15,
        }}>
        <Image source={sendImage} style={{width: 20, height: 20}} />
      </Send>
    );
  };

  return (
    <View style={{flex: 1, width: Dimensions.get('window').width}}>
      <Header
        name={props.route.params.userWithProps.name}
        socket={props.socket}
        reporter={props.route.params.owner.email}
        profile={props.route.params.userWithProps.email}
        owner={props.owner}
        user={props.route.params.userWithProps}
        navigation={props.navigation}
      />
      <GiftedChat
        placeholder={'napisz wiadomość...'}
        messages={selcectMessage}
        onSend={messages => onSend(messages)}
        isTyping={true}
        renderBubble={renderItemBubble}
        user={{
          _id: props.route.params.owner.email,
          name: props.route.params.owner.name,
          avatar: props.route.params.owner.photo,
        }}
        alwaysShowSend={true}
        renderSend={renderSend}
        locale={'pl'}
      />
    </View>
  );
}
export default Chat;
