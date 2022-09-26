import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {initializeData} from "../../Redux/actions"
import AchievementsAddnew from "../modal/AchievementsAddnew"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,
  useDisclosure
} from "@chakra-ui/react";


export default function DisplayAwards({ data, swap , setSwap }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  var temp = useSelector((store)=>(store));
  const dispatch = useDispatch();
  return (
    <Box w="800px">
      <Accordion>
        {data?.map((award) => (
          <>
            {" "}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {award.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Title
                <Text fontSize="sm">{award.title}</Text>
                date
                <Text fontSize="sm">{award.date}</Text>
                Description
                <Text fontSize="sm">{award.description}</Text>
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
                <AchievementsAddnew isOpen={isOpen} onOpen={onOpen} onClose={onClose}  award = {award} swap={swap} setSwap={setSwap} data={data}/>
                <Button
                  colorScheme="white"
                  border="1px"
                  borderColor="black"
                  color={"black"}
                  onClick={() => {
                    if (temp?.length != 0) {
                      temp.Achievements = temp.Achievements.filter(
                        (x) => x.description !== award.description
                      );
                      dispatch(initializeData(temp));
                      setSwap(!swap);
                    }
                  }}
                >
                  Delete
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </Box>
  );
}
