import React from 'react'


function PersonRow({person, deletePerson,editPerson,checked, addOrRemoveFromSelect }) {        
    const {firstName, lastName, age} = person;
        return (
                <tr>
                    <td>
                    <input type='checkbox' onChange={addOrRemoveFromSelect} checked={checked} className='form-control' />
                    </td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>
                        <button onClick={deletePerson} className='btn btn-danger btn-block'>Delete</button>
                        <button onClick={editPerson} className='btn btn-danger btn-block'>Edit</button>
                    </td>
                </tr>
        )
    
}

export default PersonRow;