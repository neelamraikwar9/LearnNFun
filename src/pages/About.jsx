import './about.css';

const About = () => {
  return (
    <main>
         <div className="iniContainer">
          <h1 className="textHead initiator">The Initiator</h1>

          <div className="iniCon imgCon">
            <div className="iniImg">
              <img
                src="https://res.cloudinary.com/dltfnhclh/image/upload/v1761490034/Untitled_design_1_vdzi09.png"
                alt="Shubham Pandey"
                className="Sh"
              />
            </div>
            <div className="iniName">
              <h2>Shubham Pandey</h2>
              <p>LNF was created by Shubham, a dedicated learner who believed that everyone deserves a safe and friendly space to practice English. Starting with just a small group, Shubham's vision grew into a vibrant community where people support each other, learn together, and build confidence step by step. Shubham's mission is simple — to help learners grow, connect, and speak freely without fear.</p>
            </div>
          </div>
        </div>

        <div className="iniContainer">
          <h1 className="textHead initiator">
           The Heart of Our Community
          </h1>

          <div className="iniContainer  teContainer">
            <div className="teCon">
              <div className="communitySS">
                <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1764271266/lnf_ss_tzh3gg.webp"
                  alt="img"
                  className="ss"
                />
              </div>
              <div className="teAbout">
                <h2>Community Members</h2>
              </div>
            </div>

          
             
          </div>
        </div>

    </main>


  )
}

export default About;