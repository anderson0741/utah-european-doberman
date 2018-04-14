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
                <div className="infoSurvey">
                    <h3 className="surveyInputs">Email:</h3>
                    <input type="text" placeholder='Email' />
                    <h3 className="surveyInputs">Location:</h3>
                    <input type="text" placeholder='Where are you located?' />
                    <h3 className="surveyInputs">Phone Number:</h3>
                    <input type="text" placeholder='Phone Number' />
                    <h3 className="surveyInputs">Social Media:</h3>
                    <input type="text" placeholder='Instagram/Facebook handle' />
                </div>
                <div className="contactSurvey">
                    <h3 className="surveyInputs">Best way to contact:</h3>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Phone" /> Phone</label>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Email" /> Email</label>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Social Media" /> Social Media</label>
                </div>
                <div className="genderSurvey">
                <h3 className="surveyInputs">Preferred Gender:</h3>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Male" /> Male</label>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Female" /> Female</label>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="none" /> No Preference</label>
                </div>
                <div className="breedSurvey">
                <h3 className="surveyInputs">Do you plan to breed:</h3>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="Yes" /> Yes</label>
                    <label htmlFor=""><input type="radio" name="contactInfo" value="No" /> No</label>
                </div>
                <div className="appearanceSurvey">
                <h3 className="surveyInputs">Preference on appearance:</h3>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Ears" /> Ears cropped (dogs ears are cropped 9-12 weeks old)</label>
                    <label htmlFor=""><input type="checkbox" name="contactInfo" value="Tail" /> Tail Docked</label>
                </div>
                <input className="submit" type="submit" value="Submit" />
            </div>
            {/* <button className="submit" onClick={this.props.toggleEdit}>Cancel</button> */}
        </div>
    )
}

export default Contact
