import { StyleSheet } from "react-native";
import { COLORS, SPACINGS, SIZES } from "@/constants";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: SPACINGS.XS,
    paddingHorizontal: SPACINGS.XS,
    paddingVertical: SPACINGS.S,
    alignItems: "center",
  },
  moveButtons: {
    marginRight: SPACINGS.XS,
  },
  moveButton: {
    padding: SPACINGS.XS,
    marginVertical: SPACINGS["4XS"],
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  disabledButton: {
    opacity: 0.2,
  },
  moveButtonText: {
    fontSize: SPACINGS.S,
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
  disabledButtonText: {
    color: COLORS.PRIMARY,
  },
  todoContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: SPACINGS.XL,
    height: SPACINGS.XL,
    borderRadius: SPACINGS["2XL"],
    borderWidth: SPACINGS["4XS"],
    borderColor: COLORS.PRIMARY,
    marginRight: SPACINGS.XS,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  checkmark: {
    color: COLORS.WHITE,
    fontSize: SPACINGS.S,
  },
  todoText: {
    fontSize: SIZES.M,
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: COLORS.PRIMARY,
  },
  deleteButton: {
    padding: SPACINGS.XS,
  },
  deleteButtonText: {
    color: COLORS.DANGER,
    fontWeight: "bold",
  },
});
