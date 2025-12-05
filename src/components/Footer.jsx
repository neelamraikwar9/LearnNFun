
import './footer.css';

const Footer = () => {
  return (
    <footer className="footerCon">

    <div className="footerBox">
    <div className="footCon">
    <a href="tel:+919015256338" style={{ marginTop: "2rem", fontSize: '2rem'}}>
      <i className="bi bi-telephone-fill hoverStyl" style={{padding: '0', marginTop: '2rem', color: "greenyellow"}}></i>
       </a>
    </div>

    <div className="footCon">
    <a href="mailto:learnnfun3@gmail.com"  style={{marginTop:'2rem', fontSize: '2rem'}}>
      <i className="bi bi-envelope-at-fill hoverStyl" style={{padding: '0', marginTop: '2rem', marginLeft: '2rem', color: "greenyellow"}}></i>
      </a>
    </div>

     <div className="footCon">
    <a href="https://www.youtube.com/@LearnNFun2023" target="_blank" style={{ marginTop:'2rem', fontSize: '2rem'}}>
      <i className="bi bi-youtube hoverStyl" style={{padding: '0', marginTop: '2rem', marginLeft: '2rem', color: "greenyellow"}}></i>
      </a>
    </div>

     <div className="footCon">
    <a href="https://whatsapp.com/channel/0029Vb7AugE5K3zXdqIRlS45" target="_blank" style={{marginTop:'2rem', fontSize: '2rem'}}>
      <i className="bi bi-whatsapp hoverStyl" style={{padding: '0', marginTop: '2rem', marginLeft: '2rem', color: "greenyellow"}}></i>
      </a>
    </div>


    </div>
    <div className="rightsCon">
    <p>Learn N Fun, All Rights Reserved. &copy; 2025 </p>
    </div>
    </footer>
  )
}

export default Footer;