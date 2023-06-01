import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {BaseSafeAreaView} from "components";

const App = () => (
  <NavigationContainer>
    <BaseSafeAreaView>
      <Text>Hellow World</Text>
    </BaseSafeAreaView>
  </NavigationContainer>
);

export default App;
