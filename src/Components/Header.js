import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import award from "../Images/award.png";
import biodata from "../Images/biodata.png";
import teaching from "../Images/teaching.png";
import student from "../Images/students.png";
import phd from "../Images/phd.png";
import masters from "../Images/masters.png";
import projectdetails from "../Images/projectdetails.png";
import studentresearch from "../Images/studentresearch.png";
import extfunresearch from "../Images/externalfundedresearch.png";
import communitdev from "../Images/communitydevelopment.png";
import techdissm from "../Images/technologydissemination.png";
import adoptedvillage from "../Images/adoptedvillage.png";
import researchpaper from "../Images/researchpaper.png";
import reviewpaper from "../Images/reviewpaper.png";
import populararticle from "../Images/populararticle.png";
import bookmanual from "../Images/bookmanual.png";
import bookchapters from "../Images/bookchapter.png";
import handouts from "../Images/handouts.png";
const Header = () => {
  const [showAcademics, setShowAcademics] = useState(false);
  const [showstudents, setShowStudents] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showPublication, setShowPublication] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const dropdownVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className=" border-red-500 flex justify-between items-center px-20 py-7">
        <Link to="/">
          <h1 className="text-xl cursor-pointer font-semibold text-gradient-right-to-left">
            Dr.Dwipendra Thakuria
          </h1>
        </Link>
        <div className=" border-black flex text-lg font-semibold">
          <div
            className="relative  px-5 py-1"
            onMouseOver={() => setShowAcademics(true)}
            onMouseOut={() => setShowAcademics(false)}
          >
            <motion.h1
              className="cursor-pointer border-b-2 border-[#7600BC] text-[#4a4a54]"
              style={{
                width: showAcademics ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
              }}
            >
              Academics
            </motion.h1>
            <motion.div className="absolute   w-[180%] -left-14">
              <motion.ul
                className={` font-normal flex flex-wrap justify-center bg-white bg-opacity-15 items-center gap-4 p-4  mt-3 overflow-hidden rounded-tl-md rounded-tr-md rounded-bl-md ${
                  showstudents ? "" : "rounded-br-md"
                } right-2 border  border-[#9f68be]  ${
                  showAcademics ? "block" : "hidden"
                }`}
                variants={dropdownVariants}
                initial="hidden"
                animate={showAcademics ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <Link to="/academics/awards">
                  <li className="cursor-pointer w-20 hover:border-[#7600BC] flex flex-col justify-center items-center hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border rounded-md border-[#b794cc]  py-1">
                    <img alt="award" className="w-7" src={award} />
                    <h1>Awards</h1>
                  </li>{" "}
                </Link>
                <Link to="/academics/biodata">
                  <li className="cursor-pointer w-20 hover:border-[#7600BC] flex flex-col justify-center items-center hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border rounded-md border-[#b794cc]  py-1">
                    <img alt="biodata" className="w-7" src={biodata} />
                    <h1>Biodata</h1>
                  </li>
                </Link>
                <Link to="/academics/teaching">
                  <li className="cursor-pointer w-20 hover:border-[#7600BC] flex flex-col justify-center items-center hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border rounded-md border-[#b794cc]  py-1">
                    <img alt="teaching" className="w-7" src={teaching} />
                    <h1>Teaching</h1>
                  </li>
                </Link>
                <li
                  className="cursor-pointer w-20 group hover:border-[#7600BC] rounded-md border border-[#b794cc] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-zinc-600   text-center py-1 text-sm font-semibold"
                  onMouseOver={() => setShowStudents(true)}
                  onMouseOut={() => setShowStudents(false)}
                >
                  <img alt="student" className="w-7" src={student} />

                  <div className="flex justify-center items-center pl-2">
                    <h1>Students</h1>
                    <svg
                      // width="16"
                      // height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mt-1  border-red-500 "
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </svg>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
            <div
              className={`${
                showstudents ? "block" : "hidden"
              } absolute top-[8.25rem] left-36  pl- font-normal`}
              onMouseOver={() => setShowStudents(true)}
              onMouseOut={() => setShowStudents(false)}
            >
              <motion.ul
                className="border rounded-md ml-2 mt-1 space-y-5 p-2 text-[#2f2f35] overflow-hidden border-[#9f68be] bg-white"
                variants={dropdownVariants}
                initial="hidden"
                animate={showstudents ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <Link to="/academics/students/phd ">
                  <li className="cursor-pointer hover:border-[#7600BC] rounded-md text-xs w-16 flex flex-col justify-center items-center hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] border border-[#b794cc] font-semibold   text-center text-zinc-600 py-1">
                    <img alt="phd" className="w-6" src={phd} />
                    PhD
                  </li>{" "}
                </Link>
                <Link to="/academics/students/masters">
                  <li className="cursor-pointer hover:border-[#7600BC] rounded-md mt-2 text-xs w-16 flex flex-col justify-center items-center border  border-[#b794cc]  hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)]   px-3 font-semibold text-center text-zinc-600 py-1">
                    <img alt="masters" className="w-6" src={masters} />
                    Master
                  </li>
                </Link>
              </motion.ul>
            </div>
          </div>

          <div
            className="relative  px-5 py-1"
            onMouseOver={() => setShowResearch(true)}
            onMouseOut={() => setShowResearch(false)}
          >
            <h1
              className="cursor-pointer border-b-2 border-[#7600BC] text-[#4a4a54]"
              style={{
                width: showResearch ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
              }}
            >
              Research
            </h1>
            <motion.div className="absolute w-[260%] -left-24">
              <motion.ul
                className={` font-normal  px-2 py-3 flex flex-wrap mt-3 justify-center gap-1 rounded-md  bg-white bg-opacity-10 right-2 border  border-[#9f68be]  ${
                  showResearch ? "block" : "hidden"
                }`}
                variants={dropdownVariants}
                initial="hidden"
                animate={showResearch ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <Link to="/research/projectdetails">
                  <li className="cursor-pointer hover:border-[#7600BC]  w-32 flex flex-col justify-center hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] items-center rounded-md  text-sm text-center font-semibold text-zinc-600 border border-[#b794cc] py-1">
                    <img
                      alt="projectdetails"
                      className="w-7"
                      src={projectdetails}
                    />
                    <h1>Project Details</h1>
                  </li>{" "}
                </Link>
                <Link to="/research/studentresearch">
                  <li className="cursor-pointer hover:border-[#7600BC] w-32 flex flex-col justify-center items-center rounded-md  hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border border-[#b794cc] py-1">
                    <img
                      alt="studentresearch"
                      className="w-7"
                      src={studentresearch}
                    />
                    <h1>Student Research</h1>
                  </li>
                </Link>
                <Link to="/research/externalfundedresearch">
                  <li className="cursor-pointer w-32 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border border-[#b794cc]  py-1">
                    <img
                      alt="externalfundedresearch"
                      className="w-7"
                      src={extfunresearch}
                    />
                    External Funded Research
                  </li>
                </Link>
              </motion.ul>
            </motion.div>
          </div>

          <div
            className="relative  px-5 py-1"
            onMouseOver={() => setShowCommunity(true)}
            onMouseOut={() => setShowCommunity(false)}
          >
            <h1
              className="cursor-pointer border-b-2 border-[#7600BC] text-[#4a4a54]"
              style={{
                width: showCommunity ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
              }}
            >
              Community
            </h1>
            <motion.div className="absolute w-[180%] -left-14">
              <motion.ul
                className={` font-normal flex items-center justify-center flex-wrap gap-2 py-3  mt-3 rounded-md  bg-white  right-2 border  border-[#9f68be]  ${
                  showCommunity ? "block" : "hidden"
                }`}
                variants={dropdownVariants}
                initial="hidden"
                animate={showCommunity ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <Link to="/communityengagement/communitydevelopment">
                  <li className="cursor-pointer w-24 flex flex-col items-center justify-center hover:border-[#7600BC] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border rounded-md border-[#b794cc] py-1">
                    <img
                      alt="communitydevelopment"
                      className="w-7"
                      src={communitdev}
                    />
                    Community Development
                  </li>{" "}
                </Link>
                <Link to="/communityengagement/technologydissmination">
                  <li className="cursor-pointer w-24 flex flex-col items-center justify-center hover:border-[#7600BC] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border rounded-md border-[#b794cc] py-1">
                    <img
                      alt="technologydissmeniation"
                      className="w-7"
                      src={techdissm}
                    />
                    Technology Dissemination
                  </li>
                </Link>
                <Link to="/communityengagement/adoptedvillage">
                  <li className="cursor-pointer w-24 flex flex-col items-center justify-center hover:border-[#7600BC] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 border rounded-md border-[#b794cc]  py-1">
                    <img
                      alt="adoptedvillage"
                      className="w-7"
                      src={adoptedvillage}
                    />
                    Adopted Village
                  </li>
                </Link>
              </motion.ul>
            </motion.div>
          </div>

          <div
            className="relative  px-5 py-1"
            onMouseOver={() => setShowPublication(true)}
            onMouseOut={() => setShowPublication(false)}
          >
            <h1
              className="cursor-pointer border-b-2 border-[#7600BC] text-[#4a4a54]"
              style={{
                width: showPublication ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
              }}
            >
              Publication
            </h1>
            <motion.div className="absolute w-[180%] -left-8">
              <motion.ul
                className={` font-normal grid grid-cols-2 px-2 py-3 gap-2 place-content-center place-items-center mt-3 rounded-md  bg-white right-2 border  border-[#9f68be]  ${
                  showPublication ? "block" : "hidden"
                }`}
                variants={dropdownVariants}
                initial="hidden"
                animate={showPublication ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <Link to="/publication/researchpaper">
                  <li className="cursor-pointer w-24 h-20 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 hover:border-[#7600BC] border border-[#b794cc] py-1">
                    <img
                      alt="researchpaper"
                      className="w-7"
                      src={researchpaper}
                    />
                    Research Paper
                  </li>{" "}
                </Link>
                <Link to="/publication/reviewpaper">
                  <li className="cursor-pointer w-24 h-20 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 hover:border-[#7600BC] border border-[#b794cc] py-1">
                    <img alt="reviewpaper" className="w-7" src={reviewpaper} />
                    Review Paper
                  </li>
                </Link>
                <Link to="/publication/populararticles">
                  <li className="cursor-pointer w-24 h-20 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 hover:border-[#7600BC] border  border-[#b794cc] px-7 py-1">
                    <img
                      alt="populararticle"
                      className="w-7"
                      src={populararticle}
                    />
                    Popular Articles
                  </li>
                </Link>
                <Link to="/publication/bookmanual">
                  <li className="cursor-pointer w-24 h-20 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 hover:border-[#7600BC] border border-[#b794cc]  px-7 py-1">
                    <img alt="bookmanual" className="w-7" src={bookmanual} />
                    Book/Manual
                  </li>
                </Link>
                <Link to="/publication/bookchapters">
                  <li className="cursor-pointer w-24 h-20 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 hover:border-[#7600BC] border border-[#b794cc]  px-7 py-1">
                    <img
                      alt="bookchapters"
                      className="w-7"
                      src={bookchapters}
                    />
                    Book Chapters
                  </li>
                </Link>
                <Link to="/publication/handouts">
                  <li className="cursor-pointer w-24 h-20 flex flex-col justify-center items-center rounded-md hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] text-sm text-center font-semibold text-zinc-600 hover:border-[#7600BC]  border border-[#b794cc] py-1">
                    <img alt="handouts" className="w-7" src={handouts} />
                    Handouts
                  </li>
                </Link>
              </motion.ul>
            </motion.div>
          </div>

          <div
            className=" px-5 py-1"
            onMouseOver={() => setShowGallery(true)}
            onMouseOut={() => setShowGallery(false)}
          >
            <h1
              className="cursor-pointer border-b-2 border-[#7600BC] text-[#4a4a54]"
              style={{
                width: showGallery ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
              }}
            >
              Gallery
            </h1>
          </div>

          <div
            className=" px-5 py-1"
            onMouseOver={() => setShowContact(true)}
            onMouseOut={() => setShowContact(false)}
          >
            <h1
              className="cursor-pointer border-b-2 border-[#7600BC] text-[#4a4a54]"
              style={{
                width: showContact ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
              }}
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
