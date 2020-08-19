import React, { useContext, useState } from 'react';
import { Container, Row, Col, InputGroup, Input, InputGroupAddon, Button, ListGroupItem, ListGroup } from 'reactstrap';
import { toast } from 'react-toastify'
import { FaSearch } from 'react-icons/fa'
import Axios from 'axios';
import UserCard from '../components/UserCard';
import Repos from '../components/Repos';
import SuggestionBox from '../components/SuggestionBox';

const Home = () => {
    const [query, setQuery] = useState('')
    const [user, setUser] = useState(null)
    const [suggestions, setSuggestions] = useState([])

    const [suggestionsVisible, setSuggestionsVisible] = useState(false)

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            setSuggestionsVisible(false)
        }
        catch (error) {
            toast("Can't find user", { type: 'error' })
        }
    }

    const showSuggestions = async () => {
        try {
            const { data } = await Axios.get('https://api.github.com/search/users', {
                params: {
                    q: query,
                    per_page: 4,
                }
            })

            setSuggestions(data.items)
            setSuggestionsVisible(true)
        }
        catch (error) {

        }



    }

    return (
        <div style={{ width: '100%', backgroundColor: '#3399FF', minHeight: '100vh' }}>
           
            <Container className='p-sm-5 p-md-0' >
                <Row className="mt-7">
                    <Col md='6'>
                        <div className='text-center text-md-left' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '30vh' }}>
                            <h1 className='font-weight-bold' style={{ fontSize: '4rem', color: 'white' ,paddingLeft:'3rem'}}>GitSearch</h1>
                            <p style={{  color: 'white' ,paddingLeft:'3rem'}}>Search any github user's profile and see their work.</p>

                        </div>
                    </Col>
                    <Col md='6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',paddingTop:'5.2rem'}}>
                        <InputGroup>
                            <Input type='text' value={query} style={{fontSize:'1.2rem'}} onChange={e => {
                                setQuery(e.target.value)
                                showSuggestions()
                            }
                            } placeholder='Enter username' />
                            <InputGroupAddon addonType='append'>
                                <Button onClick={fetchDetails} style={{}}>
                                    <FaSearch style={{ backgroundColor: 'transparent', color: 'black' ,width:'2rem'}} />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        {
                            suggestionsVisible ? <SuggestionBox suggestions={suggestions} setQuery={setQuery} visible={setSuggestionsVisible} /> : null
                        }
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md='4'>

                        {
                            user ? <UserCard user={user} /> : null
                        }
                    </Col>
                    <Col md='1'></Col>
                    <Col md='7'>
                        {user ? <Repos repos_url={user.repos_url} /> : null}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;