import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Button } from "galio-framework";

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${Colors.grayLight};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.gray
})`
  flex: 1;
  height: 40px;
  background: ${Colors.grayLight};
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid ${Colors.grayLight};
`;

export const SubmitButton = styled(Button).attrs({
  onlyIcon: true,
  icon: "search1",
  iconFamily: "antdesign",
  iconSize: 25,
  iconColor: Colors.white,
  color: Colors.primary
})`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 40px;
  height: 40px;
`;

export const HeroButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const HeroImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const HeroName = styled.Text`
  margin-left: 10px;
`;

export const HeroSeparator = styled.View`
  height: 1px;
  background-color: ${Colors.gray};
`;
