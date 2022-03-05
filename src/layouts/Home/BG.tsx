import { useAspect } from '@react-three/drei'
import type { Props as CanvasProps } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Mesh } from 'three'

const Scene = () => {
  const scale = useAspect(1920, 1600)
  const ref = useRef<Mesh>()

  useFrame(() => {
    if (ref.current instanceof Mesh) {
      ref.current.rotation.x += 0.0005
      ref.current.rotation.z -= 0.0005
    }
  })

  return (
    <mesh {...{ ref, scale }}>
      <sphereGeometry args={[0.5, 85, 1]} />
      <meshBasicMaterial color="#ff72ba" opacity={0.15} transparent wireframe />
    </mesh>
  )
}

export default function BG(props: Partial<CanvasProps>) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[2, 3]}
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
