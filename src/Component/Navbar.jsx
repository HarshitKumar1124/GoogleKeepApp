import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Symbol from "../Logo.png";
import { Link } from 'react-router-dom';
import swal from "sweetalert"







const Navbar = () => {



    function Notify()
    {
        swal({
            title:"Sorry ! For Inconvenience:",
            text:"Please note that: This NoteKeeper Page Stores Data given as input in the Temporary Variable Array.Once the page is reloaded, all notes will be lost.The DB of this page is not yet dynamically linked.",
            icon:"warning",
        })
    }
    

    return (
        <>
            <nav class="navbar row p-0 m-0 justify-content-start bg-warning">

                <div className="col">
                    <Button id="menuicon" title="Context About This Keeper" onClick={Notify} ><MenuIcon /></Button>
                    <Link className="navbar-brand mx-2" to="/" >
                        <img src={Symbol} width="30" height="30" className="" alt="BrandName" />
                        <span>arryKnocker</span>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
