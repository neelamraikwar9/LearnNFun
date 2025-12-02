import './about.css';

const About = () => {
  return (
    <main>
         <div className="iniContainer">
          <h1 className="textHead initiator">The Initiator</h1>

          <div className="iniCon imgCon">
            <div className="iniImg">
              <img
                src="https://res.cloudinary.com/dltfnhclh/image/upload/v1764702808/sh_ss_g4afva.jpg"
                alt="Shubham Pandey"
                className="Sh"
              />
            </div>
            <div className="iniName">
              <h2>Mr. Shubham Pandey</h2>
              <p>LNF was created by Mr. Shubham 
              and a few others
               on 18 March 2023, with a shared hope of coming together to improve their English. He is a dedicated learner who believed that everyone deserves a safe and friendly space to practice English. Starting with just a small group, Shubham's vision grew into a vibrant community where people support each other, learn together, and build confidence step by step. Shubham's mission is simple — to help learners grow, connect, and speak freely without fear.</p>
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

               <br/>
               <div>
               <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1764704370/lnf_ss3_q3q3vl.webp"
                  alt="img"
                  className=""
                />
                </div>

              <div className="teAbout">
                <h2>Our Community Members</h2>
              </div>
              <br/>

              <div className="communitySS">
                <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1764702846/lnf_ss2_qepa5q.webp"
                  alt="img"
                  className="ss"
                />
              </div>
              <div className="teAbout">
                <h2>Our Growing Community</h2>
              </div>



              {/* <div className="communitySS"> */}
                <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1764702831/lnf_ss1_zkf1kr.webp"
                  alt="img"
                  className="ss" style={{width: '45rem', }}
                />
              {/* </div> */}
              <div className="teAbout">
                <h2>Learners Who Make LNF Special</h2>
              </div>


            </div>


            

          
             
          </div>
        </div>

    </main>


  )
}

export default About;