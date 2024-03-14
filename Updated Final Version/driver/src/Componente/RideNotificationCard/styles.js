import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // position: "absolute",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "auto",
    bottom: 0,
    left: 0,
    right: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  acceptBtn: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  rejectBtn: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
