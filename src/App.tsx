import {  FaBehance, FaInstagram, FaLinkedin, FaSpinner, FaTiktok, FaTimes, FaUserTimes, FaWeight, FaYoutube } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'


const navLinks = [
  {name: "Home", link: "home"},
  {name: "About Us", link: "aboutus"},
  {name: "Why Choose Us", link: "whychooseus"},
  {name: "Contact Us", link: "contactus"},
  {name: "Book Online", link: "bookonline"}
]

const validationSchema = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  phoneno: Yup.number().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().min(15, 'Must be at least 15 characters').required('Required'),
});
const initialValues = {
  firstname: '',
  lastname: '',
  phoneno: '',
  email: '', 
  message: '' ,
};
const onSubmit = (values: any) => {
  console.log('submitted', values)
}
const App = () => {
  return (
    <div className={`bg-black p-0 m-0 scroll-smooth text-white`}>
      <section id="home" className={`px-40 bg-cover bg-center bg-[url('/images/bg_image_hero_section.jpg')] pt-4 pb-16`}>
        <header className={`flex justify-between`}>
          <div className={`flex text-2xl font-bold `}>
            <p>Fit</p>
            <p className={`text-red-600`}>Forge</p>
          </div>
          <nav className={`space-x-12`}>
            {navLinks.map((navLink) => {
              return (
                <a key={navLink.name} href={`#${navLink.link}`}>{navLink.name}</a>
              )
            })}
          </nav>
        </header>
        <div className={`mt-44 ml-36`}>
          <h1 className={`text-6xl font-medium`}>Transform Your Life,</h1>
          <h1 className={`text-6xl font-medium pb-3`}>One Step at a Time</h1>
          <p>Each time you tain you build yourself - stronger muscles, sharper focus</p>
          <p className={`pb-9`}>and an unshakable mindset that carries over into every part of your life</p>
          <a href={`#contactus`} className={`bg-red-600 border-2 border-gray-400 rounded-md px-4 py-2 font-bold text-md`}>
            Book Your Coach
          </a>
        </div>
      </section>
      <section className={` px-40 pt-16 pb-16 relative overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
            <div className={`w-[1000px] h-[600px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex gap-16 h-96 relative z-10`}>
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
      <section id="whychooseus" className={`px-40 pt-16 pb-16 flex relative overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
          <div className={`w-[1000px] h-[800px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex justify-between items-center gap-4`}>
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
              <a href={`#contactus`} className={`relative z-10 border-2 border-red-400 rounded-md px-8 py-2 font-bold text-md`}>
                Join Now
              </a>
            </div>
          </div>
          <div className={`h-[600px] flex-3/7 border-gray-400 border-2 rounded-2xl`}>
              <img src="/images/contact_section_image.jpg" alt="" className={`h-full w-full rounded-2xl`}/>
          </div>
        </div>
      </section>
      <section id="aboutus" className={`px-40 pt-16 pb-16 flex relative overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
          <div className={`w-[1000px] h-[800px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex justify-between items-center gap-16`}>
          <div className="h-[550px] flex-3/7 border-gray-400 border-2 rounded-xl">
            <img src="/images/card1.jpg" alt="card1"  className={`h-full w-full rounded-xl`}/>
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
      <section id="contactus" className={`px-40 pt-16 pb-16 flex relative overflow-hidden`}>
        <div className={`absolute inset-0 flex justify-center items-center z-0`}>
          <div className={`w-[1000px] h-[600px] bg-white opacity-10 blur-[120px] rounded-full`}></div>
        </div>
        <div className={`flex items-center gap-7 justify-between`}>
            <div className={``}>
              <h1 className={`font-bold text-5xl text-red-700`}>Let's plan your next routine together</h1>
              <p className={`pt-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore
              </p>
              <div className={` flex gap-3 text-red-700 my-10`}>
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
            <div className={`border-3 rounded-xl border-gray-500 p-5`}>
              <h3 className={`font-bold text-3xl text-red-700`}>Get in touch</h3>
              <Formik 
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
                <Form>
                  <div className={`flex gap-5 pt-3`}>
                    <div className={`flex-1/2 flex flex-col`}>
                      <label htmlFor="firstname" className={`text-red-700`}>FirstName</label>
                      <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='firstname' name='firstname' />
                      <ErrorMessage name="firstname" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                      </ErrorMessage>
                    </div>
                    <div className={`flex-1/2 flex flex-col`}>
                      <label htmlFor="lastname" className={`text-red-700`}>LastName</label>
                      <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='lastname' name='lastname' />
                      <ErrorMessage name="lastname" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className={`flex gap-5 pt-3`}>
                    <div className={`flex-1/2 flex flex-col`}>
                      <label htmlFor="email" className={`text-red-700`}>Email</label>
                      <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='email' name='email' />
                      <ErrorMessage name="email" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                      </ErrorMessage>
                    </div>
                    <div className={`flex-1/2 flex flex-col`}>
                      <label htmlFor="phoneno" className={`text-red-700`}>Phone no.</label>
                      <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='phoneno' name='phoneno' />
                      <ErrorMessage name="phoneno">
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className={`flex-1/2 flex flex-col`}>
                    <label htmlFor="meassage" className={`text-red-700`}>Message</label>
                    <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm text-white`} as='textarea' rows='4' id='message' name='message' />
                    <ErrorMessage name="message" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                    </ErrorMessage>
                  </div>
                  <button className="mt-5 relative z-10 bg-red-600 border-2 border-gray-400 rounded-md px-7 py-1 font-bold text-md">Submit</button>
                </Form>
              </Formik>
            </div>
        </div>
      </section>
    </div>
  )
}

export default App
