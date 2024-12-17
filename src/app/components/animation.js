'use client';
import { useEffect, useRef } from 'react';
import "../style.css";
const CanvasAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let W, H, L;
        let n = 15, c = 0, dc = 0.25;
        const { sin, cos, PI, random, round } = Math;

        function init() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;
            L = (W < H ? W : H) / 2;
        
            // Очистка и установка фона
            ctx.clearRect(0, 0, W, H);
            ctx.fillStyle = 'black'; // Черный фон для холста
            ctx.fillRect(0, 0, W, H);
        }
        

        class Point {
            constructor() {
                this.ang = 2 * PI * random();
                this.dang = (-0.5 + random()) / 10;
                this.r = (2 * L) / 3;
                this.x = W / 2 + this.r * cos(this.ang);
                this.y = H / 2 + this.r * sin(this.ang);
            }

            update() {
                this.ang += this.dang;
                this.x = W / 2 + this.r * cos(this.ang);
                this.y = H / 2 + this.r * sin(this.ang);
            }
        }

        const ctrls = Array.from({ length: n }, () => new Point());

        function animate() {
            ctx.fillStyle = 'rgba(0,0,0,0.1)'; // Легкий прозрачный черный фон
            ctx.fillRect(0, 0, W, H); // Очистка предыдущих кадров
            ctx.beginPath();
            ctx.moveTo((ctrls[0].x + ctrls[n - 1].x) / 2, (ctrls[0].y + ctrls[n - 1].y) / 2);
        
            for (let p = 0; p < n; p++) {
                const q = (p + 1) % n;
                ctx.quadraticCurveTo(
                    ctrls[p].x,
                    ctrls[p].y,
                    (ctrls[p].x + ctrls[q].x) / 2,
                    (ctrls[p].y + ctrls[q].y) / 2
                );
                ctrls[p].update();
            }
        
            ctx.strokeStyle = `hsl(${round(180 + c)}deg, 100%, 70%)`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `hsl(${round(180 + c)}deg, 100%, 50%)`;
            ctx.lineWidth = 2;
        
            ctx.stroke();
            ctx.shadowColor = 'transparent';
            c += dc;
            if (c >= 170 || c <= 0) dc = -dc;
        
            requestAnimationFrame(animate);
        }
        

        init();
        window.addEventListener('resize', init);
        animate();

        return () => {
            window.removeEventListener('resize', init);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10"
        />
    );
};

export default CanvasAnimation;
