import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
