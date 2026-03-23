// src/components/StarBackground.tsx
import { useMemo } from 'react';
import '../css/starBackground.css';

export default function StarBackground() {
    const stars = useMemo(() => {
        return Array.from({ length: 80 }).map((_, i) => {
            const isLarge = Math.random() > 0.8;
            return {
                id: i,
                top: `${Math.random() * 200 - 100}%`,
                left: `${Math.random() * 100}%`,
                size: isLarge ? '3px' : '1.5px',
                delay: `${Math.random() * -100}s`,
                twinkleDuration: `${3 + Math.random() * 5}s`,
                moveDuration: isLarge ? `${60 + Math.random() * 20}s` : `${100 + Math.random() * 40}s`,
            };
        });
    }, []);

    return (
        <div className="star-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                        animationDuration: `${star.twinkleDuration}, ${star.moveDuration}`,
                    }}
                />
            ))}
        </div>
    );
}