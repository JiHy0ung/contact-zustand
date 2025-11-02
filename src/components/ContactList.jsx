import React, { useState } from "react";
import usePhoneBookStore from "./stores/usePhoneBookStore";
import { Box, TextField, Typography, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const [searchName, setSearchName] = useState("");

  const filteredContacts = phoneBook.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          label="이름 검색"
          size="small"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              backgroundColor: "#fbfbfbff",
              fontFamily: "OngleipParkDahyeon",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "OngleipParkDahyeon",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#ff92c5ff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ff92c5ff",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#ff92c5ff",
            },
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "#ffffffff",
          maxHeight: "400px",
          minHeight: "200px",
          overflowY: "auto",
          border: "1.5px solid #949494ff",
          borderRadius: "10px",
          padding: 1,
        }}
      >
        {filteredContacts.map((contact) => (
          <Box
            key={contact.id}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              borderBottom: "2px dotted #b6b6b6ff",
            }}
          >
            <AccountCircle fontSize="large" sx={{ mr: 1 }} />
            <Box>
              <Typography sx={{ fontFamily: "OngleipParkDahyeon" }}>
                {contact.name}
              </Typography>
              <Typography sx={{ fontFamily: "OngleipParkDahyeon" }}>
                {contact.phoneNumber}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ContactList;
