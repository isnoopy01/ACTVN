import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
import {images} from '../../../../assets/images/image';

const DetailChat = ({navigation}: {navigation: any}) => {
  const [messages, setMessages] = useState([
    {id: 1, text: 'Xin chào', sender: 'user'},
    {id: 2, text: 'Xin chào', sender: 'me'},
    {id: 3, text: 'Tôi có thể giúp gì cho bạn?', sender: 'me'},
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {id: messages.length + 1, text: inputText, sender: 'me'},
      ]);
      setInputText('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerStart}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
          </TouchableOpacity>
          <View style={styles.textHeaders}>
            <Image style={styles.avatarHeader} source={images.Avatar_online} />
            <View style={styles.infoUsers}>
              <Text style={styles.nameUser}>Nguyên Văn An</Text>
              <Text style={styles.status}>Đang hoạt động</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Image style={styles.iconHeader} source={Icon.menuVertical} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.messageContainer}>
        {/* <View style={styles.timeSend}>
          <Text style={styles.textTime}>Hôm nay</Text>
        </View> */}
        {messages.map(message => (
          <View
            key={message.id}
            style={
              message.sender === 'me' ? styles.myMessage : styles.userMessage
            }>
            <Text
              style={
                message.sender === 'me'
                  ? styles.myMessageText
                  : styles.userMessageText
              }>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.frameInputContainer}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.attachmentButton}
            onPress={() => navigation.navigate('DetailChat')}>
            <Image source={Icon.addFile} style={styles.attachmentIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Soạn tin..."
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Image source={Icon.Sent} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailChat;
