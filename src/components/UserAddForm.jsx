import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salariu: 0,
            imagine: ''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateSalariu(event) {
        this.setState({salariu: event.target.value});
    }

    updateImagine(event) {
        this.setState({imagine: event.target.value});
    }

    

    // agh start
    logNewUsrData(){
        console.log('uuuu');
        console.log(this.state);
    }
    // agh end


    render() {
        const {name, email, isGoldClient, salariu, imagine} = this.state;

        return (
            <div className='mb-3'>
                <button className="btn btn-primary" onClick={()=>{this.logNewUsrData()}}>UserAddForm.jsx -- LogUsrData</button>

                <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salariu, imagine)}
            >
                <h2>Adauga utilizatori:</h2>
                <label className='form-label' htmlFor="name">Nume:</label>
                <input
                    type="text"
                    id="name"
                    className='form-control'
                    minLength={3}
                    onChange={(event) => this.updateName(event)}
                />
                <label className='form-label' htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    className='form-control'
                    onChange={(event) => this.updateEmail(event)}
                />
                <label className='form-label' htmlFor="is-gold-client">Client GOLD:</label>
                <input
                    type="checkbox"
                    id="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                {/* agh start */}
                <label className='form-label' htmlFor="salariu">Salariu:</label>
                <input
                    type="number"
                    id="salariu"
                    className='form-control'
                    onChange={(event) => this.updateSalariu(event)}
                />

                <label className='form-label' htmlFor="imagine">URL Imagine:</label>
                <input
                    type="text"
                    id="imagine"
                    className='form-control'
                    onChange={(event) => this.updateImagine(event)}
                />
                {/* agh end */}


                <input className="btn btn-primary" type="submit" value="Introdu utilizatorul"/>
                </form>
            </div>
            
        )
    }
}

export default UserAddForm;