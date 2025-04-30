import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {  EdgesGeometry,  IcosahedronGeometry, DodecahedronGeometry } from 'three';
import {  OrbitControls } from '@react-three/drei';


// Composant pour créer un polyèdre en fil de fer
const WireframePolyhedron = ({ position, rotation, scale, geometry, color = '#535555', lineWidth = 7 }) => {
  const meshRef = useRef();
  
  // Animation de rotation lente
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  // Création des arêtes pour le rendu en fil de fer
  const edges = useMemo(() => {
    return new EdgesGeometry(geometry);
  }, [geometry]);

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={color} linewidth={lineWidth} />
      </lineSegments>
    </mesh>
  );
};

// Composant principal pour l'arrière-plan géométrique
const GeometricBackground = () => {
  // Création de différentes géométries pour les polyèdres
 
  const icosaGeometry = useMemo(() => new IcosahedronGeometry(1, 0), []);
  const dodecaGeometry = useMemo(() => new DodecahedronGeometry(1, 0), []);

  return (
    <div className="geometric-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        
        {/* Plusieurs polyèdres à différentes positions */}
        
        <WireframePolyhedron 
          position={[-6, -2, -3]} 
          rotation={[0.5, 0.5, 0]} 
          scale={[1.5, 1.5, 1.5]} 
          geometry={icosaGeometry} 
          lineWidth={5}
        />
        
        <WireframePolyhedron 
          position={[5, 3, 2]} 
          rotation={[0.2, 0.3, 0.1]} 
          scale={[4, 4, 4]} 
          geometry={dodecaGeometry} 
          lineWidth={4}
        />
        
        <WireframePolyhedron 
          position={[-3, -4, -8]} 
          rotation={[0.4, 0.2, 0.1]} 
          scale={[2, 2, 2]} 
          geometry={icosaGeometry} 
          lineWidth={3}
        />
        
        {/* Contrôles désactivés pour l'utilisateur mais permettant une animation automatique */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default GeometricBackground;