import { Frame, Home, Settings, Trash } from "lucide-react";

export const data = {
    user: {
        name: 'fatma',
        email: 'hi@example.com',
        avatar: '/avatars/fatma.png'
    },

    navMain: [{
        title: 'Home',
        url: '/dashboard',
        icon: Home
    },
    {   title: 'Templates',
        url: '/templates',
        icon: Frame
    },{
        title: 'Trash',
        url: '/trash',
        icon: Trash
    },{
        title: 'Settings',
        url: '/settings',
        icon: Settings
    }]
}