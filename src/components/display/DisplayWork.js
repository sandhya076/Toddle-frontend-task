import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {initializeData} from "../../Redux/actions"
import { useDisclosure } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text
} from "@chakra-ui/react";



import ExperienceAddnew from "../modal/ExperienceAddnew"

export default function DisplayWork({data , swap , setSwap}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  var temp = useSelector((store)=>(store));
  const dispatch = useDispatch();
  return (
    <Box  width="800px">
      <Accordion>
        {data?.map((w) => (
          <>
            {" "}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {w.company}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Role
                <Text fontSize="sm">{w.role}</Text>
                Company
                <Text fontSize="sm">{w.company}</Text>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  flexDirection={"row"}
                >
                  <Box>start date : {w.startDate}</Box>
                  <Box>end date : {w.endDate}</Box>
                </Box>

                Description
                <Text fontSize="sm">{w.description}</Text>
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
                <ExperienceAddnew isOpen={isOpen} onOpen={onOpen} onClose={onClose}  w = {w} swap={swap} setSwap={setSwap} data={data}/>

                <Button
                  colorScheme="white"
                  border="1px"
                  borderColor="black"
                  color={"black"}
                  onClick={() => {
                    if (temp?.length != 0) {
                      temp.work = temp.work.filter(
                        (x) => x.description !== w.description
                      );
                      dispatch(initializeData(temp));
                      setSwap(!swap);
                    }
                  }}
                >
                  Delete
                </Button>
                <ExperienceAddnew />
              </AccordionPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </Box>
  )
}
