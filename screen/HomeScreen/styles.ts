import { StyleSheet } from "react-native";
import { COLORS, SPACINGS, SIZES } from "@/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.M,
    backgroundColor: COLORS.BACKGROUND,
  },
  title: {
    fontSize: SIZES.L,
    fontWeight: "bold",
    marginVertical: SPACINGS.XL,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: SPACINGS.M,
  },
  input: {
    flex: 1,
    height: SPACINGS["6XL"],
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    paddingHorizontal: SPACINGS.M,
    backgroundColor: COLORS.WHITE,
    marginRight: SPACINGS.M,
  },
  addButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: SPACINGS.M,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
  counterText: {
    fontSize: SIZES.M,
    fontWeight: "bold",
    marginBottom: SPACINGS.M,
  },
  listContainer: {
    paddingBottom: SPACINGS.M,
  },
  emptyMessageText: {
    textAlign: "center",
    paddingVertical: SPACINGS["6XL"],
  },
});
