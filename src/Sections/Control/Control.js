import React from 'react'
import "./control.css"
import { DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import Ct from '../../Components/Ct/Ct';

const Control = () => {
    return (
        <div className='c'>
        <div className='c-nav'>
        <h2 className='c-title'><i class="fas fa-bars"></i>Control Tower</h2>
        <form action="/action_page.php">
  <label for="cars"></label>
  <select id="cars" name="cars">
    <option value="volvo">By Frequency</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
</form>
        {/* <p className='d-feed'>Send Feedback <span><i class="fal fa-comments"></i></span></p> */}
        </div>
        <div className='c-body'>
            <Ct />
        </div>
       
    </div>
    )
}

export default Control
