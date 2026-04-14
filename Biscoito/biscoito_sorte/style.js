import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 30, 
    fontWeight: "bold",
    color: "#aa0000",
    textAlign: "center",
    marginBottom: 10
  },
  bt: {
    fontSize: 20,
    fontWeight: "bold", 
    textAlign: "center",
    marginTop: 20
  },
  msg: {
    fontSize: 20, 
    fontStyle: "italic",
    textAlign: "center"
  },
  name: {
    marginTop: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  }
});