import { Link } from "react-router-dom"
function Competition({comp,handleDelete}) {
      const deleteComp = () => {
        if (window.confirm(`Are you sure you want to delete the event: ${comp.name}?`)) {
            handleDelete(comp.id); // Call the delete function passed down from parent
        }
    };
  return (
    <div>
        <table className="table table-bordered border-color-black">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Fees</th>
                <th scope="col">Date</th>
                <th scope="col">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{comp.id}</td>
                <td>{comp.name}</td>
                <td>{comp.fees}</td>
                <td>{comp.date}</td>
                <td> <Link to={`/competition/${comp.id}`} className='link'>
                Details
                </Link></td>
                <td>
                    <button className="btn btn-danger" onClick={deleteComp}>Delete</button>
                    </td>
                    <td><Link to={`/update-competition/${comp.id}`} className='link'>
                Update
                </Link></td>
            </tr>
        </tbody>
        </table>
      
    </div>
  )
}

export default Competition
