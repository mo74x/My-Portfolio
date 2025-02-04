import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Sphare= () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#B68250"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default Sphare;