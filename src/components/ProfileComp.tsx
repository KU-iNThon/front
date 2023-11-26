import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  LinearProgress,
  Stack,
  CardActions,
  Grid,
  Card,
  Rating,
  Link,
  Chip,
  Divider,
  AvatarGroup,
  Tooltip,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Navbar.css";
import { Margin } from "@mui/icons-material";

export const ProfileComp = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card
          variant="outlined"
          sx={{
            p: 3,
          }}
        >
          <Link href="#" variant="h6" color="text.primary">
            English Productivity Group 6pm ~ 9pm
          </Link>
          <Box
            sx={{
              py: 2,
            }}
          ></Box>
          <Typography
            sx={{
              pb: 2,
            }}
            color="text.secondary"
          >
            We are a group of KU students, studying ever day from 6pm~9pm. We
            are studious and supportive. Please join our community! Active
            students! and awesome moderators. Only accepting 50 people!
          </Typography>
          <Typography>참석율</Typography>

          <LinearProgress sx={{ mt: 1 }} variant="determinate" value={89} />
          <Typography sx={{ mt: 1 }}>89%</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ mt: 2, color: "#118A00 " }}>Active</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card
          variant="outlined"
          sx={{
            p: 3,
          }}
        >
          <Link href="#" variant="h6" color="text.primary">
            English Productivity Group 6pm ~ 9pm
          </Link>
          <Box
            sx={{
              py: 2,
            }}
          ></Box>
          <Typography
            sx={{
              pb: 2,
            }}
            color="text.secondary"
          >
            We are a group of KU students, studying ever day from 6pm~9pm. We
            are studious and supportive. Please join our community! Active
            students! and awesome moderators. Only accepting 50 people!
          </Typography>
          <Typography>참석율</Typography>

          <LinearProgress sx={{ mt: 1 }} variant="determinate" value={89} />
          <Typography sx={{ mt: 1 }}>89%</Typography>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ mt: 2, color: "#118A00 " }}>Active</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
