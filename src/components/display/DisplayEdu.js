import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeData } from "../../Redux/actions";
import { useDisclosure } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import EducationAddnew from "../modal/EducationAddnew";

export default function DisplayEdu({ data, swap, setSwap }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  var temp = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <Box width="800px">
      <Accordion>
        {data?.map((edu) => (
          <>
            {" "}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {edu.degree}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Degree
                <Text fontSize="sm">{edu.degree}</Text>
                Institute
                <Text fontSize="sm">{edu.institute}</Text>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  flexDirection={"row"}
                >
                  <Box>start date : {edu.startDate}</Box>
                  <Box>end date : {edu.endDate}</Box>
                </Box>
                Description
                <Text fontSize="sm">{edu.description}</Text>
                <br />
                <Button
                  colorScheme="white"
                  border="1px"
                  borderColor="black"
                  color={"black"}
                  onClick={onOpen}
                >
                  Edit
                </Button>{" "}
                <EducationAddnew isOpen={isOpen} onOpen={onOpen} onClose={onClose}  edu = {edu} swap={swap} setSwap={setSwap} data={data}/>
                <Button
                  colorScheme="white"
                  border="1px"
                  borderColor="black"
                  color={"black"}
                  onClick={() => {
                    if (temp?.length != 0) {
                      // console.log(temp, "temppppppppppppp")
                      temp.education = temp.education.filter(
                        (x) => x.description !== edu.description
                      );
                      dispatch(initializeData(temp));
                      setSwap(!swap);
                    }
                  }}
                >
                  Delete
                </Button>
                <EducationAddnew />
              </AccordionPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </Box>
  );
}
