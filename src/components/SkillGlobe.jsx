import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Preload  } from "@react-three/drei";
import SkillIcons from "./SkillIcons"; // We will create this next

const SkillGlobe = () => {

  const [sphereSize, setSphereSize] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth < 768){
        setSphereSize(2);
      } else {
        setSphereSize(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return ()=> window.removeEventListener("resize", handleResize);

  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // Small delay to ensure full load
  }, []);

  useEffect(() => {
    if (!window.WebGLRenderingContext) {
      alert("WebGL is not supported on your device. Please try another browser.");
    }
  }, []);  

  return (

    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white">Loading...</p>
        </div>
      )}

    <Canvas 
       style={{ opacity: isLoaded ? 1 : 0 }} 
       gl={{ powerPreference: "high-performance", preserveDrawingBuffer: true, antialias: true }}
      camera={{ position: [0, 0, sphereSize+2.5] }}
    >

      {/* Controls for rotating the scene */}
      <OrbitControls enableZoom={false} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* Preload ensures assets are loaded before rendering */}
      <Preload all />

      {/* 3D Sphere for the skill globe */}
      <Sphere args={[sphereSize, 32, 32]}>
        <meshStandardMaterial color="#60A5FA" wireframe />
      </Sphere>

      {/* Skill Icons */}
      <SkillIcons sphereSize={sphereSize} />
    </Canvas>
  </div>
  );
};

export default SkillGlobe;
