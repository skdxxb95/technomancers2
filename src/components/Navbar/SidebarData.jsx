import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";

{/*------ DON'T CHANGE THIS PAGE, IT WILL BREAK THE NAVBAR LINKS ------*/}
{/*------ DON'T CHANGE THIS PAGE, IT WILL BREAK THE NAVBAR LINKS ------*/}
{/*------ DON'T CHANGE THIS PAGE, IT WILL BREAK THE NAVBAR LINKS ------*/}

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Team Profile",
    path: "/teamprofile",
    icon: <AiIcons.AiOutlineProfile />,
    cName: "nav-text",
  },
  {
    title: "Project Idea",
    path: "/projectidea",
    icon: <GoIcons.GoCircuitBoard />,
    cName: "nav-text",
  },
  {
    title: "Skills and Jobs",
    path: "/skillsandjobs",
    icon: <GiIcons.GiSkills />,
    cName: "nav-text",
  },
  {
    title: "Group Reflection",
    path: "/groupreflection",
    icon: <HiIcons.HiUserGroup />,
    cName: "nav-text",
  },
];