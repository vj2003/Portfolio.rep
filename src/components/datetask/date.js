import React, { useState } from "react";

export function Datefunction() {
    const[Course,SetCourse]=useState('')
    function datecourse(){
            let a=document.getElementById("DATE").value;
            var todaydate= new Date(a)
            todaydate.setDate(todaydate.getDate()+90)
            var output=todaydate.toDateString();
            SetCourse(output)
    }
    return (
        <>
            <div className="text-center mt-3 bg-success p-5">
                <input type="Date" id="DATE" placeholder="Enter a Date" className="m-5"/><br/>
                <div onClick={datecourse} className="btn btn-danger">enter</div>
                <h1>{Course}</h1>
            </div>
            </>
            );
}