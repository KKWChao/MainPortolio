import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function ContactScene() {
  const { viewport } = useThree();
  const moonRef = useRef();
  const [moonTexture] = useTexture(["./assets/mesh/earthMoonMesh/2k_moon.jpg"]);

  useFrame(({ clock }) => {
    moonRef.current.rotation.x += clock.getElapsedTime() * 0.0000005;
  });

  return (
    <group position-y={-viewport.height * 4}>
      <mesh
        position={[0, -4.3, 4]}
        ref={moonRef}
        rotate={[Math.PI / 2, Math.PI / 2, 0]}
      >
        <sphereGeometry args={[4, 128, 128]} />
        <meshPhongMaterial map={moonTexture} />
      </mesh>
    </group>
  );
}

export default ContactScene;
