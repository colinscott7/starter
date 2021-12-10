import { useRef, useEffect } from "react";
export const OctopusAnimation = () => {
  let deltaTime = Date.now();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imageFish = new Image();
  const imageOctopus = new Image();

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    // Initialize
    imageFish.src = "./images/fish.png";
    imageOctopus.src = "./images/octopus.png";

    if (canvasRef.current) {
      canvasRef.current.width = 1280;
      canvasRef.current.height = 768;
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      const ctx = canvasCtxRef.current;

      const generateRandomX = () => {
        return getRandomInt(0, 1280);
      };
      const generateRandomY = () => {
        return getRandomInt(0, 768);
      };
      const generateRandomNewLocation = () => {
        return getRandomInt(3000, 8000);
      };

      const fishData = [
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
        {
          x: generateRandomX(),
          y: generateRandomY(),
          targetX: generateRandomX(),
          targetY: generateRandomY(),
          pickNewLocation: generateRandomNewLocation(),
          rotation: 20,
        },
      ];
      console.log(fishData);

      const loop = () => {
        const delta = Date.now() - deltaTime;
        ctx!.clearRect(0, 0, 1280, 768);
        ctx!.fillStyle = "#14011c";
        ctx!.fillRect(0, 0, 1280, 768);
        updateFishes(fishData, delta);
        deltaTime = Date.now();
        requestAnimationFrame(loop);
      };

      const drawFish = (fish: any) => {
        ctx!.drawImage(imageFish, fish.x, fish.y, 40, 40);
      };

      // const rotateFish = (fish: any) => {
      //   if (fish.targetX > fish.x && fish.targetY > fish.y) {}
      //   if (fish.targetX < fish.x && fish.targetY > fish.y) {}
      //   if (fish.targetX > fish.x && fish.targetY < fish.y) {}
      //   if (fish.targetX < fish.x && fish.targetY < fish.y) {}
      // }
      const moveFish = (fish: any) => {
        if (fish.targetX && fish.targetY) {
          let dx = fish.targetX - fish.x;
          let dy = fish.targetY - fish.y;

          const maxSpeed = 0.45;

          if (dx > maxSpeed) dx = maxSpeed;
          if (dx < -maxSpeed) dx = -maxSpeed;
          if (dy > maxSpeed) dy = maxSpeed;
          if (dy < -maxSpeed) dy = -maxSpeed;

          fish.x += dx;
          fish.y += dy;
        }
      };

      const updateFishes = (fishes: any, delta: any) => {
        fishes.forEach((fish: any) => {
          fish.pickNewLocation -= delta;
          if (fish.pickNewLocation <= 0) {
            fish.targetX = generateRandomX();
            fish.targetY = generateRandomY();
            fish.pickNewLocation = generateRandomNewLocation();
          }

          moveFish(fish);
          drawFish(fish);
        });
      };
      loop();
    }
  }, []);
  return (
    <>
      <canvas id="octopusAnimation" ref={canvasRef}></canvas>
    </>
  );
};
