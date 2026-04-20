import React from "react";
import video1 from "../assets/MD Loop Schaken.mp4";
import video2 from "../assets/Loop BTS comp.mp4";
import video3 from "../assets/overdetop-loop.mp4";
import video4 from "../assets/Data comp.mp4";

const Expertise = () => {
    return (
        <div className="w-full bg-[#FAF4EC] py-10 md:py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative">

                    <div className="sticky top-20 md:top-28 w-full vanish-card z-[1]">
                        <div className="bg-white rounded-[32px] md:rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between min-h-fit md:min-h-[600px] cursor-pointer group shadow-xl border border-black/5">
                            <div className="flex flex-col w-full md:max-w-2xl">
                                <div className="relative">
                                    <div className="absolute top-[-10px] right-0 md:top-[-50px] md:right-[-450px] text-[50px] md:text-[90px] font-bold text-black/10 leading-none">01</div>
                                    <div className="relative z-10 pr-20 md:pr-32">
                                        <span className="text-sm md:text-lg text-black font-semibold bg-[#eae4d8] px-2 py-1 rounded-md">Expertise</span>
                                        <h2 className="text-3xl md:text-7xl text-black font-bold mt-4 md:mt-6">Social strategy</h2>
                                    </div>
                                </div>
                                <div className="md:hidden mt-12 mb-8 flex justify-start pl-4">
                                    <div className="relative w-[140px] h-[180px]">
                                        <div className="absolute -inset-1 border-[6px] border-[#fa5424] rounded-2xl rotate-[-4deg] z-0"></div>
                                        <video src={video1} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-2xl rotate-[-4deg] relative z-10 shadow-lg" />
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-100">
                                    <p className="text-black font-bold text-xl">Slimme strategie. Sterke start.</p>
                                    <p className="text-black font-medium mt-4 md:w-[320px]">We duiken diep in jouw merk, doelgrouep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.</p>
                                    <button className="mt-6 flex items-center gap-3 border border-[#fa5424] rounded-xl bg-[#fa5424] px-1 py-1 text-sm text-white font-semibold transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:shadow-md">
                                        <span className="pl-3">Meer over social strategie</span>
                                        <span className="bg-white text-black rounded-md px-2 py-1 text-md font-extrabold">→</span>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:flex w-[270px] h-[350px] relative justify-center items-center self-end">
                                <div className="absolute inset-0 border-[8px] border-[#fa5424] rounded-3xl rotate-[4deg]"></div>
                                <video src={video1} autoPlay muted loop className="w-[260px] h-[338px] object-cover rounded-3xl rotate-[4deg] relative z-10" />
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-20 md:top-28 w-full vanish-card z-[2]">
                        <div className="bg-[#fcb8fa] rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row justify-between min-h-fit md:min-h-[600px] cursor-pointer group shadow-xl border border-black/5">
                            <div className="flex flex-col w-full md:max-w-2xl">
                                <div className="relative">
                                    <div className="absolute top-[-10px] right-0 md:top-[-50px] md:right-[-450px] text-[50px] md:text-[90px] font-bold text-white/40 leading-none">02</div>
                                    <div className="relative z-10 pr-20 md:pr-32">
                                        <span className="text-sm md:text-lg text-black font-semibold bg-white px-2 py-1 rounded-md">Expertise</span>
                                        <h2 className="text-3xl md:text-7xl text-black font-bold mt-4 md:mt-6">Content creation</h2>
                                    </div>
                                </div>
                                <div className="md:hidden mt-12 mb-8 flex justify-start pl-4">
                                    <div className="relative w-[140px] h-[180px]">
                                        <div className="absolute -inset-1 border-[6px] border-white rounded-2xl rotate-[-4deg] z-0"></div>
                                        <video src={video2} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-2xl rotate-[-4deg] relative z-10 shadow-lg" />
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-100">
                                    <p className="text-black font-bold text-xl">Content die opvalt en raakt..</p>
                                    <p className="text-black font-medium w-[320px] mt-4">We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek.</p>
                                    <button className="mt-6 flex items-center gap-3 border border-white rounded-xl bg-white px-1 py-1 text-sm text-black font-semibold transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:shadow-md">
                                        <span className="pl-3">Meer over content creatie</span>
                                        <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">→</span>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:flex w-[270px] h-[350px] relative justify-center items-center self-end">
                                <div className="absolute inset-0 border-[8px] border-white rounded-3xl rotate-[4deg]"></div>
                                <video src={video2} autoPlay muted loop className="w-[260px] h-[338px] object-cover rounded-3xl rotate-[4deg] relative z-10" />
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-20 md:top-28 w-full vanish-card z-[3]">
                        <div className="bg-[#33c791] rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row justify-between min-h-fit md:min-h-[600px] cursor-pointer group shadow-xl border border-black/5">
                            <div className="flex flex-col w-full md:max-w-2xl">
                                <div className="relative">
                                    <div className="absolute top-[-10px] right-0 md:top-[-50px] md:right-[-450px] text-[50px] md:text-[90px] font-bold text-white/40 leading-none">03</div>
                                    <div className="relative z-10 pr-20 md:pr-32">
                                        <span className="text-sm md:text-lg text-black font-semibold bg-white px-2 py-1 rounded-md">Expertise</span>
                                        <h2 className="text-3xl md:text-7xl text-black font-bold mt-4 md:mt-6">Activation</h2>
                                    </div>
                                </div>
                                <div className="md:hidden mt-12 mb-8 flex justify-start pl-4">
                                    <div className="relative w-[140px] h-[180px]">
                                        <div className="absolute -inset-1 border-[6px] border-white rounded-2xl rotate-[-4deg] z-0"></div>
                                        <video src={video3} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-2xl rotate-[-4deg] relative z-10 shadow-lg" />
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-100">
                                    <p className="text-black font-bold text-xl">Zichtbaar waar en wanneer het telt.</p>
                                    <p className="text-black font-medium w-[340px] mt-4">De juiste content verdient het om gesehen te worden. We verspreiden de content waar jouw doelgroep is.</p>
                                    <button className="mt-6 flex items-center gap-3 border border-white rounded-xl bg-white px-1 py-1 text-sm text-black font-semibold transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:shadow-md">
                                        <span className="pl-3">Meer over activatie</span>
                                        <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">→</span>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:flex w-[270px] h-[350px] relative justify-center items-center self-end">
                                <div className="absolute inset-0 border-[8px] border-white rounded-3xl rotate-[4deg]"></div>
                                <video src={video3} autoPlay muted loop className="w-[260px] h-[338px] object-cover rounded-3xl rotate-[4deg] relative z-10" />
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-20 md:top-28 w-full z-[4]">
                        <div className="bg-[#3b82f6] rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row justify-between min-h-fit md:min-h-[600px] cursor-pointer group shadow-xl border border-black/5">
                            <div className="flex flex-col w-full md:max-w-2xl">
                                <div className="relative">
                                    <div className="absolute top-[-10px] right-0 md:top-[-50px] md:right-[-450px] text-[50px] md:text-[90px] font-bold text-white/40 leading-none">04</div>
                                    <div className="relative z-10 pr-20 md:pr-32">
                                        <span className="text-sm md:text-lg text-black font-semibold bg-white px-2 py-1 rounded-md">Expertise</span>
                                        <h2 className="text-3xl md:text-7xl text-black font-bold mt-4 md:mt-6">Data</h2>
                                    </div>
                                </div>
                                <div className="md:hidden mt-12 mb-8 flex justify-start pl-4">
                                    <div className="relative w-[140px] h-[180px]">
                                        <div className="absolute -inset-1 border-[6px] border-white rounded-2xl rotate-[-4deg] z-0"></div>
                                        <video src={video4} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-2xl rotate-[-4deg] relative z-10 shadow-lg" />
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-100">
                                    <p className="text-black font-bold text-xl">Inzichten die impact maken.</p>
                                    <p className="text-black font-medium w-[340px] mt-4">We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.</p>
                                    <button className="mt-6 flex items-center gap-3 border border-white rounded-xl bg-white px-1 py-1 text-sm text-black font-semibold transition-all duration-300 ease-out hover:scale-x-105 hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:shadow-md">
                                        <span className="pl-3">Meer over data</span>
                                        <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">→</span>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:flex w-[270px] h-[350px] relative justify-center items-center self-end">
                                <div className="absolute inset-0 border-[8px] border-white rounded-3xl rotate-[4deg]"></div>
                                <video src={video4} autoPlay muted loop className="w-[260px] h-[338px] object-cover rounded-3xl rotate-[4deg] relative z-10" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @supports (animation-timeline: view()) {
                    .vanish-card {
                        animation: cascade-down-fade linear forwards;
                        animation-timeline: view();
                        animation-range: exit 0% exit 100%;
                    }
                }

                @keyframes cascade-down-fade {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(150px) scale(0.9);
                        opacity: 0;
                        filter: blur(10px);
                    }
                }
            `}} />
        </div>
    );
};

export default Expertise;