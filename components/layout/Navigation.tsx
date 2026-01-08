"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface NavigationProps {
  mobile?: boolean;
}

interface Service {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export default function Navigation({ mobile = false }: NavigationProps) {
  const pathname = usePathname();
  const [services, setServices] = useState<Service[]>([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Fetch services on mount
  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services");
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }
    fetchServices();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const baseClasses = mobile
    ? "flex flex-col space-y-2 px-4"
    : "flex items-center space-x-8";

  const getLinkClasses = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    const activeClasses = isActive
      ? "text-brand-purple font-semibold"
      : "text-gray-700";

    if (mobile) {
      return `${activeClasses} hover:text-brand-purple transition-colors font-medium py-2`;
    }
    return `${activeClasses} hover:text-brand-purple transition-colors font-medium`;
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <ul className={baseClasses}>
      {navItems.slice(0, 2).map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={getLinkClasses(item.href)}>
            {item.label}
          </Link>
        </li>
      ))}

      {/* Services Dropdown */}
      <li ref={dropdownRef} className="relative">
        {mobile ? (
          <div>
            <div className="flex items-center">
              <Link
                href="/services"
                className={`${
                  isServicesActive
                    ? "text-brand-purple font-semibold"
                    : "text-gray-700"
                } hover:text-brand-purple transition-colors font-medium py-2 flex-1`}
              >
                Services
              </Link>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="p-1 ml-2"
                aria-label="Toggle services menu"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {isServicesOpen && services.length > 0 && (
              <ul className="pl-4 mt-2 space-y-1">
                {services.map((service) => (
                  <li key={service._id}>
                    <Link
                      href={`/services/${service.slug.current}`}
                      className="text-gray-600 hover:text-brand-purple transition-colors text-sm py-1 block"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="relative group">
            <div className="flex items-center">
              <Link
                href="/services"
                className={`${
                  isServicesActive
                    ? "text-brand-purple font-semibold"
                    : "text-gray-700"
                } hover:text-brand-purple transition-colors font-medium`}
              >
                Services
              </Link>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="p-1 ml-1"
                aria-label="Toggle services menu"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {isServicesOpen && services.length > 0 && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="max-h-96 overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service._id}
                      href={`/services/${service.slug.current}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-purple transition-colors text-sm"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </li>

      {navItems.slice(2).map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={getLinkClasses(item.href)}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
