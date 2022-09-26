import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Input } from "@chakra-ui/react";
import { initializeData } from "../Redux/actions";
export default function Header({ resume, setResume }) {
  const dispatch = useDispatch();
  var myObject;
  function handleFile(e) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setResume(e.target.result);
      dispatch(initializeData(JSON.parse(e.target.result)));
    };
  }

  var download = useSelector((store) => store);
  function onExport() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(download)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  }

  return (
    <>
      <Box
        display={"flex"}
        mt="5px"
        h="45px"
        borderBottom="1px solid #D9D9D9"
        justifyContent={"space-around"}
      >
        <Box ml={"10px"}>
          <svg
            width="32"
            height="32"
            // viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.8293 4H23C25.7614 4 28 6.23858 28 9V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V9C4 6.23858 6.23858 4 9 4H9.17071C9.58254 2.83481 10.6938 2 12 2H20C21.3062 2 22.4175 2.83481 22.8293 4ZM9.17071 6H9C7.34315 6 6 7.34315 6 9V25C6 26.6569 7.34315 28 9 28H23C24.6569 28 26 26.6569 26 25V9C26 7.34315 24.6569 6 23 6H22.8293C22.4175 7.16519 21.3062 8 20 8H12C10.6938 8 9.58254 7.16519 9.17071 6ZM11 5C11 4.44772 11.4477 4 12 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5Z"
              fill="#5050C5"
            />
          </svg>
        </Box>
        <Box
          ml={"20px"}
          top="-2.22%"
          bottom="27.78%"
          fontFamily="Avenir Next"
          fontStyle="normal"
          fontSize="20px"
          color="#5050C5"
        >
          Resume Builder
        </Box>

        <Box ml="1100px" colorScheme="green" variant="solid" width={"110px"}>
          <Input type={"file"} onChange={(e) => handleFile(e)} />
          {/* <Input type={"file"} onChange={(e) => handleFile(e)} /> */}{" "}
        </Box>

        <Box mr={"30px"}>
          {" "}
          <Button colorScheme="red" variant="solid" onClick={onExport}>
            Export
          </Button>
        </Box>
      </Box>
    </>
  );
}
