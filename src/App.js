import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      isUserListVisible: true,
      isPostsListVisible: true
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
      });
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data});
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

  handleColorChange(event){
    console.log(event.target.value);
    this.setState({color: event.target.value})
  }
  
  switchUserListVisibility = () => {
    console.log('isUserListVisible:', this.state.isUserListVisible)
    let { isUserListVisible } = this.state;

    if(isUserListVisible == true){
      this.setState({isUserListVisible: false})
    }else{
      this.setState({isUserListVisible: true})
    }
    
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


  function

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        {/* agh start */}
        <button onClick={()=>{this.logAllUsersData()}}>App.js - Log all users</button>
        {/* agh end */}
        <br/><br/>
        <label>Font Color: </label>
        <input id="FontColor" type="color" onChange={(event)=>this.handleColorChange(event)}></input>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salariu, imagine) => this.submitAddForm(event, name, email, isGoldClient, salariu, imagine)}/>
        
        <button onClick={()=>{this.switchUserListVisibility()}}>switchUserListVisibility</button>

        { this.state.isUserListVisible
          ? <UserList users={this.state.users}/> 
          : false }
        
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <PostList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
