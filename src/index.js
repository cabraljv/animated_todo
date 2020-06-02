import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, Animated, Keyboard } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Content,
  DayContent,
  DayText,
  Item,
  ItemDesc,
  DayHeader,
  Input,
  IconContainer,
  DayItems,
  AddButton,
  AddButtonText,
  AnimatedInput,
} from './styles';
import api from './service/api.json';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [inputInFocus, setInputInFocus] = useState(false);
  const [text, setText] = useState('');
  const topPosition = useRef(new Animated.Value(0)).current;
  const leftPosition = useRef(new Animated.Value(0)).current;
  const heightInput = useRef(new Animated.Value(80)).current;
  const widthInput = useRef(new Animated.Value(350)).current;
  const topListPosition = useRef(new Animated.Value(80)).current;

  useEffect(() => {
    setTodo(api);
  }, []);
  function handleChanged(index) {
    const newTodo = [...todo];
    newTodo[index].checked = true;
    const todown = newTodo[index];
    newTodo.splice(index, 1);
    newTodo.push(todown);
    setTodo(newTodo);
  }
  const animateFocus = () => {
    Animated.parallel([
      Animated.timing(topPosition, {
        toValue: 10,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(leftPosition, {
        toValue: -10,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(widthInput, {
        toValue: 370,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(heightInput, {
        toValue: 60,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const backNormal = () => {
    Animated.parallel([
      Animated.timing(topPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(leftPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(widthInput, {
        toValue: 350,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(heightInput, {
        toValue: 80,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <Container
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#0AB5E5', '#005DAA']}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <DayText>Day 06/01/2020</DayText>
      <Content>
        <DayContent>
          <DayHeader>
            {!inputInFocus && (
              <IconContainer>
                <Icon name="plus" color="#0AB5E5" size={30} />
              </IconContainer>
            )}
            <AnimatedInput
              as={Animated.View}
              style={{
                top: topPosition,
                left: leftPosition,
                width: widthInput,
                height: heightInput,
              }}
            >
              <Input
                selectionColor="rgba(0,0,0,.1)"
                onFocus={() => {
                  setInputInFocus(!inputInFocus);
                  animateFocus();
                }}
                value={text}
                onChangeText={textInp => setText(textInp.trim())}
              />
              {inputInFocus && (
                <AddButton>
                  <AddButtonText
                    onPress={() => {
                      setTodo([{ description: text, checked: false }, ...todo]);
                      setText('');
                      Keyboard.dismiss();
                      setInputInFocus(false);
                      backNormal();
                    }}
                  >
                    Add
                  </AddButtonText>
                </AddButton>
              )}
            </AnimatedInput>
          </DayHeader>
          <DayItems
            as={Animated.View}
            style={{
              top: topListPosition,
            }}
          >
            {todo.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Item key={index}>
                <CheckBox
                  iconType="antdesign"
                  checkedIcon="checkcircle"
                  uncheckedIcon="checkcircleo"
                  checkedColor="#0AB5E5"
                  checked={item.checked}
                  onPress={() => handleChanged(index)}
                />
                <ItemDesc>{item.description}</ItemDesc>
              </Item>
            ))}
          </DayItems>
        </DayContent>
      </Content>
    </Container>
  );
};

export default App;
