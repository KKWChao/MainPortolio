import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function HomeBox({ ...props }) {
  const map = useTexture("/assets/mesh/anime_art_style_lava_world.jpg");
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });
  return (
    <group {...props} position={[0, 0, 5]} ref={sphereRef}>
      <mesh>
        <sphereGeometry args={[4, 24, 24]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export default HomeBox;
