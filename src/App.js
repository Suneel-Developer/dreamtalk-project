import "./App.css";
import logo from "./assets/logo.png";
import dreamTalk from "./assets/DreamTalk.png";
import LiveImage from "./assets/MacBook Pro 16_ - 12.png";
import Ellipse from "./assets/Ellipse.png";
import ChatbotImage from "./assets/Rectangle.png";
import { BsArrowRight } from "react-icons/bs";
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import {
  AiOutlineInstagram,
  AiOutlineDollarCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";

function App() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="logo">
            <img src={logo} alt="Logo" className="logoImage" />
            <img src={dreamTalk} alt="sub Logo" className="subLogo" />
          </div>
          <div className="hero_content">
            <h1 className="hero_heading">
              Interact <br /> Inspire <br /> Innovate
            </h1>
            <p className="hero_details">
              Introducing an AI chatbot on Telegram, designed specifically for
              Instagram influencers. The chatbot provides a unique platform for
              interacting with fans through
            </p>
            <div className="inputField">
              <input type="text" placeholder="e.g. hello@dreamtalk.ai" />
              <button className="btn primary">Join Waitlist</button>
            </div>
          </div>
        </div>
      </section>











      <section className="text_div">
        <div className="headingdiv">
          <span className="textheading">The possibilities are beyond </span>
          <span className="subheading"> your imagination</span>
        </div>
        <div className="textArrow" ></div>
        <p className="textdetails">
          <span>
            Lorem ipsum dolor sit amet consectetur. Gravida a pretium id id
            lacus tellus mauris quis scelsque. amet consectetur mauris quis
            sceleri.
          </span>
        </p>
      </section>
{/* -----------------------------------------------------features */}
      <div className="featuresheading">
        <h1 className="heading">Features</h1>
        <p>
          Lorem ipsum dolor sit amet constur. Gravida pretium id id lacus tellus
          mauris quis scelerisque. amet
        </p>
      </div>
      <div className="features">
        <div className="featuresBox">

          <div className="Box">
            <div className="icon filterIcon">
              <TbAdjustmentsHorizontal className="fIcon" />
            </div>
            <p className="fdetail">
              Personalized experience tailored to each user's preferences
            </p>
          </div>

          <div className="Box">
            <div className="icon dollarIcon">
              <AiOutlineDollarCircle className="fIcon " />
            </div>
            <p className="fdetail">
              Sell physical and digital content directly through built-in store
            </p>
          </div>

          <div className="Box">
            <div className="icon">
              <AiOutlineInstagram className="fIcon" />
            </div>
            <p className="fdetail">
              Integration with Instagram for seamless fan interaction
            </p>
          </div>

        </div>
      </div>
      
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <button className="btn">
          {" "}
          See All Features <BsArrowRight style={{ fontWeight: "bold" }} />
        </button>
      </div>

      {/* --------------- Chatbot section    */}

      <section className="chatBot">
        <div className="chatbot_heading">
          <h1 className="heading">Monetize Your Fanbase with Our </h1>
          <h1 className="heading chatbotsubheading subheading">AI Chatbot</h1>
        </div>
        <div className="chatbot_container">
          <div className="chatbotImage">
            <img src={ChatbotImage} alt="" />
          </div>
          <div className="chatbotDetails">
            <div className="chatbot_heading mobileheading">
              <h1 className="heading">Monetize Your Fanbase with Our  <span className="heading subheading">AI Chatbot</span></h1>
               
            </div>
            <div>
              <p className="chattext">
                Monetize your fanbase with our AI chatbot on Telegram designed
                for Instagram influencers. Connect with fans like never before
                and offer premium content, while also selling physical and
                digital items directly through the chatbot.
              </p>
              <div className="chatbotBtn">
                <button className="btn">Join the Waitlist <BsArrowRight /> </button>
                <button className="btn subbtn">Conatct us <BsArrowRight /> </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- live_section */}
      <section className="live_section">
        <div>
          <h1 className="heading">Unparalleled Insights</h1>
          <div className="livedetails">
            <h1 className="heading subheading">Live Analytics</h1>
            <span className="details">
              Revolutionize your Instagram influence with Unparalleled Insights
              & Live Analytics. Harness our AI chatbot on Telegram to foster
              deeper connections with fans, offer premium content, and sell
              merchandise directly through engaging conversations.
            </span>
          </div>
        </div>
        <div className="imagediv">
          <img src={LiveImage} alt="" />
        </div>
      </section>

      {/* ----------------------------------------------------------------newsletter_container */}
      <section className="newsletter_container">
        <div className="newsletter">
          <img src={Ellipse} alt="" className="roundImage" />
          <div className="subscribe_container">
            <h1 className="heading">Subscribe to Newsletter</h1>
            <div className="inputfield">
              <input
                type="text"
                placeholder="Join the AI chatbot revolution - Be?"
              />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------footer */}
      <section className="footer">
        <div className="col">
          <h1 className="fheading">SET A TWO LINES TEXT HERE TO LOOK COOL</h1>
          <div className="footerIcon">
            <AiFillGithub />
            <FaSnapchatGhost />
            <AiFillFacebook />
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Policy</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Contact</li>
            <li>Email</li>
            <li>Telegram</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Branding</li>
            <li>Customers</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
