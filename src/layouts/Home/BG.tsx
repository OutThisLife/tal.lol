import type { Props as CanvasProps } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Mesh } from 'three'

const Scene = () => {
  const ref = useRef<Mesh>()

  useFrame(() => {
    if (ref.current instanceof Mesh) {
      ref.current.rotation.x += 0.001
      ref.current.rotation.z -= 0.001
    }
  })

  return (
    <>
      <mesh {...{ ref }}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#ff72ba"
          opacity={0.15}
          transparent
          wireframe
        />
      </mesh>
    </>
  )
}

export default function BG(props: Partial<CanvasProps>) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[2, 2]}
      flat
      mode="concurrent"
      {...props}>
      <ambientLight />
      <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
