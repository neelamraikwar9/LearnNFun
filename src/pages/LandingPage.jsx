import './landing.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const [attend, setAttend] = useState(false);
  const [expect, setExpect] = useState(false);
  const [leads, setLeads] = useState(false);

  function attendFun(){
    setAttend(!attend)
  }

  function expectFun(){
    setExpect(!expect)
  }

  function leadsFun(){
    setLeads(!leads)
  }

  return (
    <main className="body">
      <div className="background">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>

        <div className="lines">
          <h1 className="midh1" style={{}}>
            Discover How We Enhance Your English Communication Skills
          </h1>
          <p className="midp1">
            "Expand your learning circle to get rid of contraction in life."{" "}
          </p>
          <Link to="/about">
          <button className="midBtn">Learn More</button>
          </Link>
        </div>
      </div>
      <br />

      <div className="container">
        <div className="vibrantCon">
          <img
            src="https://res.cloudinary.com/dltfnhclh/image/upload/v1761486685/Untitled_design_ndthtg.png"
            alt="communityImg"
            className="imgCon"
          />
          <div className="vibText">
            <h1 className="textHead">Our Vibrant English Community</h1>
            <p className="miss">
              At Learn 'N' Fun, we're on a mission to revolutionize English
              communication with General Awareness through interactive and engaging classes.
            </p>
            <br />
            <br />

            <p>
              <i>
                " Strength is Life, Weakness is Death. Expansion is Life,
                Contraction is Death. Love is Life, Hatred is Death. "{" "}
              </i>
            </p>
          </div>
        </div>

        <div className="iniContainer">
          <h1 className="textHead  headText">ENGLISH FLUENCY {""} <span style={{color: 'white'}}>THROUGH</span> CONVERSATION </h1>

          <div className="iniCon">
            <div className="iniImg">
             <h1>Outcomes:</h1>
              <p>✔️Soft Skills</p>
              <p>✔️Communication Skills</p>
            <p>✔️Leadership Development</p>
            <p>✔️General Awareness</p>
            </div>
            <div className="iniName">
              <h1>Facilities:</h1>
              <p>
              ✔️Access To All Grammer Materials
            </p>
            <p >
              ✔️Access To More Than 100 Life Changing Novels
            </p>
            <p>✔️Virtual Learning Environment</p>
            <p >
              ✔️Interaction With People From Various Aspect Of Life
            </p>
            </div>
          </div>
        </div>

        


        <div className="iniContainer">
          <h1 className="textHead headText headStyle">Schedule</h1>
          <div className="sceduleCon">
          <div className="attendUsContainer">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            <h1>Attend Us!</h1>
            <div className="attendUsCon">
              <div className="schBox">
                <i
                  class="bi bi-calendar3"
                  style={{
                    fontSize: "2rem",
                    color: "greenyellow",
                    border: "1px solid green",
                    padding: "1rem",
                  }}
                ></i>
                <p>
                  <i>Every Saturday to Wednesday (5 Days A Week)</i>
                </p>
              </div>

              <div className="schBox">
                <i
                  class="bi bi-alarm-fill"
                  style={{
                    fontSize: "2rem",
                    color: "greenyellow",
                    border: "1px solid green",
                    padding: "1rem",
                  }}
                ></i>
                <p>
                  <i>7:15 to 8:15</i>
                </p>
              </div>

              <div className="schBox">
                <i
                  class="bi bi-geo-alt-fill"
                  style={{
                    fontSize: "2rem",
                    color: "greenyellow",
                    border: "1px solid green",
                    padding: "1rem",
                  }}
                ></i>
                <p>
                  <i>Online - Via Google Meet</i>
                </p>
              </div>
            </div>
 

            <div className="message">
              <p>
                Join us to elevate your speaking skills in a welcoming class
                designed for speakers of all backgrounds and experience levels.
                Whether you're just beginning your speaking journey or looking
                to refine your abilities, you'll gain valuable insights and
                expert guidance to boost your confidence and effectiveness.
                Benefit from our expertise and take your speaking prowess to the
                next level.
              </p>
            </div>
            <div className="schBtnCon">
            <Link to="/schedule">
            <button className=" scheduleBtn midBtn">Schedule Detail</button>
            </Link>
            </div>
            </div>
          </div>
        </div>







        <div className="iniContainer">
          
            <h1 className="textHead headText headStyle" style={{paddingLeft: '27rem'}}>Wondering to join?</h1>
            <div className="sceduleCon">
            <div className="attendUsContainer">
              <h1> FAQs</h1>
              <div className="qsContainer">

              <div className="qCon">
              <p >Who can attend these classes?</p>
              <button onClick={attendFun} className="plsBtn">{attend ? "➖" : "➕"}</button>
              </div>
              {attend && <p>Our classes are open to all learners who have at least basic English-speaking ability. Whether you’re at an elementary level, improving your fluency, or already advanced and looking to refine your communication skills, everyone is welcome to join and grow with us.</p>}
              
             
             <div className="qCon">
              <p>What can I expect to learn in these classes?</p>
              <button onClick={expectFun}>{expect ? "➖" : "➕"}</button>
              </div>
              {expect && <p>You’ll gain valuable insights and practical techniques to enhance your speaking skills, focusing on clarity, confidence, and effective communication. Along with improving your English, you’ll also develop better social skills, learn to communicate comfortably with different people, and build general knowledge through interactive discussions, activities, and real-life topics.</p>}
            

              <div className="qCon">
              <p>Who leads these classes?</p>
              <button onClick={leadsFun}>{attend ? "➖" : "➕"}</button>
               </div>
              {leads && <p>Our classes are led by active LNF members who have been practicing English in the community for 5-6 months or more. They have gained enough confidence and experience to guide sessions, lead activities, and support other learners. They are not professional teachers, but enthusiastic learners who grow together with the community.</p>}
             

              </div>
            </div>
            
          </div>
        </div>
      </div>

    
    </main>
  );
};

export default LandingPage;
