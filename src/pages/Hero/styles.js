import styled from "styled-components/native";
import Colors from "../../constants/Colors";
export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${Colors.gray};
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: ${Colors.gray};
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${Colors.black};
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: ${Colors.black};
  margin-top: 5px;
  text-align: center;
`;

export const Comic = styled.TouchableOpacity`
  background: ${Colors.grayLight};
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ComicInfo = styled.View`
  margin-left: 10px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ComicUrl = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.black};
`;
export const ComicName = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.black};
  margin-top: 4px;
`;

export const ComicImage = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background: ${Colors.gray};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 70,
  color: Colors.primary
})``;
