import {faHouseChimney ,} from '@fortawesome/free-solid-svg-icons'
export const PagesLink = [
    {
        id:0,
        Label: 'GENERAL',
        menus : [
            {
                id: 1,
                name: ' Dashboard',
                icon: faHouseChimney,
                url : '/',
                subMenu: [
                    {
                       id: 1,
                       name: 'Reports',
                       link: '#',
                   },
                   {
                       id: 2,
                       name: 'Expenses',
                       link: '#',
                   },
                   {
                       id: 3,
                       name: 'Products',
                       link: '#',
                   }
               ]
        
            },
           
        ]   
    },
]