import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

const LandingPage = () => {
  return (
    <main className="body">
      <div className="background">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="lines">
          <h1 className="midh1" style={{}}>
            Discover How We Enhance Your English Communication Skills
          </h1>
          <p className="midp1">
            "Expand your learning circle to get rid of contraction in life."{" "}
          </p>
          <button className="midBtn">Learn More</button>
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
              communication through interactive and engaging classes.
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

        {/* <div className="iniContainer">
          <h1 className="textHead initiator">The Initiator</h1>

          <div className="iniCon">
            <div className="iniImg">
              <img
                src="https://res.cloudinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                alt="Shubham Pandey"
                className="Sh"
              />
            </div>
            <div className="iniName">
              <h2>Shubham Pandey</h2>
            </div>
          </div>
        </div>

        <div className="iniContainer">
          <h1 className="textHead initiator">
            Meet a Few of Our Team Members
          </h1>

          <div className="iniContainer  teContainer">
            <div className="teCon">
              <div className="">
                <img
                  src="https://res.clodinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                  alt="img"
                  className="Sh"
                />
              </div>
              <div className="teAbout">
                <h2>person name</h2>
              </div>
            </div>

            <div className="teCon">
              <div className="">
                <img
                  src="https://res.clodinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                  alt="img"
                  className="Sh"
                />
              </div>
              <div className="teAbout">
                <h2>person name</h2>
              </div>
            </div>

            <div className="teCon">
              <div className="">
                <img
                  src="https://res.clodinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                  alt=""
                  className="Sh"
                />
              </div>
              <div className="teAbout">
                <h2>person name</h2>
              </div>
            </div>

            <div className="teCon">
              <div className="">
                <img
                  src="https://res.cldinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                  alt=""
                  className="Sh"
                />
              </div>
              <div className="teAbout">
                <h2>person name</h2>
              </div>
            </div>

            <div className="teCon">
              <div className="">
                <img
                  src="https://res.clodinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                  alt=""
                  className="Sh"
                />
              </div>
              <div className="teAbout">
                <h2>person name</h2>
              </div>
            </div>
          </div>
        </div> */}

        <div className="iniContainer">
          <h1 className="textHead initiator">Class Schedule</h1>
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
            <button className=" scheduleBtn midBtn">Schedule Detail</button>
            </div>
            </div>
          </div>
        </div>







        <div>
          <div>
            <h1>wondering to join?</h1>
            
          </div>
        </div>
      </div>

      {/* <div className="bigContainer">
        <div className="missionStatement">
          <h1 className="statement">
            <span style={{ color: "red" }}> Learn </span>{" "}
            <span style={{ color: "black" }}>'N'</span>
            <span>Fun</span>
          </h1>
        </div>
        <div className="missionStatement">
          <h1 className="statement">
            ENGLISH FLUENCY <span style={{ color: "red" }}>THROUGH </span>
            CONVERSATION
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ border: "1px solid red" }}>
            <h2>Outcomes:</h2>
            <p style={{ margin: "0.5rem" }}>✔️Soft Skills</p>
            <p style={{ margin: "0.5rem" }}>✔️Communication Skills</p>
            <p style={{ margin: "0.5rem" }}>✔️Leadership Development</p>
            <p style={{ margin: "0.5rem" }}>✔️General Awareness</p>
          </div>

          <div style={{ border: "1px solid red" }}>
            <h2>Facilities:</h2>
            <p style={{ margin: "0.5rem" }}>
              ✔️Access To All Grammer Materials
            </p>
            <p style={{ margin: "0.5rem" }}>
              ✔️Access To More Than 100 Life Changing Novels
            </p>
            <p style={{ margin: "0.5rem" }}>✔️Virtual Learning Environment</p>
            <p style={{ margin: "0.5rem" }}>
              ✔️Interaction With People From Various Aspect Of Life
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default LandingPage;
