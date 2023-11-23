import './contacts.scss'
import Location from '../../images/locationSymbol.png'
import Email from '../../images/emailSymbol.png'
import Contact from '../../images/contactSymbol.png';

const Contacts = () => {
    return(
        <div className="contactsDiv">
            <div className="contactsInfo">
                <img src={Location} width="100px" height=""/>
                <div>
                    <span>Location</span>
                    <p>Los Angeles, CA 90095</p>
                </div>   
            </div>
            <div className="contactsInfo">
                <img src={Email} width="100px" height=""/>
                <div> 
                    <span>Email Us</span>
                    <p><a href = "mailto: abc@example.com">abc@example.com</a></p>
                </div>
            </div>
            <div className="contactsInfo">
                <img src={Contact} width="100px" height=""/>
                <div>    
                    <span>Contact Us</span>
                    <p><a href="tel: 260-563-6925">+913-287-1273</a></p>
                </div>
            </div>
        </div>
    )
}
export default Contacts;