import { ThemeToggle } from "@/app/components/shared";

export const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <nav {...props}>
      <div className="flex items-center justify-between py-4">
        <p
          aria-label="company logo"
          className="text-2xl font-extrabold uppercase tracking-widest text-neutral-700 dark:text-neutral-200"
        >
          <span className="text-greenvery">Walt</span>every
        </p>
        <ul className="flex space-x-8 text-neutral-700 dark:text-neutral-200">
          <li role="switch">
            <ThemeToggle className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
