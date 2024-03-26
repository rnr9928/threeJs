import { useFrame } from "@react-three/fiber"
import { useRef } from "react"



export default function Mythree(){
    const refMesh = useRef()
    useFrame((state,delta) => {
        refMesh.current.rotation.y += delta
    })
    return (
        <>
        <directionalLight position={[1,1,1]}/>

        <mesh ref={refMesh} rotation-y={45*Math.PI/180}>
            <boxGeometry/>
            <meshStandardMaterial color='#e67e22'/>
        </mesh>
        </>
    )
}