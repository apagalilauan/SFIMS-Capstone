import '../assets/scss/Notifications.scss'
import NotificationCard from './Notification-Card';
import React, { useState } from "react";

const NotificationsPage = () => {

    function btnRead(){
        document.getElementById('read').id = 'unread';
    }

    const [selectnotif,setNotif]=useState([
        {   
            value:'read', 
            name:'Andrei Pagalilauan', 
            subject:'Remedial Class',
            type:'Sent you a schedule Request',
            date: 'MM/DD/YY',
            time: '00:00'
        },
        {   
            value:'read', 
            name:'Andrei Pagalilauan', 
            subject:'Remedial Class',
            type:'Sent you a schedule Request',
            date: 'MM/DD/YY',
            time: '00:00'
        },
        {   
            value:'read', 
            name:'Andrei Pagalilauan', 
            subject:'Remedial Class',
            type:'Sent you a schedule Request',
            date: 'MM/DD/YY',
            time: '00:00'
        },
        {   
            value:'unread', 
            name:'Andrei Pagalilauan', 
            subject:'Remedial Class',
            type:'Sent you a schedule Request',
            date: 'MM/DD/YY',
            time: '00:00'
        },
        {   
            value:'unread',
            name:'Andrei Pagalilauan', 
            subject:'Remedial Class',
            type:'Sent you a schedule Request',
            date: 'MM/DD/YY',
            time: '00:00'
        },
        {   
            value:'unread',
            name:'Andrei Pagalilauan', 
            subject:'Remedial Class',
            type:'Sent you a schedule Request',
            date: 'MM/DD/YY',
            time: '00:00'
        },
    ]);

    return ( 
        <div className='notifications'>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

            <div className='n-header'>
                <div className="notif-head">
                    <div className='notif-name'>
                        <p className="notif-header">Notifications</p>
                        <i class='bx bx-notification' ></i>
                    </div>
                    <div className='notif-ctr'>
                        <p>You curently have # notifications</p>
                    </div>
                </div>
                
                <div className='select-sort'>
                    <p>Sort by </p>
                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Unread</option>
                    </select>
                </div>

                <div className='btnRead'>
                    <button id="btnRead" type='button'>Mark as read</button>
                </div>

            </div>
            
            <div className="n-top">
                <span/>
                <p>Details</p>
                <span/>
                <p>Date</p>
            </div>
            <NotificationCard select={ selectnotif }/>

        </div>
     );
}
 
export default NotificationsPage;