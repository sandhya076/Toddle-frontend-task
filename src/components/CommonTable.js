import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import DisplayEdu from "./display/DisplayEdu";
import DisplayWork from "./display/DisplayWork";
import DisplayAwards from "./display/DisplayAwards";
import WorksNew from "./modalNew/WorksNew";
import AchivementsNew from "./modalNew/AchivementsNew";
import EducationNew from "./modalNew/EducationNew";

export default function CommonTable({ info, displaytype, swap, setSwap }) {
  const [data, setData] = useState(info);

  const [editAdd, setEditAdd] = useState("Edit");

  console.log(info, "finallyyyyyyyyyyyy");
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-end"
      padding="21px 284px"
      gap="24px"
      position="absolute"
      width="1388px"
      height="400.98px"
      left="56px"
      // top="491px"
      background="#FFFFFF"
      borderRadius="24px"
    >
      {displaytype === "education" && (
        <>
          <EducationNew data={info} swap={swap} setSwap={setSwap} />
        </>
      )}
      {displaytype === "awards" && (
        <>
          <AchivementsNew data={info} swap={swap} setSwap={setSwap} />
        </>
      )}
      {displaytype === "work" && (
        <>
          <WorksNew data={info} swap={swap} setSwap={setSwap} />
        </>
      )}
      {displaytype === "work" && (
        <>
          <DisplayWork data={info} swap={swap} setSwap={setSwap} />
        </>
      )}
      {displaytype === "education" && (
        <>
          <DisplayEdu data={info} swap={swap} setSwap={setSwap} />
        </>
      )}
      {displaytype === "awards" && (
        <>
          <DisplayAwards data={info} swap={swap} setSwap={setSwap} />
        </>
      )}
    </Box>
  );
}
