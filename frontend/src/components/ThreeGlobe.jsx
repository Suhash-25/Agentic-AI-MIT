import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * ThreeGlobe Component
 * Interactive 3D Clean Energy Planetary Grid
 * Crafted with organic emerald and botanical accents, solar flux rings, and interactive energy nodes.
 */
export default function ThreeGlobe({ onSelectNode }) {
  const mountRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 560;
    const height = container.clientHeight || 560;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Lighting (Natural, Architectural, Botanical)
    const ambientLight = new THREE.AmbientLight(0xdff7ef, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x55cfa8, 1.8);
    dirLight1.position.set(12, 18, 14);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe59f14, 0.7); // warm solar tint
    dirLight2.position.set(-14, -8, -10);
    scene.add(dirLight2);

    // 3. Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Core Sphere: Rich botanical emerald globe
    const sphereRadius = 5.2;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 48, 48);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x0f3e30,
      roughness: 0.65,
      metalness: 0.15,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(coreMesh);

    // Subtle Geo-Grid Wireframe overlay
    const gridGeo = new THREE.SphereGeometry(sphereRadius + 0.04, 32, 24);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x298d6d,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(gridMesh);

    // 4. Clean Energy Orbiting Flux Rings
    const ringMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x4ec291, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: 0xe59f14, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: 0x38b18a, transparent: true, opacity: 0.3, side: THREE.DoubleSide }),
    ];

    const rings = [];
    const ringRadii = [6.6, 7.3, 8.0];
    const ringTilts = [
      { x: 0.6, y: 0.2, z: 0.1 },
      { x: -0.4, y: 0.8, z: -0.3 },
      { x: 0.2, y: -0.6, z: 0.7 },
    ];

    ringRadii.forEach((r, idx) => {
      const ringGeo = new THREE.RingGeometry(r, r + 0.08, 64);
      const ringMesh = new THREE.Mesh(ringGeo, ringMaterials[idx]);
      ringMesh.rotation.set(ringTilts[idx].x, ringTilts[idx].y, ringTilts[idx].z);
      globeGroup.add(ringMesh);
      rings.push({ mesh: ringMesh, speed: (idx % 2 === 0 ? 1 : -1) * (0.003 + idx * 0.002) });
    });

    // 5. Interactive Clean Energy Facility Nodes
    const nodesData = [
      { name: "Pacific Floating Solar Array", type: "Solar", lat: 34, lon: -118, stat: "98.4% Efficiency", color: 0xe59f14 },
      { name: "North Sea Wind Corridor", type: "Wind", lat: 56, lon: 3, stat: "14.2 GW Transmission", color: 0x4ec291 },
      { name: "Sahara Sun Harvesting Grid", type: "Solar", lat: 24, lon: 12, stat: "220 GWh Annual", color: 0xe59f14 },
      { name: "Atacama Clean Energy Reserve", type: "Storage", lat: -23, lon: -69, stat: "1.2 GWh BESS Capacity", color: 0x38b18a },
      { name: "Himalayan Hydro Turbine Link", type: "Hydro", lat: 28, lon: 85, stat: "8.6 GW Continuous", color: 0x2579a9 },
      { name: "Nordic Clean Heat Exchange", type: "Heat Pump", lat: 60, lon: 15, stat: "420k Tons CO2 Offset", color: 0x55cfa8 },
    ];

    const interactiveObjects = [];

    function latLonToVector3(lat, lon, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    }

    nodesData.forEach((node) => {
      const pos = latLonToVector3(node.lat, node.lon, sphereRadius + 0.12);

      // Node pin sphere
      const nodeGeo = new THREE.SphereGeometry(0.2, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: node.color });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      nodeMesh.userData = node;

      // Subtle pulse aura ring around the node
      const auraGeo = new THREE.RingGeometry(0.24, 0.42, 24);
      const auraMat = new THREE.MeshBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      const auraMesh = new THREE.Mesh(auraGeo, auraMat);
      auraMesh.position.copy(pos);
      auraMesh.lookAt(0, 0, 0);

      globeGroup.add(nodeMesh);
      globeGroup.add(auraMesh);
      interactiveObjects.push(nodeMesh);
    });

    // 6. Atmospheric Floating Energy Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius + 0.8 + Math.random() * 2.8;

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x88e0c3,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // 7. Mouse Interaction & Inertial Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0.4;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.8;
      targetRotationX = mouseY * 0.6;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Raycasting for node hover / click
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleClick = (event) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects);

      if (intersects.length > 0) {
        const selected = intersects[0].object.userData;
        setActiveNode(selected);
        if (onSelectNode) onSelectNode(selected);
      }
    };

    container.addEventListener("click", handleClick);

    // 8. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle auto rotation with inertial mouse damping
      currentRotationX += (targetRotationX - currentRotationX) * 0.04;
      currentRotationY += (targetRotationY - currentRotationY) * 0.04;

      globeGroup.rotation.y += 0.0022;
      globeGroup.rotation.x = currentRotationX * 0.4 + Math.sin(elapsed * 0.4) * 0.05;

      // Orbit rings
      rings.forEach((r) => {
        r.mesh.rotation.z += r.speed;
      });

      // Gentle particle drift
      particles.rotation.y -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Listener
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [onSelectNode]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "480px" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab" }} />

      {activeNode && (
        <div
          className="card animate-fade-in"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
            maxWidth: "340px",
            background: "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--border-medium)",
            padding: "1rem",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-lg)",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
            <span className={`badge ${activeNode.type === "Solar" ? "badge-solar" : "badge-emerald"}`}>
              {activeNode.type} Node
            </span>
            <button
              onClick={() => setActiveNode(null)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
            >
              ✕
            </button>
          </div>
          <h4 style={{ fontSize: "1rem", color: "var(--emerald-950)", marginTop: "0.25rem" }}>{activeNode.name}</h4>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
            Operational Metric: <strong style={{ color: "var(--emerald-700)" }}>{activeNode.stat}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
