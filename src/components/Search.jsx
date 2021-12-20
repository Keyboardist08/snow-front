import React from 'react';
// import {RiMapPin2Fill} from 'react-icons/ri'
import { Button } from 'react-bootstrap';

function Search({handleSubmit, handleChange, searchString}) {
    return (
<div>
    <form onSubmit={handleSubmit} className='form-horizontal'>
        <input 
            placeholder="Search Map"
            type="text"
            name="searchString"
            required
            onChange={handleChange}
            value={searchString}
        />
    </form>
    <Button className="btn btn-primary" type="submit" value="Submit"><i class="bi bi-geo-alt-fill"></i></Button>
</div>
    );
}

export default Search;