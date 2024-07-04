'use client'
import Spline from '@splinetool/react-spline';

export default function Spl({children}){
    return<>
     <Spline style={{backgroundColor:"white",maxHeight:"80vh",maxWidth:"200vh",}} 
    scene="https://prod.spline.design/j-vnFcVRm2ZX0VNw/scene.splinecode" />
    {children}
    </>
}