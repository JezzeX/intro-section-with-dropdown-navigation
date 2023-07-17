/* eslint-disable react/prop-types */
import "./App.css";
import menuIcon from "./images/icon-menu.svg";
import downArrow from "./images/icon-arrow-down.svg";
import upArrow from "./images/icon-arrow-up.svg";
import closeMenuIcon from "./images/icon-close-menu.svg";
import heroImage from "./images/image-hero-mobile.png";
import desktopHero from "./images/image-hero-desktop.png";
import audiophileIcon from "./images/client-audiophile.svg";
import databizIcon from "./images/client-databiz.svg";
import makerIcon from "./images/client-maker.svg";
import meetIcon from "./images/client-meet.svg";
import todoIcon from "./images/icon-todo.svg";
import calendarIcon from "./images/icon-calendar.svg";
import reminderIcon from "./images/icon-reminders.svg";
import planningIcon from "./images/icon-planning.svg";
import { useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function toggleMenu() {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  }
  const [featuresIsOpen, setFeaturesIsOpen] = useState(false);
  const [companyIsOpen, setCompanyIsOpen] = useState(false);

  return (
    <section className="font-epilogue relative">
      <section className="absolute min-w-full">
        <Navbar
          setCompanyIsOpen={setCompanyIsOpen}
          setFeaturesIsOpen={setFeaturesIsOpen}
          toggleMenu={toggleMenu}
          featuresIsOpen={featuresIsOpen}
          companyIsOpen={companyIsOpen}
        />
        <div className="lg:flex lg:flex-row-reverse lg:gap-20  lg:w-[70rem] mx-auto">
          <Image />
          <HeroDetails />
        </div>
      </section>

      {/* Menu overlay */}
      <section
        className={`${
          !menuIsOpen && "hidden"
        } fixed w-full min-h-full bg-black bg-opacity-30 flex justify-end`}
      >
        <div className="bg-white w-2/3 flex flex-col px-5 pt-5 gap-5 text-lg">
          <img
            onClick={toggleMenu}
            src={closeMenuIcon}
            alt="close menu icon"
            className="w-8 h-8 self-end"
          />
          <ul className="flex flex-col gap-5">
            <li>
              <div
                onClick={() =>
                  setFeaturesIsOpen((featuresIsOpen) => !featuresIsOpen)
                }
                className="flex items-center gap-3"
              >
                Features
                <img
                  src={featuresIsOpen ? upArrow : downArrow}
                  alt="down arrow"
                  className="w-3 h-2"
                />
              </div>
              {featuresIsOpen && (
                <ul className="pt-4 pl-4 flex flex-col gap-3">
                  <li className="flex gap-3 items-center">
                    <img src={todoIcon} alt="" className="w-5 h-5" />
                    Todo List
                  </li>
                  <li className="flex gap-3 items-center">
                    <img src={calendarIcon} alt="" className="w-5 h-5" />
                    Calendar
                  </li>
                  <li className="flex gap-3 items-center">
                    <img src={reminderIcon} alt="" className="w-5 h-5" />
                    Reminder
                  </li>
                  <li className="flex gap-3 items-center">
                    <img src={planningIcon} alt="" className="w-5 h-5" />
                    Planning
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                onClick={() =>
                  setCompanyIsOpen((companyIsOpen) => !companyIsOpen)
                }
                className="flex items-center gap-3"
              >
                Company
                <img
                  src={companyIsOpen ? upArrow : downArrow}
                  alt="down arrow"
                  className="w-3 h-2"
                />
              </div>
              {companyIsOpen && (
                <ul className="pt-4 pl-4 flex flex-col gap-3">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              )}
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>

          <button>login</button>
          <button className="border border-almostBlack py-3 rounded-xl ">
            Register
          </button>
        </div>
      </section>
    </section>
  );
}

function Navbar({
  toggleMenu,
  setCompanyIsOpen,
  setFeaturesIsOpen,
  companyIsOpen,
  featuresIsOpen,
}) {
  return (
    <nav>
      <ul className="flex justify-between lg:justify-normal lg:gap-20 p-5 items-center w-full lg:px-10 text-mediumGray">
        <li className="font-bold text-4xl text-almostBlack">snap</li>
        <ul className="hidden lg:flex gap-10 items-center w-full">
          <li>
            <div
              onClick={() =>
                setFeaturesIsOpen((featuresIsOpen) => !featuresIsOpen)
              }
              className="flex items-center gap-3 hover:text-almostBlack hover:cursor-pointer"
            >
              Features
              <img
                src={featuresIsOpen ? upArrow : downArrow}
                alt="down arrow"
                className="w-3 h-2 "
              />
            </div>
            {featuresIsOpen && (
              <ul className="absolute px-8 py-5 rounded-lg shadow-lg left-28 mt-5 bg-white  flex flex-col gap-3">
                <li className="flex gap-3 items-center">
                  <img src={todoIcon} alt="" className="w-5 h-5" />
                  Todo List
                </li>
                <li className="flex gap-3 items-center">
                  <img src={calendarIcon} alt="" className="w-5 h-5" />
                  Calendar
                </li>
                <li className="flex gap-3 items-center">
                  <img src={reminderIcon} alt="" className="w-5 h-5" />
                  Reminder
                </li>
                <li className="flex gap-3 items-center">
                  <img src={planningIcon} alt="" className="w-5 h-5" />
                  Planning
                </li>
              </ul>
            )}
          </li>

          <li>
            <div
              onClick={() =>
                setCompanyIsOpen((companyIsOpen) => !companyIsOpen)
              }
              className="flex items-center gap-3 hover:text-almostBlack hover:cursor-pointer"
            >
              Company
              <img
                src={companyIsOpen ? upArrow : downArrow}
                alt="down arrow"
                className="w-3 h-2"
              />
            </div>
            {companyIsOpen && (
              <ul className="absolute px-8 py-5 rounded-lg shadow-lg left-80 mt-5 bg-white  flex flex-col gap-3">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            )}
          </li>
          <li className="hover:text-almostBlack hover:cursor-pointer">
            Careers
          </li>
          <li className="hover:text-almostBlack hover:cursor-pointer">About</li>
        </ul>
        <div className="hidden lg:flex items-center gap-10">
          <li>
            <button className="hover:text-almostBlack">login</button>
          </li>
          <li>
            <button className="border hover:text-almostBlack hover:border-almostBlack border-mediumGray py-3 rounded-xl lg:px-6 lg:py-2 ">
              Register
            </button>
          </li>
        </div>
        <li className="lg:hidden">
          <img onClick={toggleMenu} src={menuIcon} alt="menuIcon" />
        </li>
      </ul>
    </nav>
  );
}

function Image() {
  return (
    <>
      <img src={heroImage} alt="hero image mobile" className="lg:hidden" />
      <img
        src={desktopHero}
        alt=""
        className="hidden lg:block self-start w-1/2"
      />
    </>
  );
}

function HeroDetails() {
  return (
    <section className="pt-10 lg:mt-32 flex flex-col gap-4 items-center justify-center lg:items-start lg:gap-14">
      <h1 className="font-bold text-4xl text-center lg:text-left lg:text-7xl ">
        Make remote work
      </h1>
      <p className="text-center text-lg lg:text-left text-mediumGray">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar
      </p>

      <button className="transition ease-linear delay-100 bg-black text-lg font-bold border-black border-2 text-white w-30 py-4 px-7 rounded-2xl hover:bg-white hover:text-black">
        Learn more
      </button>

      <ul className="pt-10 pb-20 px-5 gap-5 flex lg:pt-20 ">
        <li>
          <img src={databizIcon} />
        </li>
        <li>
          <img src={audiophileIcon} />
        </li>
        <li>
          <img src={meetIcon} />
        </li>
        <li>
          <img src={makerIcon} />
        </li>
      </ul>
    </section>
  );
}

export default App;
