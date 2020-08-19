import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'

const SuggestionBox = ({ suggestions, setQuery, visible }) => (
    <ListGroup color='white'>
        {
            suggestions.map(suggestion => (
                <ListGroupItem key={suggestion.id} onClick={() => {
                    setQuery(suggestion.login)
                    visible(false)
                }}>
                    <img src={suggestion.avatar_url} style={{ width: '30px', height: '30px', borderRadius: '15px', marginRight: '10px' }} />
                    {suggestion.login}
                </ListGroupItem>
            ))
        }
    </ListGroup>
)

export default SuggestionBox