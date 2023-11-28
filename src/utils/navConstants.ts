import type { defineComponent } from 'vue';
import LogoIcon from '../components/icons/LogoIcon.vue';
import { beer, notifications, helpCircle, person, heart, newspaper, location, storefront} from "ionicons/icons"
import ShopIconVue from '@/components/icons/ShopIcon.vue';

type NavRoute = {
    icon: ReturnType<typeof defineComponent>, 
    name: string, 
    hasCustomIcon?: boolean, 
    notificationCount?: number,
    route?: string
}

export const navRoutes: NavRoute[] = [
    {
        icon: LogoIcon,
        name: 'Home',
        hasCustomIcon: true,
        notificationCount: 4,
        route: '/Home'
    },
    {
        icon: beer,
        name: 'Order Now',
        route: '/order'
    },
    {
        icon: notifications,
        name: 'Notifications'
    },
    {
        icon: storefront,
        name: 'Store Locator',
    },
    {
        icon: helpCircle,
        name: "FAQ's"
    },
    {
        icon: ShopIconVue,
        name: 'My Orders',
        hasCustomIcon: true,
        notificationCount: 1
    },
    {
        icon: person,
        name: 'My Account'
    },
    {
        icon: heart,
        name: 'My Favorites'
    },
    {
        icon: location,
        name: "Order Tracker"
    },
    {
        icon: newspaper,
        name: "Order History"
    }
]