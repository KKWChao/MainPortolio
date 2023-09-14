import StarsAnimated from "./StarsAnimated";

function Lighting() {
  return (
    <>
      <directionalLight
        position={[0, 0, 3]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <StarsAnimated />
    </>
  );
}

export default Lighting;
