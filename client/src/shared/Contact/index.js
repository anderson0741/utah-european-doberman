import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div class="addresses">
            <div className="deets">
                <h3>Email: Europeandobes@gmail.com</h3>
                <h3>Tel: 555-555-5555</h3>
                {/* </div>
            <div className="survey"> */}
                <p className="surveyInputs">Email:
                    <input type="text" placeholder='Email' />
                </p>
                <p className="surveyInputs">Location:
                    <input type="text" placeholder='Where are you located?' />
                </p>
                <p className="surveyInputs">Phone Number:
                    <input type="text" placeholder='Phone Number' />
                </p>
                <p className="surveyInputs">Social Media
                    <input type="text" placeholder='Instagram/Facebook handle' />
                </p>
                <p className="surveyInputs">Best way to contact:
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Phone" /> Phone</label>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Email" /> Email</label>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Social Media" /> Social Media</label>
                </p>
                <p className="surveyInputs">Preferred Gender:
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Male" /> Male</label>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Female" /> Female</label>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="none" /> No Preference</label>
                </p>
                <p className="surveyInputs">Do you plan to breed:
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Yes" /> Yes</label>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="No" /> No</label>
                </p>
                <p className="surveyInputs">Preference on appearance:
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Ears" /> Ears cropped (dogs ears are cropped 9-12 weeks old)</label>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Tail" /> Tail Docked</label>
                </p>
                <input className="submit" type="submit" value="Submit" />
            </div>
            {/* <button className="submit" onClick={this.props.toggleEdit}>Cancel</button> */}
        </div>
    )
}

export default Contact
