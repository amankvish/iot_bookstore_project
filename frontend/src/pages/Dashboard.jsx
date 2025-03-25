import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/dashboard/Sidebar';
import BookList from '../components/dashboard/BookList';
import ProfileSection from '../components/dashboard/ProfileSection';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <Container fluid className="p-0">
            <Row>
                <Col md={2} className="bg-dark min-vh-100 p-0">
                    <Sidebar logout={logout} />
                </Col>
                <Col md={10} className="p-4">
                    <h2 className="mb-4">Welcome back, {user?.name || 'User'}!</h2>
                    <Row>
                        <Col md={8}>
                            <BookList />
                        </Col>
                        <Col md={4}>
                            <ProfileSection user={user} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;