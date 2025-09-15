import { useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../Layout/Navbar';
import FooterContent from './Footer';
import Herovid from './Herovid';
import Features from './Features';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, useGLTF } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

// Three.js GLTF Model Component
function SceneModel() {
  const { scene } = useGLTF('/ico_sphere/scene.gltf');
  return (
    <Center scale={2.5}>
      <primitive object={scene} />
    </Center>
  );
}

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Floating animation for background elements
    gsap.to(".floating-bg", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black font-geist">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <Navbar />
      {/* Main Content - Restored Original Layout */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 sm:px-6 pt-28 md:pt-20 pb-20 flex flex-col md:flex-row items-center justify-between min-h-screen"
      >
        {/* Text Content - Left Column */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 z-10 mb-12 md:mb-0 md:pr-8 lg:pr-12"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 font-geist"
          >
            <span className="text-white">Xorion is a new era of</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">blockchain</span>{' '}
            <span className="text-white">moving Web3 forward</span>
          </motion.h1>
          
          <motion.button 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://explorer.xorion.network/explorer', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>Build Now</span>
            <motion.span 
              className="text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
        {/* 3D Canvas - Right Column */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] relative"
        >
          <div className="w-full h-full rounded-3xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10">
            <Canvas
              camera={{ position: [0, 0, 12], fov: 50 }}
              className="w-full h-full"
            >
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 20]} intensity={2.5} color="#3b82f6" />
              <directionalLight position={[-10, -10, 10]} intensity={1.5} color="#8b5cf6" />
              <pointLight position={[0, 10, 10]} intensity={1.2} color="#e0e0ff" />
              <Suspense fallback={null}>
                <SceneModel />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={15} />
            </Canvas>
          </div>
          {/* Glow effect around 3D model */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10"></div>
        </motion.div>
      </motion.main>
      <Herovid />
      <Features></Features>
      <FooterContent></FooterContent>
    </div>
  );
};

export default Home;



