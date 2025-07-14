import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaExchangeAlt, 
  FaChartLine, 
  FaBuilding, 
  FaUserSecret, 
  FaFileContract,
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaArrowRight
} from 'react-icons/fa';
import { FaBridge } from 'react-icons/fa6';
import Navbar from '../Layout/Navbar';
import FooterContent from '../Home/Footer';
const Ecosystem = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    // Subtle floating animation for background elements (make very minimal)
    const floatingElements = document.querySelectorAll('.floating-bg');
    floatingElements.forEach((element) => {
      element.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-8px)' },
        { transform: 'translateY(0px)' }
      ], {
        duration: 6000,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    });
    // Remove GSAP parallax for cards
    return () => {};
  }, []);

  const defiApps = [
    {
      icon: <FaExchangeAlt className="w-8 h-8" />,
      title: "DEX Aggregator",
      description: "Multi-chain liquidity aggregation with quantum-resistant security",
      features: ["Cross-chain swaps", "MEV protection", "Zero slippage"],
      color: "from-blue-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: <FaBridge className="w-8 h-8" />,
      title: "Cross-Chain Bridge",
      description: "Secure asset bridging with circuit breakers and fraud detection",
      features: ["Circuit breakers", "Fraud detection", "Instant finality"],
      color: "from-green-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Oracle Network",
      description: "TWAP price feeds with outlier detection and manipulation resistance",
      features: ["TWAP pricing", "Outlier detection", "Manipulation proof"],
      color: "from-yellow-500 to-orange-500",
      delay: 0.3
    }
  ];

  const enterpriseUseCases = [
    {
      icon: <FaUserSecret className="w-8 h-8" />,
      title: "Private Transactions",
      description: "Zero-knowledge proofs with selective disclosure for enterprise privacy",
      features: ["Selective disclosure", "Zero-knowledge", "Compliance ready"],
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <FaFileContract className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Built-in compliance mechanisms for institutional adoption",
      features: ["KYC/AML ready", "Audit trails", "Regulatory reporting"],
      color: "from-red-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Supply Chain",
      description: "End-to-end traceability with immutable records",
      features: ["Product tracking", "Authenticity proof", "Global network"],
      color: "from-indigo-500 to-purple-500",
      delay: 0.3
    }
  ];

  const dappsShowcase = [
    {
      name: "XorionSwap",
      description: "Next-gen DEX with quantum-proof security",
      status: "Live",
      tvl: "$2.3B",
      icon: <FaExchangeAlt className="w-10 h-10 text-blue-400" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "QuantumVault",
      description: "Institutional-grade DeFi yield platform",
      status: "Beta",
      tvl: "$890M",
      icon: <FaLock className="w-10 h-10 text-cyan-400" />,
      color: "from-green-500 to-cyan-500"
    },
    {
      name: "ChainLink Pro",
      description: "Enterprise cross-chain infrastructure",
      status: "Coming Soon",
      tvl: "TBA",
      icon: <FaNetworkWired className="w-10 h-10 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "ZeroID",
      description: "Privacy-first identity verification",
      status: "Live",
      tvl: "$150M",
      icon: <FaUserSecret className="w-10 h-10 text-pink-400" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const deploymentSteps = [
    {
      step: "01",
      title: "Setup Development Environment",
      description: "Install XorionChain SDK and configure your workspace",
      icon: <FaCode className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Smart Contract Development",
      description: "Build quantum-resistant smart contracts using our framework",
      icon: <FaShieldAlt className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Testing & Validation",
      description: "Test on our quantum-proof testnet environment",
      icon: <FaNetworkWired className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deploy to Mainnet",
      description: "Launch your dApp on XorionChain 4.0 mainnet",
      icon: <FaRocket className="w-6 h-6" />
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-black font-geist overflow-hidden">
      <Navbar />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ y }}
        className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
              USE CASES &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ECOSYSTEM
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
              Discover the infinite possibilities of <span className="text-blue-400 font-semibold">XorionChain 4.0</span> - 
              from DeFi innovation to enterprise solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* DeFi Applications Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DeFi APPLICATIONS
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Revolutionary DeFi protocols built on quantum-proof infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defiApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="parallax-card relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${app.color}`}>
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Use Cases */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              ENTERPRISE SOLUTIONS
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Enterprise-grade blockchain solutions for institutional adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="parallax-card relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.color}`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* DApps Showcase */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DAPPS SHOWCASE
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Cutting-edge applications built on XorionChain 4.0
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dappsShowcase.map((dapp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 5,
                  z: 10
                }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120
                }}
                className="parallax-card relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dapp.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">{dapp.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{dapp.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{dapp.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      dapp.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      dapp.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {dapp.status}
                    </span>
                    <span className="text-gray-400 text-sm">TVL: {dapp.tvl}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Deploy Your DApp Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DEPLOY YOUR DAPP
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Build the future on XorionChain 4.0 with our developer tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6
                }}
                className="parallax-card relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {step.step}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <FaRocket className="w-5 h-5" />
              Start Building Now
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default Ecosystem;