import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { CheckBox } from 'react-native-elements';
import {
  Container,
  Content,
  DayContent,
  DayText,
  Item,
  ItemDesc,
} from './styles';
import api from './service/api.json';

const App = () => {
  const [todo, setTodo] = useState([]);
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
          {todo.map((item, index) => (
            <Item key={item.id}>
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
        </DayContent>
      </Content>
    </Container>
  );
};

export default App;
