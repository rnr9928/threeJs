import { Box, OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useControls } from "leva"



export default function Mythree(){

        const refMesh = useRef()
        const refWireMesh = useRef()

        const {  xSize,
            ySize,
            zSize,
            xSegments,
            ySegments,
            zSegments,} = useControls({
                xSize: {value:1,min:0.1, max:5, step:0.01},
                ySize: {value:1,min:0.1, max:5, step:0.01},
                zSize: {value:1,min:0.1, max:5, step:0.01},
                xSegments: {value:1,min:1, max:10, step:1},
                ySegments: {value:1,min:1, max:10, step:1},
                zSegments: {value:1,min:1, max:10, step:1}
            })
            
        useEffect(()=>{
            refWireMesh.current.geometry = refMesh.current.geometry
        },[xSize,
            ySize,
            zSize,
            xSegments,
            ySegments,
            zSegments])

   
    return (
        <>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[2,1,3]} intensity={0.5}/>
        <OrbitControls/>

        <mesh ref={refMesh} >
            <boxGeometry args={
                [
                xSize,
                ySize,
                zSize,
                xSegments,
                ySegments,
                zSegments
            ]
                }/>
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