import React from 'react';
import { Card } from 'react-bootstrap';

const ProfileSection = ({ user }) => {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <div className="text-center mb-3">
                    <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '80px', height: '80px' }}>
                        <span className="text-white fs-3">
                            {user?.name?.charAt(0).toUpperCase() || 'U'}
                        </span>
                    </div>
                </div>
                <h5 className="text-center mb-3">{user?.name || 'User'}</h5>
                <div className="mb-2">
                    <strong>Email:</strong> {user?.email || 'N/A'}
                </div>
                <div className="mb-2">
                    <strong>Phone:</strong> {user?.phone || 'N/A'}
                </div>
                <button className="btn btn-outline-primary w-100 mt-3">
                    Edit Profile
                </button>
            </Card.Body>
        </Card>
    );
};

export default ProfileSection;