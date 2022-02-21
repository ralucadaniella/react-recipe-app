import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Sora",
    fontWeight: "medium",
    backgroundColor: "#f5fafe",
  },
  form: {
    backgroundColor: "#fff",
    maxWidth: "650px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    marginTop: "24px",
  },
  formName: {
    margin: "24px 0",
    fontSize: "1.4em",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
    color: "#B054F2",
  },

  buttonSubmit: {
    marginBottom: 10,
    width: "100px",
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "16px",
  },
  ingredientsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  ingredientItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemQuantity: {
    display: "flex",
    flexDirection: "row",
  },
  plusIcon: {},
}));
