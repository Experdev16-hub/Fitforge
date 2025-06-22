import { FaBars, FaBehance, FaInstagram, FaLinkedin, FaSpinner, FaTiktok, FaTimes, FaUserTimes, FaWeight, FaYoutube } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import Seo from "./components/helmet"
import FormComp from "./components/form"
import { useState } from "react"


const navLinks = [
  {name: "Home", link: "home"},
  {name: "About Us", link: "aboutus"},
  {name: "Why Choose Us", link: "whychooseus"},
  {name: "Contact Us", link: "contactus"},
  {name: "Book Online", link: "bookonline"}
]


const App = () => {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <div className={`bg-black p-0 m-0 scroll-smooth text-white`}>
      <Seo />
      <section id="home" className={`lg:px-40 md:px-32 sm:px-28 px-16 bg-cover bg-center bg-[url('/images/bg_image_hero_section.jpg')] pt-4 lg:pb-16 pb-12`}>
        <header className={`flex justify-between items-center`}>
          <div className={`flex text-2xl font-bold `}>
            <p>Fit</p>
            <p className={`text-red-600`}>Forge</p>
          </div>
          <nav className={`lg:hidden block `}>
            <button 
            onClick={toggleMenu}
            className={`text-red-700 z-10`}>
                {isOpen ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </button>
          </nav>
          {
            isOpen && (
            <nav className={`text-center lg:hidden block transition-all duration-300 absolute bg-red-700 p-7 rounded-lg shadow-lg w-64 h-screen top-9 right-0 mt-2 z-40`}> 
              <ul className={`flex flex-col gap-12`}>
                {navLinks.map((navLink) => {
                  return (
                    <li key={navLink.name} ><a href={`#${navLink.link}`}>{navLink.name}</a></li>
                  )
                })}
              </ul>
            </nav>
            )
          }
          <nav className={`space-x-12 hidden lg:block`}>
            {navLinks.map((navLink) => {
              return (
                <a key={navLink.name} href={`#${navLink.link}`} className={`hover:text-red-500`}>{navLink.name}</a>
              )
            })}
          </nav>
        </header>
        <div className={`lg:mt-44 lg:ml-36 md:mt-28 md:ml-20 mt-12 ml-8`}>
          <h1 className={`lg:text-6xl md:font-medium md:text-5xl sm:text-4xl text-3xl font-normal`}>Transform Your Life,</h1>
          <h1 className={`lg:text-6xl md:font-medium md:text-5xl sm:text-4xl text-3xl font-normal pb-3`}>One Step at a Time</h1>
          <p>Each time you tain you build yourself - stronger muscles and sharper focus</p>
          <p className={`pb-9`}>An unshakable mindset that carries over into every part of your life</p>
          <a href={`#contactus`} className={`bg-red-600 border-2 border-gray-400 rounded-md md:px-4 md:py-2 py-1 px-2 font-bold text-md`}>
            Book Your Coach
          </a>
        </div>
      </section>
      <section className={`lg:px-40 md:px-32 sm:px-28 px-16 lg:pt-16 lg:pb-16 pt-10 pb-2 relative lg:overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
            <div className={`w-[1000px] h-[600px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex lg:flex-row flex-col lg:gap-16 gap-12 h-96 sm:h-[1200px] lg:h-96 relative z-10`}>
          <div className=" border-2 border-gray-400 h-full rounded-xl p-5 flex items-center flex-col justify-center bg-cover bg-center bg-[url('/images/card1.jpg')]">
            <h1 className={`text-red-600 font-bold text-9xl`}>01</h1>
            <p>Lorem ipsum dolor siit amet consectual elementum partur amit datum amait et amet consectuL</p>
          </div>
          <div className=" border-2 border-gray-400 h-full rounded-xl p-5 flex items-center flex-col justify-center bg-cover bg-center bg-[url('/images/card3.jpg')]">
            <h1 className={`text-red-600 font-bold text-9xl`}>02</h1>
            <p>Lorem ipsum dolor siit amet consectual elementum partur amit datum amait et amet consectuL</p>
          </div>
          <div className=" border-2 border-gray-400 h-full rounded-xl p-5 flex items-center flex-col justify-center bg-cover bg-center bg-[url('/images/card2.jpg')]">
            <h1 className={`text-red-600 font-bold text-9xl`}>03</h1>
            <p>Lorem ipsum dolor siit amet consectual elementum partur amit datum amait et amet consectuL</p>
          </div>
        </div>
      </section>
      <section id="whychooseus" className={`lg:px-40 md:px-32 sm:px-28 px-16 lg:pt-16 lg:pb-16 pt-10 pb-5 flex relative lg:overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
          <div className={`w-[1000px] h-[800px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex flex-col-reverse lg:flex-row justify-between items-center gap-12 md:gap-0 mt-[450px] lg:mt-0`}>
          <div className="flex-4/7">
            <h1 className={`font-bold text-5xl text-red-700`}>Be You Just Stronger!</h1>
            <h1 className={`font-bold text-5xl text-red-700`}>Power is in you</h1>
            <div className="px-12 flex items-center gap-5 justify-around pt-5">
              <div className={` text-red-700`}>
                <FaWeight size={25} />
              </div>
              <div className={`w-fit`}>
                <h3 className={`font-medium text-xl`}>
                  Personalised Experience
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>
            <div className="px-12 flex items-center gap-5 justify-around pt-5">
              <div className={` text-red-700`}>
                <FaSpinner size={25} />
              </div>
              <div className={`w-fit`}>
                <h3 className={`font-medium text-xl`}>
                  Pro Equipment
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>
            <div className="px-12 flex items-center gap-5 justify-around pt-5">
              <div className={` text-red-700`}>
                <FaTimes size={25} />
              </div>
              <div className={`w-fit`}>
                <h3 className={`font-medium text-xl`}>
                  Worry Free Planning
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>
            <div className="px-12 flex items-center gap-5 justify-around pt-5">
              <div className={` text-red-700`}>
                <FaUserTimes size={25} />
              </div>
              <div className={`w-fit`}>
                <h3 className={`font-medium text-xl`}>
                  Flexible Time
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>
            <div className={`px-12 pt-7`}>
              <a href={`#contactus`} className={`relative z-10 object-cover border-2 border-red-400 rounded-md px-8 py-2 font-bold text-md`}>
                Join Now
              </a>
            </div>
          </div>
          <div className={`h-[600px] flex-3/7 border-gray-400 border-2 rounded-2xl`}>
              <img src="/images/contact_section_image.jpg" alt="" className={`h-full w-full rounded-2xl`}/>
          </div>
        </div>
      </section>
      <section id="aboutus" className={`lg:px-40 md:px-32 sm:px-28 px-16 lg:pt-16 lg:pb-16 pt-2 pb-2 flex relative overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
          <div className={`w-[1000px] h-[800px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16`}>
          <div className="h-[550px] flex-3/7 border-gray-400 border-2 rounded-xl">
            <img src="/images/card1.jpg" alt="card1"  className={`h-full w-full rounded-xl object-cover`}/>
          </div>
          <div className="flex-4/7">
            <h1 className={`font-bold text-5xl text-red-700`}>We don't just dream it, We work for it</h1>
            <p className={`pt-7`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={`pt-7`}>
              <a href={`#contactus`} className={`relative z-10 border-2 border-red-400 rounded-md px-4 py-2 font-bold text-md`}>
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contactus" className={`lg:px-40 md:px-32 sm:px-28 px-16 lg:pt-16 lg:pb-16 pt-2 pb-10 flex relative overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
          <div className={`w-[1000px] h-[600px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-7 justify-between`}>
            <div className={``}>
              <h1 className={`font-bold text-5xl text-red-700`}>Let's plan your next routine together</h1>
              <p className={`pt-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore
              </p>
              <div className={`flex-1/5 flex gap-3 text-red-700 my-10`}>
                <FaMessage size={25} />
                <p className={`text-white`}>Email us: yourname@gmail.com</p>
              </div>
              <h3 className={`font-bold text-3xl text-red-700`}>Based online serving wanderers worldwide</h3>
              <div className="flex gap-2 pt-5">
                <FaInstagram size={20} color="white"/>
                <FaBehance size={20} color="white"/>
                <FaLinkedin size={20} color="white"/>
                <FaYoutube size={20} color="white"/>
                <FaTiktok size={20} color="white"/>
              </div>
            </div>
            <div className={`flex-4/5 border-3 rounded-xl border-gray-500 p-5 `}>
              <h3 className={`font-bold text-3xl text-red-700`}>Get in touch</h3>
              <FormComp />
            </div>
        </div>
      </section>
    </div>
  )
}

export default App
