import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader";


const Stars = ({top}) => {
  
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(40000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 4;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[2, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled >
        <PointMaterial
          transparent
          color='#FFFFFF'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas =  ({top}) =>  {
    return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars top={top} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
  
};

export default StarsCanvas;