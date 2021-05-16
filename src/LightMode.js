
import React, { useState } from 'react';
import { Button, Tooltip } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import LightModeNode from './LightModeNode.js';
import swal from 'sweetalert';




const LightMode = () => {
    

    const [Note, setNote] = useState([]);

    const [NewNote, setNewNote] = useState({
        Title: "",
        Description: ""
    });


    function GetNote(e) {

        var fieldname = e.target.name;
        var fieldInput = e.target.value;
        setNewNote({ ...NewNote, [fieldname]: fieldInput });

    }
    function deleteNode(deleteindex)
    {
        swal({
            title: "Deleting Node",
            text: `Deleting Node ${deleteindex} !`,
            icon: "error",

        })
            var array=Note.filter((Node,index)=>{
               return deleteindex!==index;
            })
            for(var i=0;i<array.length;i++)
            {
                array[i].id=i;
            }
           setNote(array);
       
    }


    function FullNoteInfo() {

        if ((!NewNote.Title) || (!NewNote.Description)) {
            swal({
                title: "OOPs",
                text: "Can't add an empty note or incomplete note!",
                icon: "error",
            });

        }
        else {
            var ctime = new Date().toLocaleTimeString();
            var NewNotewithTimeID = { ...NewNote, Time: ctime }

            setNote([...Note, NewNotewithTimeID]);
            var Notesize = Note.length;
            NewNotewithTimeID = { ...NewNotewithTimeID, id: Notesize }
            setNote([...Note, NewNotewithTimeID]);
            setNewNote({ Title: "", Description: "" });
            swal({
                title: "Note Added",
                text: "Thankyou for your concern !",
                icon: "success",
            });
        }
    }







    const [Status, setStatus] = useState(false);

    function RevealTextarea() {
        setStatus(true);
    }
    function CollapseColumn() {
        setStatus(false);
    }

    return (
        <>
            <div className="col p-0 m-0">

                <div className="row p-0 m-0 justify-content-center " onDoubleClick={CollapseColumn} >
                    <div className="col-5 my-4 p-2 note-add-column " >
                        <form action="" className="form" >
                            <div className="form-group mt-3 m-1">
                                <input type="text" className="form-control" placeholder="Write a title..." name="Title" onClick={RevealTextarea} autoComplete="off" onChange={GetNote} value={NewNote.Title} required />
                            </div>
                            {Status ?
                                <div className="form-group mt-4 form-textarea">
                                    <textarea name="Description" id="" className="form-control" rows="4" placeholder="Write a Note..." required onChange={GetNote} value={NewNote.Description} ></textarea>
                                </div> : null}

                        </form>

                        {Status ? <div className="row p-0 m-0 justify-content-end ">
                            {/* border:2px solid red */}
                            <Tooltip title="Add Note" placement="top">
                                <Button className="add-btn">
                                    <AddBoxIcon className="Add-box-icon" onClick={FullNoteInfo} />
                                </Button>
                            </Tooltip>
                        </div> : null}

                    </div>
                </div>

                <div className="row m-0 p-0 Note-Area bg-primary" onClick={CollapseColumn}>

                    {Note.map((element, index) => {
                        return <LightModeNode
                            key={element.Time}
                            Title={element.Title}
                            Description={element.Description}
                            Id={element.id}
                            Delete={deleteNode}
                        />
                    })
                    }


                </div>

            </div>
        </>
    )
}

export default LightMode;
