import React from "react";
import loopSalontopper from "../assets/Loop_Salontopper.mp4";
import petrolheadLoop from "../assets/petrolhead_loop.mp4";

const Hero = () => {
    return (
        <div className="w-full min-h-screen bg-[#FAF4EC] flex items-center justify-center mt-0 px-6">
            <div className="max-w-7xl w-full">

              
                <h1 className="text-[64px] leading-[72px] font-bold text-black">
                    Get Hyped. Get <br /> Noticed. Get Results.
                </h1>

           
                <p className="mt-6 text-lg font-semibold text-black">

                    Klaar met gokken op content

                    <br />
                    die niets oplevert?
                </p>

                {/* Cards */}
                <div className="mt-16 flex gap-6 items-center">

                    {/* Card 1 */}
                    <div className="bg-[#2A86E5] text-black w-[180px] h-[240px] md:w-[260px] md:h-[320px] rounded-3xl p-6 flex flex-col justify-between rotate-[-6deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
                        <h2 className="text-4xl font-bold">10M+</h2>
                        <div>
                            <p className="font-semibold">Organische views</p>
                            <p className="text-sm">Groei door slimme content</p>
                        </div>
                    </div>

                    {/* Card 2 (Video) */}
                    <div className="w-[180px] h-[240px] md:w-[260px] md:h-[320px] rounded-3xl overflow-hidden rotate-[3deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={loopSalontopper} type="video/mp4" />
                        </video>
                    </div>


                    {/* Card 3 */}
                    <div className="bg-[#2A86E5] text-black w-[180px] h-[240px] md:w-[260px] md:h-[320px] rounded-3xl p-6 flex flex-col justify-between rotate-[-6deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
                        <h2 className="text-4xl font-bold">30+</h2>
                        <div>
                            <p className="font-semibold">Merken geholpen</p>
                            <p className="text-sm">Van start-up tot multinational</p>
                        </div>
                    </div>

                    {/* Card 4 (Video) */}
                    <div className="hidden md:block w-[180px] h-[240px] md:w-[260px] md:h-[320px] rounded-3xl overflow-hidden rotate-[3deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={petrolheadLoop} type="video/mp4" />
                        </video>


                    </div>

                </div>
                <p className="pt-16 text-[48px] md:text-[64px] leading-[1.1] font-bold text-black max-w-6xl">
                    Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </p>
            </div>
        </div>
    );
};

export default Hero;