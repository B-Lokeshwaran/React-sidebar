import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'

// import Accordion from "@material-ui/core/Accordion";


export const SidebarData = [
    { 
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard />
    },
    {
        title: 'Applications',
        path: '/applications',
        icon: <GiIcons.GiBookPile />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'All Applications',
                path: '/applications/allapplications',
            },
            {
                title: 'Add New',
                path: '/applications/addnew',
            },
        ]
    },

    {
        title: 'Shopify Stores',
        path: '/shopifystores',
        icon: <GiIcons.GiShoppingBag />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'All Shopify Stores',
                path: '/shopifystores/allshopifystores',
                
            },
            {
                title: 'Add New',
                path: '/shopifystores/addnew',
            },
        ]
    },
    {
        title: 'Authentication Providers',
        path: '/authenticationproviders',
        icon: <FaIcons.FaUnlock />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'All Authentication Providers',
                path: '/authenticationproviders/allauthenticationproviders',
            },
            {
                title: 'Add New',
                path: '/authenticationproviders/addnew',
            },
        ]
    },
    {
        title: 'Providers',
        path: '/providers',
        icon: <FaIcons.FaUnlock />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'All Providers',
                path: '/providers/allproviders',
            },
            {
                title: 'Add New',
                path: '/providers/addnew',
            },
        ]
    },

]