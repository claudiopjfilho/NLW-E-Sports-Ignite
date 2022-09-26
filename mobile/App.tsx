import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello react native</Text>

      <Button title="send 1" />
      <Button title="send 1" />
      <Button title="send 1" />
      <Button title="send 1" />

      <StatusBar style="auto" />
    </View>
  );
}
interface ButtonProps {
  title: string;
}

function button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>Cleitinho</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
});
