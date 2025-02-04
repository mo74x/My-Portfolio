import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Computermodel } from './Computermodel';
import { OrbitControls, Stage,PerspectiveCamera } from "@react-three/drei";
const Computer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="city">
                <Computermodel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-1,0,1,7]} zoom={0.8} />
            </Suspense>
        </Canvas>
    );
};
export default Computer;

