import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CommonTable from "./CommonTable";
export default function NavBar({ resume, swap, setSwap }) {
  var myObject;
  myObject = useSelector((store) => store);
  // if (resume !== undefined) {
  //   myObject = JSON.parse(resume);
  // }

  return (
    <Tabs>
      <TabList>
        <Tab ml={"500px"}>Education</Tab>
        <Tab ml={"100px"}>Work Experience</Tab>
        <Tab ml={"90px"}>Achievements</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CommonTable
            info={myObject?.education}
            displaytype="education"
            swap={swap}
            setSwap={setSwap}
          />
        </TabPanel>
        <TabPanel>
          <CommonTable
            info={myObject?.work}
            displaytype="work"
            swap={swap}
            setSwap={setSwap}
          />
        </TabPanel>
        <TabPanel>
          <CommonTable
            info={myObject?.Achievements}
            displaytype="awards"
            swap={swap}
            setSwap={setSwap}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
