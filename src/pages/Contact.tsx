
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone, Clock, Send, MessageSquare, Calendar, Users, CheckCircle, AlertCircle, Loader, Linkedin, Instagram } from "lucide-react";

// Form validation schema
const schema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email"),
  subject: yup.string().required("Subject is required").min(5, "Subject must be at least 5 characters"),
  category: yup.string().required("Please select a category"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Coordinates",
      info: "TIIPS, Gr. Noida, India",
      subInfo: "Upper Floor Library, Block A, Level 1",
      color: "from-cyan-500 to-purple-600",
      link: "https://www.google.com/maps/place/Trinity+Institute+Of+Innovations,+Knowledge+Park+III,+Greater+Noida,+Uttar+Pradesh+201310/@28.4698116,77.4886915,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390cea0b6cb53047:0xfdb7593ada1b51e2!8m2!3d28.4696208!4d77.4911688!16s%2Fg%2F11n6sq2ym4?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Data Stream",
      info: "coderangerss@gmail.com",
      subInfo: "Response time: < 12 hours (unless we’re in a hackathon)",
      color: "from-purple-500 to-pink-600",
      link: "coderangerss@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Signal",
      info: "+91 XXXXXXXXX",
      subInfo: "Available 9 AM - 9 PM IST",
      color: "from-green-500 to-cyan-600",
      link: "tel:+919876543210",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      info: "24/7 for Rangers | 9 AM - 9 PM for Muggles",
      subInfo: "Visitor hours: 9 AM - 9 PM",
      color: "from-orange-500 to-red-500",
      link: null,
    },
  ];

  const quickActions = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "Linkedin",
      description: "Follow Our Professional Community",
      action: "LET’S CONNECT",
      link: "https://www.linkedin.com/company/code-rangerss/",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Community",
      description: "Whatsapp Community To Connect",
      action: "JOIN NOW",
      link: "https://chat.whatsapp.com/EhJtXopUxnlEg9NS5dq9P6",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "Follow Us For Latest Updates",
      action: "FOLLOW US",
      link: "https://www.instagram.com/geekroom.tiips/",
    },
  ];

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      // For now, we'll simulate the email sending
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      // In a real implementation, you would use:
      await emailjs.send(
        "service_9ykevma", // <-- your Service ID
        "template_2pj4k4m", // <-- your Template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          category: data.category,
          message: data.message,
          to_email: "coderangerss@gmail.com", // or your receiving email
        },
        "ZwoRz4C8Qm1DjvQQl" // <-- your Public Key
      );

      setSubmitStatus("success");
      setSubmitMessage("Message transmitted successfully! We'll respond within 24 hours.");
      reset();

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Transmission failed. Please try again or contact us directly.");

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Sync Up </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Join the Code Rangers network. Patch into our digital stronghold, sync with innovators, and deploy your ideas into the future. Every epic mission starts with a single ping.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm text-center cursor-pointer" onClick={() => item.link && window.open(item.link, "_blank")}>
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                <h3 className="font-semibold text-cyan-300 mb-2 font-mono">{item.title}</h3>
                <p className="text-white font-medium mb-1">{item.info}</p>
                <p className="text-gray-400 text-sm font-mono">{item.subInfo}</p>
                {item.link && <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-6 text-cyan-300 font-mono">Transmit Message</h2>

                {/* Status Message */}
                {submitMessage && (
                  <div className={`mb-6 p-4 rounded-lg border flex items-center ${submitStatus === "success" ? "bg-green-500/10 border-green-500/30 text-green-300" : "bg-red-500/10 border-red-500/30 text-red-300"}`}>
                    {submitStatus === "success" ? <CheckCircle className="w-5 h-5 mr-2" /> : <AlertCircle className="w-5 h-5 mr-2" />}
                    <span className="font-mono text-sm">{submitMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Identity *</label>
                      <input {...register("name")} type="text" className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-200 font-mono ${errors.name ? "border-red-500/50" : "border-cyan-500/30 focus:border-cyan-500"}`} placeholder="Enter your name" />
                      {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Email Protocol *</label>
                      <input {...register("email")} type="email" className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-200 font-mono ${errors.email ? "border-red-500/50" : "border-cyan-500/30 focus:border-cyan-500"}`} placeholder="your.email@domain.com" />
                      {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Subject Line *</label>
                    <input {...register("subject")} type="text" className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-200 font-mono ${errors.subject ? "border-red-500/50" : "border-cyan-500/30 focus:border-cyan-500"}`} placeholder="What's this about?" />
                    {errors.subject && <p className="text-red-400 text-xs mt-1 font-mono">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Message Type *</label>
                    <select {...register("category")} className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-200 font-mono ${errors.category ? "border-red-500/50" : "border-cyan-500/30 focus:border-cyan-500"}`}>
                      <option value="">Select category</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="event">Event Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.category && <p className="text-red-400 text-xs mt-1 font-mono">{errors.category.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Data Payload *</label>
                    <textarea {...register("message")} rows={6} className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-200 font-mono resize-none ${errors.message ? "border-red-500/50" : "border-cyan-500/30 focus:border-cyan-500"}`} placeholder="Transmit your message..." />
                    {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message.message}</p>}
                  </div>

                  <button type="submit" disabled={submitStatus === "loading"} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 font-mono flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitStatus === "loading" ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        EXECUTE TRANSMISSION
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Actions & Map */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-mono">Quick Actions</h2>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="group bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer" onClick={() => window.open(action.link, "_blank")}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{action.icon}</div>
                          <div>
                            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{action.title}</h3>
                            <p className="text-gray-400 text-sm">{action.description}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg font-mono text-sm hover:bg-cyan-500/30 transition-colors duration-200">{action.action}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 font-mono">Location Matrix</h3>
                <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center border border-cyan-500/20 cursor-pointer hover:border-cyan-500/40 transition-colors duration-300" onClick={() => window.open("https://maps.app.goo.gl/dGWHk555QKUHTEc9A", "_blank")}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.591797924487!2d77.48859317549487!3d28.469621475754188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebadf7f5b689%3A0x6bb8c323776f44c2!2sTrinity%20Institute%20of%20Innovations%20in%20Professional%20Studies!5e1!3m2!1sen!2sin!4v1755021788273!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem', minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Trinity Campus Map"
                  ></iframe>
                </div>
                <div className="mt-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <p className="text-cyan-300 text-sm font-mono">
                    <strong>Navigation Tip:</strong> Enter through the main campus gate, head to Block A, and take the elevator to Level 1. Look for the Library!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">FREQUENTLY ASKED QUERIES</span>
          </h2>

          <div className="space-y-6">
            {[
              {
    question: "What is Code Rangers?",
    answer: "Code Rangers is the official tech club of TIIPS, bringing together students passionate about coding, technology and innovation. We organize hackathons, workshops, coding challenges and community events to help members learn, collaborate and grow.",
  },
  {
    question: "What makes Code Rangers unique?",
    answer: "Unlike traditional clubs, Code Rangers blends hands-on project building, real-world problem solving and industry exposure. We focus on peer-to-peer learning, networking with professionals and creating opportunities for members to showcase their skills.",
  },
  {
    question: "How can I join Code Rangers?",
    answer: "Fill out our registration form, attend an onboarding session and you’re in! We welcome members from all skill levels — whether you’re a beginner exploring coding or a pro building AI systems.",
  },
  {
    question: "When does Code Rangers meet?",
    answer: "We host weekly meetups, project sprints, and occasional hackathons. All event updates are shared in our WhatsApp group and across our social media channels",
  },
  {
    question: "Do I need prior coding experience?",
    answer: "Not at all! We encourage absolute beginners to join. Our workshops and mentorship programs help you learn at your own pace.",
  },
  
  {
    question: "How can I become a community partner of Code Rangers?",
    answer: "We collaborate with student clubs, NGOs and tech communities. Mail us with details about your mission, and our team will connect with you to explore potential collaboration.",
  },
  {
    question: "How can I get sponsorship from Code Rangers?",
    answer: "We sponsor select student-led tech initiatives and events. Mail us your project details, goals, and sponsorship requirements, and our core team will review your request.",
  },
  {
    question: "How fast will I get a response?",
    answer: "We typically respond to emails within 24 hours. For urgent queries, reach out to us on WhatsApp or our socials for quicker assistance.",
  },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl p-6 border border-cyan-500/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2 font-mono">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
