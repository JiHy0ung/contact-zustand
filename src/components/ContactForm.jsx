import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import usePhoneBookStore from "./stores/usePhoneBookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;

    addContact(name, phoneNumber);

    setName("");
    setPhoneNumber("");
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <TextField
        variant="standard"
        label="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: "OngleipParkDahyeon",
            p: 1,
          },

          "& .MuiInputLabel-root": {
            fontFamily: "OngleipParkDahyeon",
            fontSize: "24px",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#ff92c5ff",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#ff92c5ff",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#ff92c5ff",
          },
        }}
      ></TextField>
      <TextField
        variant="standard"
        label="전화번호"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: "OngleipParkDahyeon",
            p: 1,
          },
          "& .MuiInputLabel-root": {
            fontFamily: "OngleipParkDahyeon",
            fontSize: "24px",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#ff92c5ff",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#ff92c5ff",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#ff92c5ff",
          },
        }}
      ></TextField>
      <Button
        variant="contained"
        onClick={handleAddContact}
        disabled={!name.trim() || !phoneNumber.trim()}
        sx={{
          backgroundColor: "#ffed92ff",
          fontFamily: "OngleipParkDahyeon",
          fontWeight: "900",
          fontSize: "20px",
          color: "#010101",
        }}
      >
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
