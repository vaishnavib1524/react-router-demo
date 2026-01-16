import {useParams} from "react-router-dom"

function StudentDetails(){
    const {id} = useParams();
     const {name} = useParams();
    return(
        <div className="container mt-4">
            <h3>
                Student Detail
            </h3>
            <p>
                <b>
                    Student ID:
                </b>
                {name}
                {id}
            </p>
        </div>
    );
}
export default StudentDetails