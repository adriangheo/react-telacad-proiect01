import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, salariu, imagine) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salariu,
            imagine
          }
        ]
      }
    });
    event.target.reset();
  }

  logAllUsersData(){
    this.state.users.map((user, index)=>{
      console.log(index);
      console.log(user.name);
      console.log(user.email);
      console.log(user.isGoldClient);
      console.log(user.salariu);
      console.log(user.imagine);
      console.log('---')
    })
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background}}>
        <h1>Admin panel - Proiectul 1</h1>
        {/* agh start */}
        <button onClick={()=>{this.logAllUsersData()}}>App.js - Log all users</button>
        {/* agh end */}
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salariu, imagine) => this.submitAddForm(event, name, email, isGoldClient, salariu, imagine)}/>
        <UserList users={this.state.users}/>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
      </div>
    );
  }
}

export default App;
