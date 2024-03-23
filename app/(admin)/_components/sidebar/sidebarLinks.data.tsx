import {
  LayoutDashboard as LayoutDashboardIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Speaker as SpeakerIcon,
  Users as UsersIcon,
} from 'lucide-react';
import { SidebarLinkType } from '@/lib/types/data.types';

export const sidebarLinks: SidebarLinkType[] = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: <LayoutDashboardIcon size={20} />,
  },
  {
    title: 'Customer',
    href: '/admin/customer',
    icon: <UsersIcon size={20} />,
  },
  {
    title: 'Products',
    href: '/admin/products',
    icon: <SpeakerIcon size={20} />,
  },

  {
    title: 'Orders',
    href: '/admin/orders',
    icon: <ShoppingBasketIcon size={20} />,
  },
];
