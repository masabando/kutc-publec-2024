import * as THREE from "three"
import { useRef, Suspense, useMemo } from "react"
import {
  useFrame,
  extend,
  useThree,
  useLoader
} from "@react-three/fiber"
import { Water } from "three-stdlib"

extend({ Water })


export default function Ocean({ position = [0, 0, 0], args=[100, 100] }) {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/img/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(...args), [])
  const config = useMemo(
    () => ({
      textureWidth: 256,
      textureHeight: 256,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x004e2f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    // eslint-disable-next-line
    [waterNormals]
  )
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  )
  return (
    <Suspense fallback={null}>
      <water ref={ref} args={[geom, config]} position={position} rotation-x={-Math.PI / 2} />
    </Suspense>
  )
}
