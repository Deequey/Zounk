import Link from "next/link";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <nav className="border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-3xl items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
