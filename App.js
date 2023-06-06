import {NavigationContainer} from "@react-navigation/native";
import {BaseSafeAreaView} from "components";
import {Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => (
    <NavigationContainer>
      <BaseSafeAreaView>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{fontFamily: "Arial", fontSize: 15}}>
            Login with Facebook
          </Text>
        </Icon.Button>
      </BaseSafeAreaView>
    </NavigationContainer>
  );

export default App;
