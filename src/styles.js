import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

// #0AB5E5
// #005DAA
export const Container = styled(LinearGradient)`
  flex: 1;
  display: flex;
`;
export const Content = styled.View`
  margin: 30px;
  margin-top: 0;
  margin-bottom: 20px;
`;
export const DayContent = styled.View`
  background: #fff;
  width: 100%;
  height: 89%;
  margin-top: auto;
  margin-bottom: 30px;
  border-radius: 8px;
`;
export const DayText = styled.Text`
  color: #fff;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 22px;
  font-family: 'Roboto';
`;
export const Item = styled.View`
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding-left: 20px;
`;
export const ItemDesc = styled.Text`
  font-size: 18px;
  color: #777;
  margin-left: 15px;
`;
