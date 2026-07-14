import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader } from "./Section";

// To enable email delivery: create a free account at https://www.emailjs.com,
// then replace these with your values (publishable, safe in client code).
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setMessage("Please fill in name, email and message.");
      return;
    }
    setStatus("sending");
    try {
      if (EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) {
        // Graceful fallback: open user's mail client
        const body = `From: ${form.name} <${form.email}>\n\n${form.message}`;
        window.location.href = `mailto:shabareesh390@gmail.com?subject=${encodeURIComponent(
          form.subject || "Hello Shabareesh"
        )}&body=${encodeURIComponent(body)}`;
        setStatus("success");
        setMessage("Opening your mail client… (configure EmailJS to send directly)");
      } else {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_email: "shabareesh390@gmail.com",
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setStatus("success");
        setMessage("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-blue-600">build</span> something</>}
          subtitle="Have a role, a project, or an idea? I'd love to hear from you."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="premium-card p-8 md:p-10 bg-gray-50 flex-grow">
              <h3 className="font-sans text-2xl font-bold text-gray-900">Get in touch</h3>
              <p className="mt-3 text-sm text-gray-600">
                Replies within 24 hours · Available 9 AM – 11 PM IST
              </p>
              
              <div className="mt-8 space-y-6 text-[15px] font-medium text-gray-700">
                <a href="mailto:shabareesh390@gmail.com" className="flex items-center gap-4 transition-colors hover:text-blue-600 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  shabareesh390@gmail.com
                </a>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  Mangalore, Karnataka, India
                </div>
                <a href="https://www.linkedin.com/in/shabareesh-s-gowda-a78490381" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-blue-600 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  LinkedIn
                </a>
                <a href="https://github.com/shabareesh390" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-blue-600 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  github.com/shabareesh390
                </a>
              </div>

              <div className="mt-12 rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={submit} className="premium-card p-8 md:p-10 bg-white">
              <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">Send a message</h3>
              
              <div className="space-y-5">
                <Input label="Name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" />
                <Input label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@example.com" />
                <Input label="Subject (Optional)" name="subject" value={form.subject} onChange={onChange} placeholder="Job Opportunity" />
                
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder="Hi Shabareesh, I'd like to talk about..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="primary-btn w-full sm:w-auto px-8 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
                
                {message && (
                  <p className={`text-sm font-medium ${status === "error" ? "text-red-500" : "text-green-600"}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5 block">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}
