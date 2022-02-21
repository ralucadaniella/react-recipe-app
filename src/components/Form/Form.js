import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faUtensils } from "@fortawesome/free-solid-svg-icons";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts, updatePost } from "../../actions/posts";

const Form = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();

  //Ingredients List
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");

  //Add items in the list
  const handleAddIngr = () => {
    const newItem = {
      name: ingredientInput,
      quantity: 1,
    };

    const newItems = [...ingredients, newItem];

    setIngredients(newItems);
    console.log(newItems);
    console.log(ingredients);
    setIngredientInput("");
  };

  //Increase the quantity
  const handleQuantityIncrease = (index) => {
    const newItems = [...ingredients];

    newItems[index].quantity++;

    setIngredients(newItems);
  };

  //Decrease the quantity
  const handleQuantityDecrease = (index) => {
    const newItems = [...ingredients];

    newItems[index].quantity--;

    setIngredients(newItems);
  };

  const [postData, setPostData] = useState({
    title: "",
    ingredients: { ingredients },
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: "", ingredients: "", tags: "", selectedFile: "" });
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ingredients);
    console.log(postData);
    if (currentId === null) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own recipes and like other's recipes.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" className={classes.formName}>
          {currentId ? "Editing" : "Creating"} a Recipe
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Recipe"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <div className={classes.ingredientsContainer}>
          <List
            className={classes.ingredientItem}
            dense
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {ingredients.map((ingredient, index) => (
              <ListItem className={classes.itemContainer} key={ingredient.id}>
                <ListItemAvatar className={classes.itemName}>
                  <FontAwesomeIcon icon={faUtensils} />
                </ListItemAvatar>
                <ListItemText primary={ingredient.name}></ListItemText>

                <div className={classes.itemQuantity}>
                  <ListItemButton>
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleQuantityDecrease(index)}
                    />
                  </ListItemButton>
                  <ListItemText primary={ingredient.quantity}></ListItemText>
                  <ListItemButton>
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleQuantityIncrease(index)}
                    />
                  </ListItemButton>
                </div>
              </ListItem>
            ))}
          </List>
          <div className="add-ingredients">
            <TextField
              name="ingredients"
              variant="outlined"
              label="Add an ingredient..."
              fullWidth
              value={ingredientInput}
              // onChange={(e) =>
              //   setPostData({ ...postData, ingredientsNeeded: e.target.value })
              // }
              onChange={(event) => setIngredientInput(event.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => handleAddIngr()}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={classes.plusIcon}
                    />
                  </IconButton>
                ),
              }}
            ></TextField>
          </div>
        </div>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className={classes.buttonsWrapper}>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
