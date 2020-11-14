import React from 'react';
import NavBar from './NavBar';
import TeacherContent from './TeacherContent';
import TeacherNavbar from './TeacherNavbar';
import TeacherSidebar from './TeacherSidebar';

const TeacherDashboard = () => {
    return (
        <div>
            <TeacherNavbar/>
            <div style={{display: 'flex', alignItems: 'space-around'}}>
                <TeacherSidebar />
                <TeacherContent />
            </div>
        </div>
    );
};

export default TeacherDashboard;