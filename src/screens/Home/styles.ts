import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff", // igual que Detail, fondo blanco
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ccc", // borde gris suave
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#f9f9f9", // fondo gris claro
  },
  list: {
    paddingBottom: 120, // espacio extra para scroll
  },
});

