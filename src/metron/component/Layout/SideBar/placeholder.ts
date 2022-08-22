import { faFileInvoiceDollar, faHouseChimney , faUserGroup ,faInfo, faUserPlus } from '@fortawesome/free-solid-svg-icons'
export const Pages = [
    {
        id:0,
        Label: '',
        menus : [
            {
                id: 1,
                name: ' Dashboard',
                icon: faHouseChimney,
                url : '/',
                subMenu: [
                    
                ]
        
            },
           
        ]   
    },
    {
        id:1,
        Label:'MAIN',
        menus : [
            {
                id: 11,
                name: 'User',
                icon: faUserGroup,
                url : 'table',
                subMenu: [
                    
                ]
        
            },
            {
                id: 12,
                name: 'User Detail',
                icon: faInfo,
                url : 'user',
                subMenu: [
                    
                ]
        
            },
            {
                id: 13,
                name: 'Add User ',
                icon: faUserPlus,
                url : 'adduser',
                subMenu: [
                     // {
                    //     id: 1,
                    //     name: 'Overview',
                    //     link: '#',
                    // },
                    // {
                    //     id: 2,
                    //     name: 'Projects 1',
                    //     link: '#',
                    // },
                    // {
                    //     id: 3,
                    //     name: 'Overview 2',
                    //     link: '#',
                    // }
                ]
        
            },            
        ]
        
    },
]