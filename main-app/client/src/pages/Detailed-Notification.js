import '../assets/scss/Detailed-Notifications.scss'
const DetailedNotifications = () => {
    return ( 
        <div class="RD-Container">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <div id="btnBack" className="btnForm">
                <i class='bx bx-arrow-back' ></i>
                <p>Back</p>
            </div>

            {/* RD Heading */}
            <div>
                <h3>REQUEST DETAILS</h3>
                <div value='1'>
                    <p>PENDING</p> 0/2
                </div>
                <div value='2'>
                    <p>PENDING</p> 1/2
                </div>
                <div value='3'>
                    <p>REQUEST APPROVED</p>
                </div>
            </div>

            {/* Divider */}
            <hr class="solid"/>

            {/* RD Content */}
            <div>
                <div className="RDC-Header">
                    <div>
                        <i class='bx bxs-universal-access'/>
                        <div>
                            <p>Andrei Louis C. Pagalilauan</p>
                            <i class='bx bx-envelope' ><p>1302281@usl.edu.ph</p></i>
                        </div>
                        <div>
                            <p>SEAITE Department</p>
                            <p>Student Officer</p>
                        </div>
                    </div>

                    <div>
                        <p>September 27, 2022</p>
                        <i class='bx bx-envelope'/>
                    </div>
                </div>

                <div className="RDC-Body">
                    <div>
                        <p>SUBJECT: Facility Request for Remedial Class</p>
                    </div>
                    <div>
                        <p>PURPOSE:</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a 
                            typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>        
                    </div>
                </div>
            </div>

            
            {/* RD Additional Content */}
            <div>
                <div className="RDA-Header">
                    <div>REQUEST OVERVIEW</div>
                    <div>Attached Files<i class='bx bx-download'/></div>
                </div>
                <div className="RDA-Body">
                    <p>Building: J-Building</p>
                    <p>Room: J-28</p>
                    <p>Requested Date: November 10, 2022</p>
                    <p>Time: 9:00-10:30 AM</p>
                </div>
            </div>
            
            {/* RD Buttons */}
            <div>
                <button>Cancel Request</button>
                <i class='bx bx-x-circle' ></i>
            </div>
        </div>
     );
}
 
export default DetailedNotifications;