import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactChannels = [
  {
    label: 'Email',
    value: 'manmadhansiva2005@gmail.com',
    href: 'mailto:manmadhansiva2005@gmail.com',
    icon: Mail
  },
  {
    label: 'Phone',
    value: '+91 93632 12045',
    href: 'tel:+919363212045',
    icon: Phone
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: 'https://www.linkedin.com/in/manmathan-s-2282ab2a0/',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com/SMANMATHAN',
    icon: Github
  }
];

const Contact: React.FC = () => {
  const primaryChannel = contactChannels[0];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const nextErrors: Partial<typeof formData> = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please add a subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage('');

    if (!validateForm()) {
      return;
    }

    const mailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:manmadhansiva2005@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(mailBody)}`;

    setSubmitMessage('Thanks! Your email draft is ready. Send it to complete your message.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-amber-50 via-slate-50 to-cyan-50 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900"
    >
      <style>{`
        .contact-card {
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06);
        }

        .contact-link {
          animation: fade-in-up 0.7s ease-out both;
        }

        .contact-link:hover .contact-arrow {
          transform: translateX(4px);
        }
      `}</style>

      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 w-72 h-72 rounded-full bg-emerald-200/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-gray-900 dark:text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
            Let's Build Something Great
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I am open to internships, collaborations, and freelance projects. Share your idea and I will get back quickly.
          </p>
        </div>

        <div className="relative contact-card rounded-3xl border border-white/70 dark:border-gray-800 bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider uppercase text-amber-300">
                Available for work
              </div>

              <h3 className="mt-4 text-2xl font-bold leading-tight">
                Need a developer for your next product?
              </h3>

              <p className="mt-3 text-slate-300 leading-relaxed">
                I focus on clean interfaces, reliable backend logic, and fast delivery. Email is the best way to start.
              </p>

              <a
                href={primaryChannel.href}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:from-amber-300 hover:to-orange-400"
              >
                Send an email now
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-8 flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-300" />
                <span>Based in Tamil Nadu, India</span>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactChannels.map(({ label, value, href, icon: Icon }, index) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="contact-link group w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-slate-200/80 dark:border-gray-700 bg-white dark:bg-gray-900 px-5 py-5 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-cyan-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-800 dark:text-cyan-300 group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          {label}
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white break-words">
                          {value}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="contact-arrow w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-transform" />
                  </a>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-6 rounded-2xl border border-slate-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900 p-5"
                noValidate
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Quick Contact Form</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Fill this form and your email app will open with a pre-filled draft.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="Project collaboration"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="Tell me about your project, timeline, and goals."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Prepare Message
                </button>

                {submitMessage && (
                  <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">{submitMessage}</p>
                )}
              </form>

              <div className="mt-6 rounded-2xl border border-amber-200/60 dark:border-amber-700/30 bg-gradient-to-r from-amber-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 px-5 py-4 text-sm text-slate-700 dark:text-slate-300">
                Typical response time: within one business day. Include your timeline and project scope for a faster reply.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;