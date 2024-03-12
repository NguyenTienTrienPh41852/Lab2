import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange', 'violet'];
const Main: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const [headerImgUrl, setheaderImgUrl] = useState('');
  const [footerColor, setFooterColor] = useState(colors[0]);
  const [timeLastUpdate, setTimeLastUpdate] = useState('Bạn chưa cập nhật thông tin')


  const handleUpdateHeader = (text: string, imgURl: string) => {
    setHeaderText(text);
    setheaderImgUrl(imgURl);
  };

  const handleButtonRaldomClick = useCallback(() => {
    const numberRan = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRan]);
  }, [])
  useEffect(() => {
    const currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();
    setTimeLastUpdate(datetime);

  }, [handleUpdateHeader])
  return (
    <View style={styles.container}>

      <Header headerText={headerText} Img={headerImgUrl} />
      <Body onUpdateHeader={handleUpdateHeader} onButtonClickRandomColor={handleButtonRaldomClick} />
      <Footer timeLastUpdate={timeLastUpdate} color={footerColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});

export default Main;
