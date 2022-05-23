import React from 'react'

class AddPeopleForm extends React.Component {

    adding=(onTextChange, onAddClick, person)=>{
        const {firstName, lastName, age}=person  
        return <div>
        <div className='row md-offset-3'>
        <div className='col-md-2 md-offset-1'>
            <input value={firstName} onChange={onTextChange} name="firstName" className='form-control' placeholder='First Name' />
        </div>
        <div className='col-md-2 md-offset-1'>
            <input value={lastName} onChange={onTextChange} name="lastName" className='form-control' placeholder='Last Name' />
        </div>
        <div className='col-md-2 md-offset-1'>
            <input value={age} onChange={onTextChange}  name="age" className='form-control' placeholder='Age' />
        </div>
        <div className='col-md-2 md-offset-1'>
        <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
        </div>
        </div>
    </div> 
    }

    editing=(onTextChangeEditing, cancel, updatePerson,editPerson)=>{
        const {firstName, lastName, age}=editPerson  
        return  <div>
        <div className='row md-offset-3'>
        <div className='col-md-2 md-offset-1'>
            <input value={firstName} onChange={onTextChangeEditing} name="firstName" className='form-control' placeholder='First Name' />
        </div>
        <div className='col-md-2 md-offset-1'>
            <input value={lastName} onChange={onTextChangeEditing} name="lastName" className='form-control' placeholder='Last Name' />
        </div>
        <div className='col-md-2 md-offset-1'>
            <input value={age} onChange={onTextChangeEditing}  name="age" className='form-control' placeholder='Age' />
        </div>
        <div className='col-md-2'>
                    <button onClick={cancel} className='btn btn-primary btn-block'>Cancel</button>
                    <button onClick={updatePerson} className='btn btn-primary btn-block'>Update</button>
        </div> 
        </div>
    </div>
        
        
    }


    render() {   
            const {onTextChange, onAddClick, person, edit, cancel, updatePerson,editPerson, onTextChangeEditing}=this.props
              
        return (edit ? this.editing(onTextChangeEditing, cancel, updatePerson,editPerson) : this.adding(onTextChange, onAddClick, person))
    }
}

export default AddPeopleForm;