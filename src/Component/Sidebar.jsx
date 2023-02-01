import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { RiRoadMapFill } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import "./sidebar.css";
import { Box, Container } from "@mui/system";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  const list = [
    {
      id: 1,
      name: "search",
      path: "dashboasearchrd",
      icon: <GoSearch />,
    },
    {
      id: 2,
      name: "dashboard",
      path: "dashboard",
      icon: <MdDashboard />,
    },
    {
      id: 3,
      name: "ownland",
      path: "ownland",
      icon: <RiRoadMapFill />,
    },
    {
      id: 4,
      name: "addland",
      path: "addland",
      icon: <RiMapPinUserFill />,
    },
    {
      id: 5,
      name: "land request",
      path: "reqland",
      icon: <MdDashboard />,
    },
    {
      id: 6,
      name: "Notification",
      path: "notification",
      icon: <MdNotificationsActive />,
    },
  ];

  return (
    <Box>
      <Container>
        <Grid className="user-sidebar" container sx={{height:'100%'}}>
          <Grid item>
          {list.map((data) => {
            return (
              <List key={data.id}>
                <ListItem disablePadding>
                  <ListItemButton className="user-links" component={Link} to={data.path}>
                    <ListItemIcon className="user-icons" >{data.icon}</ListItemIcon>
                    <ListItemText className="user-items" primary={data.name} />
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
          </Grid>
          <Grid item>
          <List >
                <ListItem disablePadding>
                  <ListItemButton className="user-links" component={Link} to='/logout'>
                    <ListItemIcon className="user-icons" >
                    <HiOutlineLogout/>
                    </ListItemIcon>
                    <ListItemText className="user-items" primary='Logout' />
                  </ListItemButton>
                </ListItem>
              </List>
          </Grid>
         
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Sidebar;
