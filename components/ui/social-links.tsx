import { site } from "@/content/site";
import { Github, Linkedin, Mail } from "@/components/ui/social-icons";

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { label: "GitHub", href: site.github, Icon: Github },
    { label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
    { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
  ];

  return (
    <ul className={className}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-forest hover:text-forest"
            aria-label={label}
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
