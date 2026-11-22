import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ThreeEnergyCore Component
 * Interactive 3D Clean Energy Neural Core for Chatbot
 * Reacts visually when agent is "thinking" / "streaming" vs "idle".
 */
export default function ThreeEnergyCore({ isThinking = false, isStreaming = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 280;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Natural light
    const ambientLight = new THREE.AmbientLight(0xdff7ef, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x4ec291, 2.0);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Icosahedron (Geodesic Energy Core)
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x17523f,
      roughness: 0.4,
      metalness: 0.2,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer Geodesic Wireframe Lattice
    const latticeGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x4ec291,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const latticeMesh = new THREE.Mesh(latticeGeo, latticeMat);
    coreGroup.add(latticeMesh);

    // Dynamic Orbital Energy Rings
    const ringGeo1 = new THREE.RingGeometry(2.5, 2.58, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38b18a,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(2.8, 2.86, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe59f14,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // Orbital Particle Field
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const rad = 2.4 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i] = rad * Math.cos(phi) * Math.sin(theta);
      positions[i + 1] = rad * Math.sin(phi);
      positions[i + 2] = rad * Math.cos(phi) * Math.cos(theta);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x55cfa8,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // State-aware speed multipliers
      const activeState = isThinking || isStreaming;
      const speedMult = activeState ? 2.5 : 1.0;
      const pulseRate = activeState ? 3.5 : 1.2;

      coreGroup.rotation.y += 0.008 * speedMult;
      coreGroup.rotation.x = Math.sin(elapsed * 0.8) * 0.15;

      latticeMesh.rotation.y -= 0.012 * speedMult;
      ring1.rotation.z += 0.015 * speedMult;
      ring2.rotation.z -= 0.012 * speedMult;

      // Gentle organic pulse on scale
      const scale = 1.0 + Math.sin(elapsed * pulseRate) * (activeState ? 0.08 : 0.03);
      innerMesh.scale.set(scale, scale, scale);
      latticeMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      latticeGeo.dispose();
      latticeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isThinking, isStreaming]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "220px" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: isThinking || isStreaming ? "var(--emerald-600)" : "var(--text-muted)",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(4px)",
          padding: "0.2rem 0.6rem",
          borderRadius: "var(--radius-full)",
          border: "1px solid var(--border-subtle)",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: isThinking || isStreaming ? "#38b18a" : "#627b70",
            animation: isThinking || isStreaming ? "pulseSlow 1s infinite" : "none",
          }}
        />
        {isStreaming ? "Synthesizing Knowledge..." : isThinking ? "Orchestrating Energy Agents..." : "Applied Energy Intelligence Core"}
      </div>
    </div>
  );
}
