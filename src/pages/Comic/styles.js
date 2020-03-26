import styled from "styled-components/native";
import Colors from "../../constants/Colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
`;
export const ComicImage = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 400px;
  height: 400px;
  border-radius: 4px;
  background: ${Colors.gray};
`;

export const ComicTitle = styled.Text`
  font-size: 20px;
  color: ${Colors.black};
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
export const ComicBio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: ${Colors.black};
  margin-top: 5px;
  text-align: center;
`;
