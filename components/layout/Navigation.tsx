import Link from 'next/link'

interface NavigationProps {
  mobile?: boolean
}

export default function Navigation({ mobile = false }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const baseClasses = mobile
    ? 'flex flex-col space-y-2 px-4'
    : 'flex items-center space-x-8'

  const linkClasses = mobile
    ? 'text-gray-700 hover:text-payaana-pink transition-colors font-medium py-2'
    : 'text-gray-700 hover:text-payaana-pink transition-colors font-medium'

  return (
    <ul className={baseClasses}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={linkClasses}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

