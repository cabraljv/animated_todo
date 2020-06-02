import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

// #0AB5E5
// #005DAA
export const Container = styled(LinearGradient)`
  flex: 1;
  display: flex;
`;
export const Content = styled.View`
  margin: 30px auto;
  width: 350px;
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
`;
export const DayHeader = styled.View`
  background: #7bd8f0;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 80px;
`;
export const Input = styled.TextInput`
  padding: 0 35px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #333;
`;
export const IconContainer = styled.View`
  position: absolute;
  top: 25px;
  left: 20px;
  z-index: 5;
`;
export const DayItems = styled.View`
  position: absolute;
  top: 80px;
`;
export const AddButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 30px;
`;
export const AddButtonText = styled.Text`
  color: #0ab5e5;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.7;
`;
export const AnimatedInput = styled.View`
  border-bottom-color: #eee;
  background: #fff;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  border-bottom-width: 1px;
`;
