// @flow strict

import { certifications } from "@/utils/data/certifications";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/study.json';

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                certifications.map(certification => (
                  <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                    <div className="p-3 relative">
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {certification.issuedDate}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certification.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            <span className="text-pink-500">{certification.provider}</span>
                            {certification.credential && (
                              <>
                                <br />
                                <span className="text-xs text-gray-400">
                                  Credential ID: {certification.credential}
                                </span>
                              </>
                            )}
                          </p>
                          {certification.skills && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {certification.skills.map((skill, index) => (
                                <span 
                                  key={index}
                                  className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                          {certification.credlyUrl && (
                            <a
                              href={certification.credlyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-3 text-xs text-[#16f2b3] hover:text-pink-500 transition-colors"
                            >
                              View Credential →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
