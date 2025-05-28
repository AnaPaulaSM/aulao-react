import React from "react";
function Tasks(props) {

    return (
        <ul>
            {props.tasks.map((task) => (
            <li className="bg-slate-400 text-white p-2">{task.title}</li>
            ))}
        </ul>
    )
}

export default Tasks;