import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
  const [todo, setTodo] = useState(api);
  function handleChanged(item) {
    const newTodo = todo;
    console.log('clicou');
    newTodo.forEach(element => {
      if (element === item) element.checked = true;
    });
    console.log(newTodo[1]);
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
          {todo.map(item => (
            <Item key={item.id}>
              <CheckBox
                boxType="circle"
                onCheckColor="#0AB5E5"
                value={item.checked}
                onValueChange={() => handleChanged(item)}
                tintColors={{ true: '#0AB5E5', false: '#777' }}
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
