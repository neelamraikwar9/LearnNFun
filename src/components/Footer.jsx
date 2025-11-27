
import './footer.css';

const Footer = () => {
  return (
    <footer className="footerCon">

    <div className="footerBox">
    <div className="footCon">
      <i class="bi bi-telephone-fill" style={{padding: '0', marginTop: '2rem', color: "greenyellow"}}></i>
       <a href="tel:+919015256338" style={{ marginTop: "2rem" }}>+91  90152 56338</a>
    </div>

    <div className="footCon">
      <i class="bi bi-envelope-at-fill" style={{padding: '0', marginTop: '2rem', marginLeft: '2rem', color: "greenyellow"}}></i>
      <a href="mailto:learnnfun3@gmail.com" style={{marginTop:'2rem'}}>learnnfun3@gmail.com</a>
    </div>
    </div>
    <div className="rightsCon">
    <p>&copy; 2025 | Learn N Fun, All Rights Reserved.</p>
    </div>
    </footer>
  )
}

export default Footer;