import Link from "next/link";
import { navigationLinks } from "@/library/navigation-links";

const Routes = () => {
  return (
    <ul className="flex justify-center gap-4">
      {navigationLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Routes;
