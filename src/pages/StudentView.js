import {Link} from "react-router-dom";

function StudentView(){
    const students=[
        {id:1, name:"Vaishnavi"},
        {id:2, name:"Siddhi"},
        {id:3, name:"Apeksha"},
        {id:4, name:"Sakshi"},
        {id:5, name:"Priya"},
        {id:6, name:"Pranali"},
        {id:6, name:"Palu"}
    ];
    return(
        <div className="container mt-4">
            <h3>
                Student List
            </h3>
            <ul className="list-group">
                {students.map(s=>(
                    <li key={s.id} className="list-group-item">
                        {s.name}
                        <Link to={`/student/view/${s.name}  ${s.id} `} className="btn btn-sm btn-primary Float-end">
                        View Details</Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}
export default StudentView;