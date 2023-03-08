import React from 'react'
import * as MdIcons from "react-icons/md";
import * as CiIcons from "react-icons/ci";
import * as VscIcons from "react-icons/vsc";
import * as FcIcons from "react-icons/fc";

export const SideBarData = [
    {
        title: 'Home',
        link: '/home',
        icon: <MdIcons.MdHomeFilled />,
        cName: 'side-text'
    },

    {
        title: 'Search',
        link: '/search',
        icon: <CiIcons.CiSearch />,
        cName: 'side-text'
    },

    {
        title: 'Your Library',
        link: 'yourlibrary/',
        icon: <VscIcons.VscLibrary />,
        cName: 'side-text'
    },

    {
        title: 'Create Playlist',
        link: '/createplaylist',
        icon: <FcIcons.FcPlus />,
        cName: 'side-text'
    },

    {
        title: 'Liked Songs',
        link: '/likedsongs',
        icon: <FcIcons.FcLike />,
        cName: 'side-text'
    },

]
 