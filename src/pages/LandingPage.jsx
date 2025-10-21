import Navbar from "../components/Navbar";
const LandingPage = () => {

    return(
        <main className="body">
        <Navbar/>
        <br/>
        <br/>

        <div className="imgContainer">
            <div className="imgSecCont">
            {/* <img src="" alt=""/> */}
            </div>
 
            <div className="shortInfoCon">
            <h1>About Us</h1>
            <p>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            </div>
            </div>

        
        <div className="bigContainer">
        <div className="missionStatement">
        <h1 className="statement"><span style={{color: 'red'}}> Learn </span> <span style={{color: 'black'}}>'N'</span><span>Fun</span></h1>
        </div>
        <div className="missionStatement">
        <h1 className="statement">ENGLISH FLUENCY <span style={{color: 'red'}}>THROUGH </span>CONVERSATION</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{border: '1px solid red' }}>
        <h2>Outcomes:</h2>
        <p style={{margin: '0.5rem'}}>✔️Soft Skills</p>
        <p style={{margin: '0.5rem'}}>✔️Communication Skills</p>
        <p style={{margin: '0.5rem'}}>✔️Leadership Development</p>
        <p style={{margin: '0.5rem'}}>✔️General Awareness</p>
        </div>
 
         <div style={{border: '1px solid red' }}>
        <h2>Facilities:</h2>
        <p style={{margin: '0.5rem'}}>✔️Access To All Grammer Materials</p>
        <p style={{margin: '0.5rem'}}>✔️Access To More Than 100 Life Changing Novels</p>
        <p style={{margin: '0.5rem'}}>✔️Virtual Learning Environment</p>
        <p style={{margin: '0.5rem'}}>✔️Interaction With People From Various Aspect Of Life</p>
        </div>
        </div>


        </div>

        
        </main>
    )
}

export default LandingPage;