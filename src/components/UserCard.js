import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { GrLocation } from 'react-icons/gr'
import { FaSuitcase } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
const UserCard = ({ user }) => {
    return (
        <Card className=" mt-10 mb-4 " style={{backgroundColor:'	#FFA07A'}} >

            <CardTitle>
                <CardImg src={user.avatar_url} alt="" height='300px' style={{padding:'3rem'}}/>
            </CardTitle>


            <CardBody style={{paddingLeft:'3rem'}}>
                <div className='font-weight-bold' ><h3 style={{color:'black' }}>{user.name}</h3></div>
                <div className="text-info" style={{color:'black'}}>
                    <GrLocation className='mr-2' style={{color:'black'}}/>
                    {user.location}</div>
                <div style={{color:'black'}}><p>{user.bio}</p></div>
                <div>
                    <p style={{color:'black'}}><FaSuitcase className='mr-2' />
                Open for Job: {user.hireable ? 'Yes' : 'No'}</p></div>
                <div style={{color:'black'}}><p><MdPeople className='mr-2' />Followers: {user.followers}  </p></div>
                <div className="text-secondary" style={{color:'black'}}>View Full Github Profile <a href={user.html_url}><FaLocationArrow color='black' /></a></div>
            </CardBody>
        </Card>
    );
}

export default UserCard;