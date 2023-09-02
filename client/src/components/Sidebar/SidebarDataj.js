import React from 'react'

export const SidebarDataj=[
    {
        title:"Prisoner",
        path:"/jailor/prisoner-details"
    },

    {
        title:"Sales & Services",
        path:null,
        iconclosed:"v",
        iconopened:"^",
        subnav:[
            {
                title:"Add S&S Details",
                path:"/jailor/s&s-add"
            },
            {
                title:"S&S Details",
                path:"/jailor/s&s-view"
            }
            
        ]
    },
    {
        title:"Visitors",
        path:null,
        iconclosed:"v",
        iconopened:"^",
        subnav:[
            {
                title:"Add Visitor",
                path:"/jailor/add-visitor"
            },
            {
                title:"Visitor Details",
                path:"/jailor/view-visitor"
            }
        ]
    },
    {
        title:"Malpractices",
        path:null,
        iconclosed:"v",
        iconopened:"^",
        subnav:[
            {
                title:"Add Malpractice",
                path:"/jailor/add-malpractices"
            },
            {
                title:"Malpractice Details",
                path:"/jailor/view-malpractices"
            }
        ]
    },
    {
        title:"Logout",
        path:"/"
    }
]
