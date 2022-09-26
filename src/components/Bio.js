import React, { useState } from "react";
import { initializeData } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  VStack,
  Button,
  Image,
  Textarea,
  GridItem,
} from "@chakra-ui/react";

export default function Bio({ swap, setSwap }) {
  const [bio, setBio] = useState();
  const dispatch = useDispatch();
  var temp = useSelector((store) => store);

  return (
    <VStack w="full" p={10}>
      <SimpleGrid columns={3} columnGap={10} w="full">
        <VStack>
          <GridItem>
            <FormControl>
              <Image
                borderRadius="full"
                boxSize="200px"
                src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg"
              />
            </FormControl>
          </GridItem>
        </VStack>
        <VStack marginRight={"300px"}>
          <GridItem>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                width={"400px"}
                onChange={(e) => {
                  setBio({ ...bio, name: e.target.value });
                }}
                value={bio?.name}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                width={"400px"}
                onChange={(e) => {
                  setBio({ ...bio, email: e.target.value });
                }}
                value={bio?.email}
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl marginRight={"330px"}>
              <Button
                colorScheme="blue"
                size="sm"
                onClick={() => {
                  temp.bio = bio;
                  dispatch(initializeData(temp));
                  setBio({ email: "", shortBio: "", name: "" });
                  setSwap(!swap);
                }}
              >
                Save
              </Button>
            </FormControl>
          </GridItem>
        </VStack>
        <VStack marginRight={"400px"}>
          <GridItem>
            <FormControl>
              <FormLabel>Short Bio</FormLabel>
              <Textarea
                placeholder="Type here"
                rows={4}
                width={"400px"}
                onChange={(e) => {
                  setBio({ ...bio, shortBio: e.target.value });
                }}
                value={bio?.shortBio}
              />
            </FormControl>
          </GridItem>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
}
