import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaNewspaper, 
  FaShieldAlt, 
  FaCode, 
  FaFlask, 
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaSearch,
  FaBookmark,
  FaEye,
  FaClock,
  FaTag
} from 'react-icons/fa';
import { FaRocket } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import Navbar from '../Layout/Navbar';
import FooterContent from '../Home/Footer';

const BlogNewsroom = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    // Subtle floating animation for background elements
    const floatingElements = document.querySelectorAll('.floating-bg');
    floatingElements.forEach((element, index) => {
      element.animate([
        { transform: 'translateY(0px)' },
        { transform: `translateY(${-10 - (index * 2)}px)` },
        { transform: 'translateY(0px)' }
      ], {
        duration: 4000 + (index * 500),
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', icon: <FaNewspaper className="w-4 h-4" /> },
    { id: 'network', name: 'Network Updates', icon: <FaShieldAlt className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <FaShieldAlt className="w-4 h-4" /> },
    { id: 'developer', name: 'Developer', icon: <FaCode className="w-4 h-4" /> },
    { id: 'research', name: 'Research', icon: <FaFlask className="w-4 h-4" /> }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "XorionChain 4.0 Mainnet Launch: The Quantum-Proof Future is Here",
      excerpt: "After years of development, XorionChain 4.0 mainnet goes live with unprecedented quantum resistance and 100K+ TPS capability.",
      category: "network",
      author: "Dr. Sarah Chen",
      date: "2025-07-10",
      readTime: "8 min read",
      icon: <FaRocket className="w-10 h-10 text-blue-400" />,
      featured: true,
      views: "12.5K",
      tags: ["mainnet", "quantum-proof", "launch"]
    },
    {
      id: 2,
      title: "Post-Quantum Cryptography: Our Implementation Deep Dive",
      excerpt: "A comprehensive look at how XorionChain implements lattice-based cryptography to resist quantum computer attacks.",
      category: "research",
      author: "Prof. Michael Zhang",
      date: "2025-07-08",
      readTime: "12 min read",
      icon: <FaFlask className="w-10 h-10 text-purple-400" />,
      featured: true,
      views: "8.2K",
      tags: ["cryptography", "quantum-resistance", "research"]
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Security Advisory: Upgraded Multi-Signature Wallets",
      excerpt: "Important security update regarding multi-signature wallet implementations on XorionChain.",
      category: "security",
      author: "Security Team",
      date: "2025-07-12",
      readTime: "5 min read",
      icon: <FaShieldAlt className="w-8 h-8 text-red-400" />,
      views: "15.3K",
      tags: ["security", "wallets", "advisory"]
    },
    {
      id: 4,
      title: "Developer Spotlight: Building DeFi on XorionChain",
      excerpt: "Meet the team behind XorionSwap and learn how they built the first quantum-resistant DEX.",
      category: "developer",
      author: "Dev Relations",
      date: "2025-07-11",
      readTime: "10 min read",
      icon: <FaCode className="w-8 h-8 text-green-400" />,
      views: "6.8K",
      tags: ["defi", "developer", "spotlight"]
    },
    {
      id: 5,
      title: "Zero-Knowledge Proofs: Privacy by Design",
      excerpt: "Exploring how ZK-SNARKs enable private transactions while maintaining network transparency.",
      category: "research",
      author: "Dr. Lisa Wang",
      date: "2025-07-09",
      readTime: "15 min read",
      icon: <FaSearch className="w-8 h-8 text-purple-400" />,
      views: "9.1K",
      tags: ["zk-proofs", "privacy", "research"]
    },
    {
      id: 6,
      title: "Network Upgrade 4.1: Enhanced Cross-Chain Bridges",
      excerpt: "Upcoming network upgrade introduces improved cross-chain functionality and reduced latency.",
      category: "network",
      author: "Core Team",
      date: "2025-07-07",
      readTime: "7 min read",
      icon: <FaNetworkWired className="w-8 h-8 text-blue-400" />,
      views: "11.2K",
      tags: ["upgrade", "cross-chain", "bridges"]
    },
    {
      id: 7,
      title: "Smart Contract Security Best Practices",
      excerpt: "Essential security practices for developers building on XorionChain's quantum-resistant infrastructure.",
      category: "developer",
      author: "Security Team",
      date: "2025-07-05",
      readTime: "12 min read",
      icon: <FaBookmark className="w-8 h-8 text-green-400" />,
      views: "7.5K",
      tags: ["smart-contracts", "security", "best-practices"]
    },
    {
      id: 8,
      title: "Consensus Mechanism: Proof of Quantum Stake",
      excerpt: "Deep dive into XorionChain's novel consensus mechanism that combines PoS with quantum-resistant features.",
      category: "research",
      author: "Dr. Alex Rivera",
      date: "2025-07-03",
      readTime: "18 min read",
      icon: <FaTag className="w-8 h-8 text-purple-400" />,
      views: "13.7K",
      tags: ["consensus", "pos", "quantum"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={containerRef} className="relative bg-black font-geist overflow-hidden">
      <Navbar />
      {/* Subtle Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/3 right-1/3 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ y }}
        className="relative pt-20 md:pt-32 pb-8 md:pb-16 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              BLOG &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                NEWSROOM
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest developments in quantum-resistant blockchain technology, 
              security advisories, and cutting-edge research from the XorionChain team.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Posts */}
      <div className="relative py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            Featured Articles
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl md:text-5xl">{post.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === 'network' ? 'bg-blue-500/20 text-blue-400' :
                          post.category === 'security' ? 'bg-red-500/20 text-red-400' :
                          post.category === 'developer' ? 'bg-green-500/20 text-green-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {post.category.toUpperCase()}
                        </span>
                        <span className="text-yellow-400 text-xs">★ FEATURED</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaUser className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FaEye className="w-3 h-3" />
                      {post.views}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="relative py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full"></div>
            Recent Posts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{post.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'network' ? 'bg-blue-500/20 text-blue-400' :
                      post.category === 'security' ? 'bg-red-500/20 text-red-400' :
                      post.category === 'developer' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {post.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaUser className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{post.views}</span>
                      <FaArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FaSearch className="text-6xl mb-4 text-blue-400" />
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on quantum-resistant blockchain technology, 
              security advisories, and research breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default BlogNewsroom;