import React from "react";
import { MouseEvent } from "react";
import { ChangeEvent, useState } from "react";
import { ProfilePage } from "../components/ProfilePage";
import {
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  styled,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Your Profile" value="1" />
            <Tab label="Your Groups" value="2" />
            <Tab label="Create a new Groups" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
  );
}

export const Profile = () => {
  return (
    <>
      <Typography variant="h5" component="h5" gutterBottom>
        Your Profile!
      </Typography>
      {LabTabs()}
    </>
  );
};
