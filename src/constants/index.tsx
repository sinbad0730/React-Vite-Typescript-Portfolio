interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }
  
const navigation : NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Profile', href: '/profile', current: false },
    { name: 'Experience', href: '#', current: false },
    { name: 'Technical Skills', href: '#', current: false },
    { name: 'Education', href: '#', current: false },
  ]

export default navigation ;
export type { NavigationItem }