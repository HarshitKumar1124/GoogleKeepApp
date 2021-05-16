
import React from 'react';
import { Button, Tooltip } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';




const LightModeNode = (props) => {

    return (
        <>
            <div className="col-2 my-4 p-2 mx-3 node " >

                <form action="" className="form" >
                    <input type="text" className="form-control my-1" placeholder={props.Title} disabled readOnly/>
                    <textarea className="form-control my-1" disabled readOnly>
                        {props.Description}
                    </textarea>

                </form>


                <div className="row m-0 p-0 justify-content-end">
                    <p>{props.Time}</p>
                    <Tooltip title="Delete Node" placement="bottom">
                        <Button className="delete-btn">
                            <DeleteIcon className="Delete-Box-icon" onClick={()=>{props.Delete(props.Id)}}/>
                        </Button>
                    </Tooltip>
                </div>


            </div>

        </>
    )
}

export default LightModeNode;
