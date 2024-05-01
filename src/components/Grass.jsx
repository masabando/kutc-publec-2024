import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Grass({ position=[0, 0, 0], args=[100, 100, 32, 32] }) {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "img/grass/Grass001_1K-JPG_Color.jpg",
      "img/grass/Grass001_1K-JPG_Displacement.jpg",
      "img/grass/Grass001_1K-JPG_NormalDX.jpg",
      "img/grass/Grass001_1K-JPG_Roughness.jpg",
      "img/grass/Grass001_1K-JPG_AmbientOcclusion.jpg",
    ]
  );
  [colorMap, displacementMap, normalMap, roughnessMap, aoMap].forEach(
    (texture) => {
      texture.wrapS = texture.wrapT = 1000;
      texture.repeat.set(2, 2);
    }
  );
  return (
    <Plane
      position={position}
      args={args}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        displacementScale={0.1}
      />
    </Plane>
  );

}