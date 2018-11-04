import React from 'react'
import DoneAll from "@material-ui/icons/DoneAll"
import OutlinedFlag from "@material-ui/icons/OutlinedFlag"
import Update from "@material-ui/icons/Update"

export default props =>
  <div className="card mb-3 shadow">
    <div className={"card-body text-center text-white " + props.bg}>

      <div className="row">
        <div className="col-md-6">
          {
            props.text === "Total"
              ? <OutlinedFlag style={{fontSize: "3em"}}/>
              : props.text === "Done"
              ? <DoneAll style={{fontSize: "3em"}}/>
              : props.text === "Left"
                ? <Update style={{fontSize: "3em"}}/>
                : ""
          }


        </div>
        <div className="col-md-6">
          {props.text} <br/>
          <h1>{props.number}</h1>
        </div>
      </div>


    </div>
  </div>