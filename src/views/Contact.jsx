import React, { useState } from "react";
import { heliumAttrs } from "../helium-animation/utils";
import { useLocalTime } from "../hooks/useLocalTime";
import SocialLinks from "../components/SocialLinks";
import Logo from "../components/Logo";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const localTime = useLocalTime("Asia/Kolkata");

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio note from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:aakash.sh858791@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <header className="section__header">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            Contact
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>Start a conversation</h2>
          <p className="section__lead" {...heliumAttrs("bottomFadeIn")}>
            Open to product engineering roles, freelance builds, and
            collaboration on motion-heavy web experiences.
          </p>
        </header>

        <div className="contact__grid">
          <form
            className="contact__form"
            onSubmit={onSubmit}
            {...heliumAttrs("slideInLeft")}
          >
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="What are you building?"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Send message
            </button>
          </form>

          <aside className="contact__aside" {...heliumAttrs("slideInRight")}>
            <div>
              <h3>Email</h3>
              <a href="mailto:aakash.sh858791@gmail.com">
                aakash.sh858791@gmail.com
              </a>
            </div>
            <div>
              <h3>Based in</h3>
              <p>Delhi, India</p>
            </div>
            <div>
              <h3>Local time</h3>
              <p className="contact__clock">{localTime || "—"}</p>
            </div>
            <div>
              <h3>Social</h3>
              <SocialLinks />
            </div>
          </aside>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span className="site-footer__brand">
            <Logo size={28} />
            © {new Date().getFullYear()} Akash Sharma
          </span>
          <span>Delhi, India</span>
          <span>Built with Next.js · React · motion craft</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
