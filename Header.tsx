import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  Img?: string,
  headerText: string;
}
const DefaultIMG = 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png';

const Header: React.FC<HeaderProps> = ({ Img = DefaultIMG, headerText }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: Img.trim()=='' ? DefaultIMG : Img }} />
     <View style={styles.rightHeader}>
     <Text style={styles.text}>Chào ngày mới</Text>
      <Text style={styles.text}>{headerText.trim() =='' ? 'Chưa có tên':headerText}</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flexDirection:'row',
    padding:20,
    backgroundColor: 'lightblue',
  },
  img:{
    width:50,
    height:50,
    borderRadius:50
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightHeader:{
    marginLeft:10,
    justifyContent:'center'
  }
});

export default Header;
