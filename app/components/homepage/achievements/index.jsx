// @flow strict

import { achievements } from "@/utils/data/achievements";
import { FaTrophy } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/coding.json';

function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="flex flex-col gap-6">
              {
                achievements.map(achievement => (
                  <GlowCard key={achievement.id} identifier={`achievement-${achievement.id}`}>
                    <div className="p-3 relative">
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {achievement.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-yellow-500 transition-all duration-300 hover:scale-125">
                          <FaTrophy size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {achievement.title}
                          </p>
                          <p className="text-sm sm:text-base mb-3">
                            {achievement.description}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="text-pink-500 text-sm">
                              {achievement.organization}
                            </span>
                            {achievement.rank && (
                              <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">
                                {achievement.rank}
                              </span>
                            )}
                          </div>
                          {achievement.impact && (
                            <p className="text-xs text-gray-400 mt-2">
                              {achievement.impact}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>

          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
