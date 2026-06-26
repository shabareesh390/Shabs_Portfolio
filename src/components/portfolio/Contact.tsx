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
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build</span> something</>}
          subtitle="Have a role, a project, or an idea? I'd love to hear from you."
        />

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="font-display text-xl font-bold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Replies within 24 hours · Available 9 AM – 11 PM IST
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <a href="mailto:shabareesh390@gmail.com" className="flex items-center gap-3 transition hover:text-cyan">
                <Mail className="h-5 w-5 text-cyan" /> shabareesh390@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan" /> Mangalore, Karnataka, India
              </div>
              <a href="https://www.linkedin.com/in/shabareesh-s-gowda-a78490381"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 transition hover:text-cyan">
                <Linkedin className="h-5 w-5 text-cyan" /> LinkedIn
              </a>
              <a href="https://github.com/shabareesh390"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 transition hover:text-cyan">
                <Github className="h-5 w-5 text-cyan" /> github.com/shabareesh390
              </a>
            </div>

            <div className="mt-8 glass rounded-2xl p-4 text-xs text-muted-foreground">
              <div className="font-semibold text-foreground">Quick fact</div>
              I respond fastest on email and LinkedIn. Recruiters welcome.
            </div>
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
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        required
        maxLength={200}
        className="mt-1 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-cyan focus:bg-white/[0.06]"
      />
    </div>
  );
}
