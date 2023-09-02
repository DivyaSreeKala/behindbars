import React from 'react'

export const SidebarData1=[
    {
        title:"Prisoner",
        path:null,
        iconclosed:"v",
        iconopened:"^",
        subnav:[
            {
                title:"Add Prisoners",
                path:"/superintendent/add-prisoner"
            },
            {
                title:"Update Prisoners",
                path:"/superintendent/update-prisoner"
            },
            {
                title:"Prisoner Details",
                path:"/superintendent/prisoner-details"
            }
        ]
    },

    {
        title:"Jailor",
        path:null,
        iconclosed:"v",
        iconopened:"^",
        subnav:[
            {
                title:"Add Jailor",
                path:"/superintendent/add-jailor"
            },
            
            {
                title:"Jailor Details",
                path:"/superintendent/jailor-details"
            }
        ]
    },

    {
        title:"Medical Officer",
        path:null,
        iconclosed:"v",
        iconopened:"^",
        subnav:[
            {
                title:"Add Medical Officer",
                path:"/superintendent/add-mo"
            },
            
            {
                title:"Medical Officer Details",
                path:"/superintendent/mo-details"
            }
        ]
    },

    {
        title:"Sales & Services Details",
        path:"/superintendent/s&s",
        
        
    },
    {
        title:"Visitor Details",
        path:"/superintendent/visitor",
        
        
    },
    {
        title:"Logout",
        path:"/"
    }

]

export default SidebarData1