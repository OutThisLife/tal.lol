import { Environment } from '@react-three/drei'
import type { Props as CanvasProps } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Mesh } from 'three'

const Scene = () => {
  const ref = useRef<Mesh>(null!)

  useFrame(() => {
    if (ref.current instanceof Mesh) {
      ref.current.rotation.x += 0.0005
      ref.current.rotation.z -= 0.0005
    }
  })

  return (
    <mesh {...{ ref }}>
      <octahedronGeometry args={[1, 15]} />
      <meshStandardMaterial
        color="#ff72ba"
        opacity={0.1}
        transparent
        wireframe
        onBeforeCompile={v => {
          v.vertexShader = v.vertexShader
            .replace(
              '#include <common>',
              `
      #include <common>
      varying vec3 vTransformedNormal;
      varying vec3 vPosition;
      `
            )
            .replace(
              '#include <beginnormal_vertex>',
              `
      #include <beginnormal_vertex>
      vPosition = position;
      vTransformedNormal = normalize(normalMatrix * objectNormal);
      `
            )

          v.fragmentShader = v.fragmentShader
            .replace(
              '#include <clipping_planes_pars_fragment>',
              `
      #include <clipping_planes_pars_fragment>
      
      uniform float bottomY;
      uniform vec3 color;

      varying vec3 vTransformedNormal;
      varying vec3 vPosition;
      `
            )
            .replace(
              '#include <dithering_fragment>',
              `
      #include <dithering_fragment>
      vec3 viewDirection = normalize(-vViewPosition);

      if (
        (bottomY > 0. && vPosition.y <= -bottomY) 
        || dot(vTransformedNormal, viewDirection) <= 0.0
      ) {
        discard;
      }

      if (color.r > 0. || color.g > 0. || color.b > 0.) {
        gl_FragColor.rgb = color;
      }
      `
            )
        }}
      />
    </mesh>
  )
}

export default function BG(props: Partial<CanvasProps>) {
  return (
    <Canvas camera={{ position: [0, 0, 0], zoom: 1e3 }} orthographic {...props}>
      <Environment preset="city" />

      <Suspense>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
