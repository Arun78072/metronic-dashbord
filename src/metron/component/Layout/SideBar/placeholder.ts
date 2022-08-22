import { faFileInvoiceDollar , faGrin ,faIdBadge } from '@fortawesome/free-solid-svg-icons'



export const Pages = [
    {
        id:0,
        Label: '',
        menus : [
            {
                id: 1,
                name: ' Dashboard',
                icon: faGrin,
                url : '#',
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
                icon: faIdBadge,
                url : '#',
                subMenu: [
                    {
                        id: 1,
                        name: 'Overview',
                        link: '#',
                    },
                    {
                        id: 2,
                        name: 'Projects 1',
                        link: '#',
                    },
                    {
                        id: 3,
                        name: 'Overview 2',
                        link: '#',
                    }
                ]
        
            },
            {
                id: 12,
                name: 'User Detail',
                icon: faFileInvoiceDollar,
                url : '#',
                subMenu: [
                    
                ]
        
            },
            {
                id: 13,
                name: 'Add User ',
                icon: faFileInvoiceDollar,
                url : '#',
                subMenu: [
                    
                ]
        
            },
            
        ]
        
    },
]

