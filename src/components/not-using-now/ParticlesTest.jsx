import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesTest = () => {
  const particlesInit = async (engine) => {
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
            value: 20,
          },
          shape: {
            type: "star",
          },
          size: {
            value: 1,
          },
        },
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticlesTest;
