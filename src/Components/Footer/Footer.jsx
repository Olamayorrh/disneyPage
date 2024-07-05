import "./Footer.css"

const Footer = ()=>{
    return(
        <div className="footerr">
        <div className="follow">
            <p>Follow Disney on:</p>
           <div className="pic">
           <img src="./images/facebookIcon.png" className="imgg1"></img>
           <img src="./images/linked.png" className="imgg1"></img>
           <img src="./images/mail.png"className="imgg1"></img>
            
           </div>
           

        </div>

       <div className="dis"> <img src="./images/disneyLogo.png" id="dis"></img></div>
       <div className="footie">
        <span>Help</span>
        <span>Sign Up</span>
        <span>Sitemap</span>
        <span>Terms of Use</span>
        <span>UK & UE Privacy Rights</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Manage Your Cookie Settings</span>
        <span>Interest-based Ads</span>
        <span>Tax Strategy Statement</span>
        <span>Internet Safety</span>
       </div>

       <div className="footie">
            <span>About Us</span>
            <span>The walt Disney Company</span>
       </div>
       <div className="footie">
            <p>@ Disney @Disney.Pixar @& <sup>TM</sup> Lucasfilm LTD @Marvel.All Rights Reserved</p>
       </div>

        </div>
    )
}

export default Footer;