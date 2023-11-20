import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/cardSlice";
import { generateRandomNumber } from "../../utilites";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Card {
    name: string;
    number: number;
    expiry: string;
    isFreezed: boolean;
  }

interface props {
  isModalOpen: boolean;
  setModalOpen: any;
}

export default function FullScreenDialog({
  isModalOpen: open,
  setModalOpen: setOpen,
}: props) {
    const dispatch = useDispatch();
  const [name, setName] = React.useState("");


  const handleClose = () => {
    setOpen(false);
  };

  const addNewCard = () => {
    const newCard:Card = {
        name,
        number: generateRandomNumber(16, 10000000000000000),
        isFreezed:false,
        expiry: generateRandomNumber(2,13) + '/' + ( 2025 + generateRandomNumber(1,9))
    }
    dispatch(addCard(newCard))
    setName("");
    handleClose();
  }

  return (
    <>
      <Dialog
        fullScreen
        sx={{ height: "250px", mt: "450px" }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative" }}
          style={{ backgroundColor: "#01D167" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="success"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon
                color="error"
                fontSize="large"
                sx={{ fontWeight: "500" }}
              />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                fontWeight: "bold",
                fontFamily: "Open Sans",
              }}
              variant="h5"
              component="div"
            >
              Add New Card
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          placeholder=""
          label="Enter your name for new card"
          sx={{ mt: "20px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
        disabled={name.length === 0}
          sx={{
            color: name.length ? "#ffffff" : "#011f0e",
            width: "50%",
            position: "relative",
            top: "30px",
            left: "100px",
            fontWeight: 900,
            fontSize: '24px',
            backgroundColor: "#01D167",
          }}
          onClick={addNewCard}
          variant="contained"
        >
          SAVE
        </Button>
      </Dialog>
    </>
  );
}
