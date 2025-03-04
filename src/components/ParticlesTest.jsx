import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesTest = () => {
  const particlesInit = async (engine) => {
    console.log("Particles Init Called");
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0f172a",
        },
        particles: {
          number: {
            value: 80,
          },
          move: {
            enable: true,
            speed: 2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
        },
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticlesTest;
