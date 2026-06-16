import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">Shabareesh S Gowda</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Crafted with care · © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "https://github.com/shabareesh390", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/shabareesh-s-gowda-a78490381", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:shabareesh390@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 hover:bg-white/10"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
