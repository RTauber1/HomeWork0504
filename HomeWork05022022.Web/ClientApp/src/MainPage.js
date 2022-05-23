import React from 'react'
import AddPeopleForm from './AddPeopleForm'
import PersonRow from './PersonRow'
import axios from 'axios'


class MainPage extends React.Component {


    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: [],
        edit: false,
        editPerson:'',
        selected: []
    }


    componentDidMount() {
        axios.get('/api/people/getPeople').then(res => {
            this.setState({ people: res.data });
            console.log(this.state.person)
            console.log("Hello!")
        });
    }

    getAllThePeople = () => {
        axios.get('/api/people/getPeople').then((res) => {
            console.log(this.state.person)
            console.log("bcvbcbv")
            this.setState({
                people: res.data,
                person: {
                    firstName: '',
                    lastName: '',
                    age: '',

                },
            });
            console.log(this.state.person)
        });
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
        console.log(this.state.person)
    }


    onAddClick = () => {
        const {person}=this.state
        console.log(person)
        axios.post('/api/people/addPerson', person).then(() => {
            console.log(person)
            console.log("Yippy!!!!!!!!!!!!!")
            this.getAllThePeople()
        })
    }

    deletePerson=(person)=>{
     console.log('starting')
        axios.post('/api/people/deletePerson', person).then(() => {
            console.log("Starting!!!!!!!!!!!!!")
            this.getAllThePeople()
            console.log("finish!!!!!!!!!!!!!")
        })
    }

    editPerson=(person)=>{
        this.setState({ edit: true, editPerson: person})
    }

    cancel=()=>{
        this.setState({ edit: false, editPerson: ''})
    }

    updatePerson=()=>{
            const {editPerson} = this.state    
            axios.post('/api/people/updatePerson', editPerson).then(() => {
            this.setState({ edit: false, editPerson: ''})
               this.getAllThePeople()
           })
       }
    
    onTextChangeEditing = e => {
        const copy = { ...this.state.editPerson };
        copy[e.target.name] = e.target.value;
        this.setState({ editPerson: copy });
    }

    checkAll=()=>{
        this.setState({ selected: [...this.state.people]})
        console.log(this.state.selected)
    }

    uncheckAll=()=>{
        this.setState({ selected: []})
        console.log(this.state.selected)
    }

    addOrRemoveFromSelect=(person)=>{
        const {selected}=this.state
        if(selected.includes(person)){
            const selectedCopy = selected.filter(p => p !== person)
            this.setState({ selected: [...selectedCopy]})
        }
        else{
            const selectedCopy = [...selected,person]
            this.setState({ selected:[...selectedCopy]})
            
        }
        console.log('im tring...')
        console.log(selected)
    }
    
    

    deleteSelected=()=>{
        const {selected}=this.state
        console.log(selected)
        axios.post('/api/people/deletePeople', selected).then(() => {
            this.setState({ selected: '' });
            this.getAllThePeople()
        })
    }

    render() {
        const { people, person, editPerson, edit, selectAll, selected } = this.state
        console.log(this.state.person)
        return <div>
            {<AddPeopleForm
                onTextChange={this.onTextChange}
                onAddClick={this.onAddClick} 
                person={person}
                editPerson={editPerson}
                edit={edit}
                cancel={this.cancel}
                updatePerson={this.updatePerson}
                onTextChangeEditing={this.onTextChangeEditing}/>}
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>
                            <div className='col-md-4'>
                                <button onClick={this.deleteSelected} className='btn btn-danger btn-block'>Delete Selected</button>
                            </div>
                            <div className='col-md-4'>
                                <button onClick={this.checkAll} className='btn btn-primary btn-block'>Check All</button>
                            </div>
                            <div className='col-md-4'>
                                <button onClick={this.uncheckAll} className='btn btn-primary btn-block'>Uncheck All</button>
                            </div>
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, i) => <PersonRow key={i} 
                            person={person} 
                            deletePerson={() => this.deletePerson(person)}
                            editPerson={() => this.editPerson(person)}
                            checked={(selected.includes(person))}
                            addOrRemoveFromSelect={()=>this.addOrRemoveFromSelect(person)}/> )}
                </tbody>
            </table>
        </div>
    }
}

export default MainPage;



