import { Navigation } from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/store/auth-store";
import "react-native-gesture-handler";

const App = () => (
  <AuthContextProvider>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </AuthContextProvider>
);

export default App;
