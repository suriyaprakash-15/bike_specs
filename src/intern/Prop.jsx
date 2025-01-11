import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function WordChanger() {
  const [word, setWord] = useState("Welcome to dinesh");

  const changeWord = () => {
    setWord(word === "Welcome to dinesh" ? "Welcome to Kumar" : "Welcome to dinesh");
  };

  return (
    <div>
      <p style={{marginInlineStart:"45%"}}>{word}</p>

      <Button variant="outlined" href="#outlined-buttons" onClick={changeWord} style={{marginInlineStart:"45%"}}>
        Change word
      </Button>
    </div>
  );
}

export default WordChanger;
