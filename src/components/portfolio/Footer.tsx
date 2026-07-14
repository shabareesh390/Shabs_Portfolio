import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-sans text-lg font-bold text-gray-900">
            Shabareesh S Gowda
          </div>
          <p className="mt-1 text-sm text-gray-500 font-medium">
            Crafted with care · © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
