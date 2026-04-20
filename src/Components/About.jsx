import React, { useState, useRef } from "react";
import loopSalontopper from "../assets/Loop_Salontopper.mp4";
import petrolheadLoop from "../assets/petrolhead_loop.mp4";

const About = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const wrapRef = useRef(null);

    const cards = [
        {
            type: "info",
            bg: "#0d8dff",
            title: "10M+",
            subtitle: "Organische views",
            text: "Groei door slimme content",
            rotate: -7,
        },
        {
            type: "video",
            video: loopSalontopper,
            rotate: 4,
        },
        {
            type: "info",
            bg: "#33c791",
            title: "30+",
            subtitle: "Merken geholpen",
            text: "Van start-up tot multinational",
            rotate: -6,
        },
        {
            type: "video",
            video: petrolheadLoop,
            rotate: 7,
            desktopOnly: true,
        },
    ];

    const handleMouseMove = (e) => {
        if (!wrapRef.current) return;

        const rect = wrapRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) / rect.width;
        const y = (e.clientY - centerY) / rect.height;

        setMouseOffset({ x, y });
    };

    const getCardStyle = (index, baseRotate) => {
        let x = 0;
        let y = 0;
        let rotate = baseRotate;
        let scale = 1;
        let zIndex = 10 + index;

    
        x += mouseOffset.x * (18 + index * 4) * (index % 2 === 0 ? -1 : 1);
        y += mouseOffset.y * (10 + index * 2);
        rotate += mouseOffset.x * (6 + index);

      
        if (activeCard !== null) {
            if (index < activeCard) x -= 78;
            if (index > activeCard) x += 78;

            if (index === activeCard) {
                scale = 1.12;
                rotate = 0;   
                y -= 24;
                zIndex = 50;
            }
        }

        return {
            transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
            zIndex,
            transition: "transform 0.2s ease, z-index 0.2s ease",
        };
    };

    return (
        <div className="w-full min-h-screen bg-[#FAF4EC] flex items-center justify-center px-6">
            <div className="max-w-7xl w-full">
                <h1 className="text-[57px] md:text-[75px] font-bold text-black">
                    Get Hyped. Get <br className="hidden md:block" /> Noticed. Get Results.
                </h1>

                <p className="mt-6 text-xl font-bold text-black">
                    Klaar met gokken op content
                    <br />
                    die niets oplevert?
                </p>

                <div
                    ref={wrapRef}
                    className="mt-20 w-fit mx-auto flex items-center"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setActiveCard(null)}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveCard(index)}
                            onClick={() => setActiveCard(index)}
                            className={`
                                relative shrink-0 cursor-pointer select-none
                                ${index !== 0 ? "-ml-3 md:-ml-5" : ""}
                                ${index > 1 ? "hidden md:block" : "block"}
                                ${card.desktopOnly ? "hidden md:block" : ""}
                            `}
                            style={getCardStyle(index, card.rotate)}
                        >
                            {card.type === "info" ? (
                                <div
                                    className="w-[200px] h-[260px] md:w-[300px] md:h-[380px] rounded-3xl p-6 flex flex-col justify-between text-black shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                                    style={{ backgroundColor: card.bg }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold">
                                        {card.title}
                                    </h2>

                                    <div>
                                        <p className="font-bold text-md md:text-2xl border-b border-black pb-2">
                                            {card.subtitle}
                                        </p>
                                        <p className="text-[12px] md:text-base mt-1">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-[200px] h-[260px] md:w-[280px] md:h-[380px] rounded-3xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={card.video} type="video/mp4" />
                                    </video>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="pt-16 text-[40px] md:text-[60px] leading-[1.1] font-bold text-black max-w-3xl md:max-w-[1000px] mx-auto text-left">
                    Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </p>
            </div>
        </div>
    );
};

export default About;