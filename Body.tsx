import { text } from 'express';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

interface BodyProps {
  onUpdateHeader: (text: string,imgURl:string) => void;
  onButtonClickRandomColor: () => void; 
}

const Body: React.FC<BodyProps> = ({ onUpdateHeader,onButtonClickRandomColor}) => {
  const [text1, setText1] = useState('');
  const [imageUrl, setimageUrl] = useState('');

  const handleTextChange1 = (text: string) => {
    setText1(text);
   
  };
  const handleTextImageURLChange = (text:string)=>{
    setimageUrl(text);
   
  }

  const handleButtonClick = () => {
    onUpdateHeader(text1,imageUrl)
  };
  const handleButtonClickBottom = ()=>{
    onButtonClickRandomColor();
  }

  return (
    
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên người dùng"
        onChangeText={handleTextChange1}
        value={text1}
      />
        <TextInput
        style={styles.input}
        placeholder="Nhập URL hình ảnh"
        onChangeText={handleTextImageURLChange}
        value={imageUrl}
      />
        {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.image} /> : null}
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Cập nhật thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleButtonClickBottom} style={[styles.button,{marginTop:5}]}>
        <Text style={styles.buttonText}>Đổi màu footer</Text>
      </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});

export default Body;
