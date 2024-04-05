interface NavItem {
  title: string;
  link: string;
}

// Sample navigation items
const navItems: NavItem[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

export const Sidenav = (props) => {
  return (
    <nav className="mt-8">
      <ul className="wtext-center flex flex-col gap-2">
        <li>Home</li>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </nav>
  );
};
