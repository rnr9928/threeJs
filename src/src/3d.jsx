import { Box, OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useControls } from "leva"



export default function Mythree(){

        const refMesh = useRef()
        const refWireMesh = useRef()

        const { radius,widthSegments,heightSegments,phiStart,phiLength } = useControls({
               radius:{ value: 1, min:1, max:5,step:0.01,},
               widthSegments:{value:32, min:3, max:256, step:1},
               heightSegments:{value:32, min:2, max:256, step:1},
               phiStart:{value:0, min:0, max:360, step:0.1},
               phiLength:{value:360, min:0, max:360, step:0.1},

            })
            
        useEffect(()=>{
            refWireMesh.current.geometry = refMesh.current.geometry
        },[radius,widthSegments,heightSegments,phiLength,phiStart])

   
    return (
        <>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[2,1,3]} intensity={0.5}/>
        <OrbitControls/>

        <mesh ref={refMesh} >
            <sphereGeometry args={[radius, widthSegments,heightSegments,phiStart * Math.PI/180,
            phiLength* Math.PI/180]}/>
            <meshStandardMaterial color='#e67e22'/>
        </mesh>
        <mesh ref={refWireMesh} >
            <boxGeometry/>
            <meshStandardMaterial emissive="yellow" wireframe={true}/>
        </mesh>

        {/* <Box position={[1.2,0,0]}>
        <meshStandardMaterial color='#1292c9'/>
        </Box>

        <Mybox position={[-1.2,0,0]}>
        <meshStandardMaterial color='#971bc5'/>
        </Mybox> */}
        </>
    )
}