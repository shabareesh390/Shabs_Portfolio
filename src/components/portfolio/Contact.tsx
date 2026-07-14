import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "./Section";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-blue-600">build</span> something</>}
          subtitle="Have a role, a project, or an idea? I'd love to hear from you."
        />

        <div className="max-w-2xl mx-auto mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="premium-card p-8 md:p-10 bg-gray-50 flex flex-col items-center text-center">
              <h3 className="font-sans text-2xl font-bold text-gray-900">Get in touch</h3>
              <p className="mt-3 text-sm text-gray-600">
                Replies within 24 hours · Available 9 AM – 11 PM IST
              </p>
              
              <div className="mt-8 flex flex-col gap-6 text-[15px] font-medium text-gray-700 w-full max-w-sm">
                <a href="mailto:shabareesh390@gmail.com" className="flex items-center gap-4 transition-colors hover:text-blue-600 group text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>shabareesh390@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/shabareesh-s-gowda-a78490381" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-blue-600 group text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a href="https://github.com/shabareesh390" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-blue-600 group text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="leading-tight">github.com/shabareesh390</div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">Explore my repositories and open-source contributions</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group cursor-default text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Mangalore, Karnataka, India</span>
                </div>
              </div>

              <div className="mt-10 w-full rounded-xl bg-white border border-gray-200 p-5 shadow-sm text-left">
                <div className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Quick fact
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  I respond fastest on email and LinkedIn. Recruiters and engineering leaders welcome.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
