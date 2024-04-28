import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../Images/Frame 3762.png'

const Home = () => {
    return (
      <div className="flex-1 flex flex-col items-end justify-start gap-[147px] max-w-full text-center text-15xl text-white font-poppins mq750:gap-[37px] mq1050:gap-[73px] mq450:gap-[18px]">
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[7px] pr-5 pl-[23px] box-border max-w-full text-19xl">
      <div className="w-[695px] flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2.5 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[474px] flex flex-row items-start justify-start relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] " />
            <img
              className="h-[474px] flex-1 relative rounded-298xl max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src={img1}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0">
            <h1 className="text-center m-0 relative text-inherit tracking-[0.38px] leading-[4px] font-normal font-inherit inline-block min-w-[73px] z-[1] mq1050:text-11xl mq1050:leading-[19px] mq450:text-4xl mq450:leading-[14px]">
              Hey
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full text-43xl">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <h1 className="m-0 relative tracking-[0.38px] leading-[20px]  font-inherit z-[1] text-15xl mq1050:text-15xl mq1050:leading-[19px] mq450:text-15xl mq450:leading-[14px]">
                I’m Yashmita Bansal
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-20 pl-[78px] box-border max-w-full text-19xl mq750:pl-[39px] mq750:pr-10 mq750:box-border">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-center gap-[5px] max-w-full z-[1]">
                <h1 className="m-0 relative text-inherit tracking-[0.38px] leading-[52px] font-medium font-inherit mq1050:text-11xl mq1050:leading-[42px] mq450:text-4xl mq450:leading-[31px]">
                  <span>Full-stack</span>
                  <span className="text-firebrick">{` Developer `}</span>
                </h1>
                <div className="h-[52px] w-[5px] relative bg-firebrick" />
              </div>
            </div>
            <div className="self-stretch relative text-2xl tracking-[0.38px] leading-[28px] font-light z-[1] mq450:text-mid mq450:leading-[22px]">
              A highly motivated student studying Artificial Intelligence and
              Machine Learning. Actively seeking opportunities to apply my
              skills and knowledge to real-world projects and contribute to
              the advancement of the industry.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[416px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
            <button className="cursor-pointer [border:none] pt-[18px] px-[22px] pb-[17px] bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[-7px_-7px_10px_rgba(255,_255,_255,_0.25),_10px_10px_12px_rgba(0,_0,_0,_0.25)] rounded-3xl  bg-violet-950 hover:bg-indigo-500 transition ease-in-out duration-300 hover:scale-110  " />
              <div className="relative text-xl tracking-[0.38px] leading-[28px] font-normal font-poppins text-white text-center inline-block min-w-[126px] z-[1] ">
                Learn More
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[18px] px-[22px] pb-[17px] bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[-7px_-7px_10px_rgba(255,_255,_255,_0.25),_10px_10px_12px_rgba(0,_0,_0,_0.25)] rounded-3xl  bg-violet-950 hover:bg-indigo-500 transition ease-in-out duration-300 hover:scale-110  " />
            <div className="relative text-xl tracking-[0.38px] leading-[28px] font-normal font-poppins text-white text-center inline-block min-w-[126px] z-[1] ">
              Contact Me
            </div>
          </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  };
  
  export default Home;
  