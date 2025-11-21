import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff", // igual que Home, fondo blanco
    alignItems: "center",    // centramos contenido en detalle
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "capitalize", // para que el nombre se vea con mayúscula inicial
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
});