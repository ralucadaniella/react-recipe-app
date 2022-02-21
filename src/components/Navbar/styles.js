import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "auto",
  },
  avatar: {
    backgroundColor: "#fed36a",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "100px",
  },
  logout: {
    backgroundColor: "#fed36a",
  },
  text: {
    color: "#0d1e3a",
    fontSize: "1em",
  },

  menuLink: {
    textDecoration: "none",
    color: "#0d1e3a",
    textAlign: "center",
    marginRight: "50px",
    "&:hover": {
      color: "primary",
    },
  },
}));
