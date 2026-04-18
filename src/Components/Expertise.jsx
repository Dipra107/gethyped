import React from "react";

const Expertise = () => {
    return (
        <div className="w-full bg-[#FAF4EC] py-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="space-y-10">

                    {/* CARD 1 - WHITE */}
                    <div className="bg-white rounded-2xl p-10 md:p-16 
          flex flex-col md:flex-row justify-between 
          min-h-[500px] md:min-h-[600px] cursor-pointer">

                        <div className="flex flex-col max-w-2xl">

                            <div className="relative">
                                <div className="absolute top-[-50px] right-[-550px] text-[50px] md:text-[90px] font-bold text-black/10">
                                    01
                                </div>

                                <div className="relative z-10 pr-24 md:pr-32">
                                    <span className="text-lg text-black font-se
                   bg-[#eae4d8] px-2 py-1 rounded-md">
                                        Expertise
                                    </span>

                                    <h2 className="text-4xl md:text-7xl text-black font-bold mt-6 whitespace-nowrap">
                                        Social strategy
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-28 md:mt-100">
                                <p className="text-black font-bold text-xl max-w-md">
                                    Slimme strategie. Sterke start.
                                </p>
                                <p className="text-black font-medium w-[320px] mt-4">
                                    We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                                </p>

                                <button className="mt-3 md:mt-6 flex items-center gap-3 border border-[#fa5424] rounded-xl bg-[#fa5424] px-1 py-1 text-sm text-white font-semibold transition-all duration-300 ease-out
  hover:bg-[#fa5424]
  hover:scale-x-105
  hover:skew-x-[8deg]
  hover:skew-y-[-4deg]
  hover:rounded-md
  hover:shadow-md">
                                    Meer over social strategie
                                    <span className="bg-white text-black rounded-md px-2 py-1 text-md font-extrabold">
                                        →
                                    </span>
                                </button>
                            </div>

                        </div>

                        <div className="w-full md:w-[250px] h-[250px] md:h-[330px] relative self-end mt-10 md:mt-0">
                            <div className="absolute inset-0 border-[6px] border-orange-500 rounded-3xl rotate-[4deg]"></div>
                            <video src="/assets/video1.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-3xl relative z-10" />
                        </div>

                    </div>

                    {/* CARD 2 - PINK */}
                    <div className="bg-[#fcb8fa] rounded-[40px] p-10 md:p-16 
          flex flex-col md:flex-row justify-between 
          min-h-[500px] md:min-h-[600px] cursor-pointer">

                        <div className="flex flex-col max-w-2xl">

                            <div className="relative">
                                <div className="absolute top-[-50px] right-[-500px] text-[50px] md:text-[90px] font-bold text-white/40">
                                    02
                                </div>

                                <div className="relative z-10 pr-24 md:pr-32">
                                    <span className="text-lg text-black font-semibold bg-[#ffffff] px-2 py-1 rounded-md">
                                        Expertise
                                    </span>

                                    <h2 className="text-4xl md:text-7xl text-black font-bold mt-6 whitespace-nowrap">
                                        Content creation
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-28 md:mt-100">
                                <p className="text-black text-xl font-bold max-w-md">
                                    Content die opvalt en raakt..
                                </p>
                                <p className="text-black font-medium w-[320px] mt-4">
                                    We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.
                                </p>

                                <button className="mt-3 md:mt-6 flex items-center gap-3 border border-white rounded-xl bg-white px-1 py-1 text-sm text-black font-semibold transition-all duration-300 ease-out
  hover:bg-[#fdfdfd]
  hover:scale-x-105
  hover:skew-x-[8deg]
  hover:skew-y-[-4deg]
  hover:rounded-md
  hover:shadow-md">
                                    Meer over content creatie
                                    <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">
                                        →
                                    </span>
                                </button>
                            </div>

                        </div>

                        <div className="w-full md:w-[250px] h-[300px] md:h-[330px] relative self-end mt-10 md:mt-0">
                            <div className="absolute inset-0 border-[8px] border-white rounded-3xl rotate-[4deg]"></div>
                            <video src="/assets/video1.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-3xl relative z-10" />
                        </div>

                    </div>

                    {/* CARD 3 - GREEN */}
                    <div className="bg-[#33c791] rounded-[40px] p-10 md:p-16 
          flex flex-col md:flex-row justify-between 
          min-h-[500px] md:min-h-[600px] cursor-pointer">

                        <div className="flex flex-col max-w-2xl">

                            <div className="relative">
                                <div className="absolute top-[-50px] right-[-710px] text-[50px] md:text-[90px] font-bold text-white/40">
                                    03
                                </div>

                                <div className="relative z-10 pr-24 md:pr-32">
                                    <span className="text-lg text-black font-semibold bg-[#ffffff] px-2 py-1 rounded-md">
                                        Expertise
                                    </span>

                                    <h2 className="text-4xl md:text-7xl text-black font-bold mt-6 whitespace-nowrap">
                                        Activation
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-28 md:mt-100">
                                <p className="text-black text-xl font-bold max-w-md">
                                    Zichtbaar waar en wanneer het telt.
                                </p>
                                <p className="text-black font-medium w-[340px] mt-4">
                                    De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.
                                </p>

                                <button className="mt-3 md:mt-6 flex items-center gap-3 border border-white rounded-xl bg-white px-1 py-1 text-sm text-black font-semibold transition-all duration-300 ease-out
  hover:bg-[#fdfdfd]
  hover:scale-x-105
  hover:skew-x-[8deg]
  hover:skew-y-[-4deg]
  hover:rounded-md
  hover:shadow-md">
                                    Meer over activatie
                                    <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">
                                        →
                                    </span>
                                </button>
                            </div>

                        </div>

                        <div className="w-full md:w-[250px] h-[300px] md:h-[330px] relative self-end mt-10 md:mt-0">
                            <div className="absolute inset-0 border-[8px] border-white rounded-3xl rotate-[4deg]"></div>
                            <video src="/assets/video1.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-3xl relative z-10" />
                        </div>

                    </div>

                    {/* CARD 4 - BLUE */}
                    <div className="bg-[#3b82f6] rounded-[40px] p-10 md:p-16 
          flex flex-col md:flex-row justify-between 
          min-h-[500px] md:min-h-[600px] cursor-pointer">

                        <div className="flex flex-col max-w-2xl">

                            <div className="relative">
                                <div className="absolute top-[-50px] right-[-830px] text-[50px] md:text-[90px] font-bold text-white/40">
                                    04
                                </div>

                                <div className="relative z-10 pr-24 md:pr-32">
                                    <span className="text-lg text-black font-semibold bg-[#ffffff] px-2 py-1 rounded-md">
                                        Expertise
                                    </span>

                                    <h2 className="text-4xl md:text-7xl text-black font-bold mt-6 whitespace-nowrap">
                                        Data
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-28 md:mt-100">
                                <p className="text-black text-xl font-bold max-w-md">
                                    Inzichten die impact maken.
                                </p>
                                <p className="text-black font-medium w-[340px] mt-4">
                                    We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.
                                </p>

                                <button className="mt-3 md:mt-6 flex items-center gap-3 border border-white rounded-xl bg-white px-1 py-1 text-sm text-black font-semibold transition-all duration-300 ease-out
  hover:bg-[#fdfdfd]
  hover:scale-x-105
  hover:skew-x-[8deg]
  hover:skew-y-[-4deg]
  hover:rounded-md
  hover:shadow-md">
                                    Meer over data
                                    <span className="bg-black text-white rounded-md px-2 py-1 text-md font-bold">
                                        →
                                    </span>
                                </button>
                            </div>

                        </div>

                        <div className="w-full md:w-[250px] h-[300px] md:h-[330px] relative self-end mt-10 md:mt-0">
                            <div className="absolute inset-0 border-[8px] border-white rounded-3xl rotate-[4deg]"></div>
                            <video src="/assets/video1.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-3xl relative z-10" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Expertise;