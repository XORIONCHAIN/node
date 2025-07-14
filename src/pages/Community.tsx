import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Layout/Navbar';
import FooterContent from '../components/Home/Footer';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaReddit, FaMedium } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const forumPosts = [
  { title: 'How to stake XOR?', author: 'Alice', replies: 42 },
  { title: 'Validator setup guide', author: 'Bob', replies: 30 },
  { title: 'DAO voting explained', author: 'Carol', replies: 27 },
];

const events = [
  { date: '2024-06-10', title: 'Community AMA', desc: 'Live Q&A with the team' },
  { date: '2024-06-20', title: 'Hackathon', desc: 'Build on XORION' },
  { date: '2024-07-01', title: 'Governance Vote', desc: 'Shape the future' },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/xorionchain?s=21",
    icon: FaTwitter,
    description: "Official X (Twitter)"
  },
  {
    label: "Discord",
    href: "https://discord.gg/ucc278yJZt",
    icon: FaDiscord,
    description: "Community chat"
  },
  {
    label: "Telegram",
    href: "https://t.me/Xorion_Chain",
    icon: FaTelegram,
    description: "Community chat"
  },
  {
    label: "GitHub",
    href: "https://github.com/settings/admin",
    icon: FaGithub,
    description: "Source code and issues"
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/Xorion_Chain/",
    icon: FaReddit,
    description: "Community forum"
  },
  {
    label: "Medium",
    href: "https://medium.com/@xorionchain",
    icon: FaMedium,
    description: "Blog & Announcements"
  }
];

// Use About page color themes for social cards
const socialGradients = [
  'bg-gradient-to-br from-purple-500 to-pink-500', // X
  'bg-gradient-to-br from-blue-500 to-cyan-500', // Discord
  'bg-gradient-to-br from-yellow-500 to-orange-500', // Telegram
  'bg-gradient-to-br from-green-500 to-emerald-500', // GitHub
  'bg-gradient-to-br from-red-500 to-pink-500', // Reddit
  'bg-gradient-to-br from-indigo-500 to-purple-500', // Medium
];

const Community: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to('.floating-bg', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black font-geist min-h-screen overflow-x-hidden">
      {/* Animated Floating Gradient Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-bg absolute top-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Headline & Stats */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">XORION</span> Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Decentralized. Secure. People-driven. <span className="text-cyan-400 font-semibold">Join the movement.</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">12,345</div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">98</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400">1.2M</div>
                <div className="text-gray-400 text-sm">Forum Posts</div>
              </div>
            </div>
          </div>
          {/* Parallax/Glassmorphic Card */}
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-md bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="text-2xl font-bold text-white mb-2">Welcome!</div>
              <div className="text-gray-300">Connect, build, and grow with pioneers in the XORION ecosystem.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Socials Bento Grid */}
      <section className="relative py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12">Connect with Us</h2>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[180px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between rounded-3xl p-6 shadow-lg transition-all duration-200 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[160px] text-white relative overflow-hidden ${socialGradients[i % socialGradients.length]} ${
                i === 0 ? 'md:col-span-2 md:row-span-2' :
                i === 1 ? 'md:col-span-2' :
                i === 2 ? 'md:row-span-2' :
                ''
              }`}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl pointer-events-none z-0" />
              <div className="flex items-center gap-4 mb-4 relative">
                <span className="text-3xl text-white group-hover:scale-110 transition-transform">
                  {React.createElement(link.icon)}
                </span>
                <span className="text-xl font-bold text-white">{link.label}</span>
              </div>
              <div className="text-white/90 text-sm flex-1 relative">{link.description}</div>
            </motion.a>
          ))}
        </motion.div>
      </section>
      {/* Forum Highlights */}
      <section className="relative py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">Forum Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forumPosts.map((post) => (
            <div
              key={post.title}
              className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="text-lg font-bold text-white mb-2">{post.title}</div>
              <div className="text-gray-400 mb-1">By {post.author}</div>
              <div className="text-purple-400 font-semibold">{post.replies} replies</div>
            </div>
          ))}
        </div>
      </section>
      {/* Events Timeline */}
      <section className="relative py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">Upcoming Events</h2>
        <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
          {events.map((event, i) => (
            <div
              key={event.title}
              className="relative flex items-center w-full"
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg"></div>
              <div className={`flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="text-lg font-bold text-white">{event.title}</div>
                <div className="text-gray-400">{event.desc}</div>
                <div className="text-cyan-400 text-sm mt-1">{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterContent />
    </div>
  );
};

export default Community; 