import { useRef } from 'react';
import { FaRocket, FaCode, FaShieldAlt, FaNetworkWired, FaArrowRight } from 'react-icons/fa';
import Navbar from '../Layout/Navbar';
import FooterContent from '../Home/Footer';

const UseCases = () => {
  const containerRef = useRef(null);
  // Remove useScroll and useTransform
  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Remove useEffect for GSAP
  // useEffect(() => { ... }, []);

  // Only keep deploymentSteps and related code
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
      {/* Animated Background Elements (keep static) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
            USE CASES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
            Discover the infinite possibilities of <span className="text-blue-400 font-semibold">XorionChain 4.0</span> - from DeFi innovation to enterprise solutions.
          </p>
        </div>
      </div>

      {/* Deploy Your DApp Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              DEPLOY YOUR DAPP
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Build the future on XorionChain 4.0 with our developer tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((step, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <FaRocket className="w-5 h-5" />
              Start Building Now
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default UseCases;