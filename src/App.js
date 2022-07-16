import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'lightskyblue',
      color: 'black',
      users: [],
      posts: [],
      isUserListVisible: true,
      isPostsListVisible: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 5);
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


  hideUsersAndShowPosts = () => {
    let { isPostsListVisible } = this.state;
    if(isPostsListVisible === false){
      this.setState({isUserListVisible: false, isPostsListVisible: true})
    }
  }

  hidePostAndShowUsers = () => {
    let { isUserListVisible } = this.state;
    if(isUserListVisible === false){
      this.setState({isUserListVisible: true, isPostsListVisible: false})
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

  removeUser = (index) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((_, i) => i !== index)
    }));
  }


  deleteUserByEmail = (email) => {
    console.log("email", email);

    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.email !== email)
    }));
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        {/* agh start */}
        <button onClick={()=>{this.logAllUsersData()}}>App.js - Log all users</button>
        {/* agh end */}
        <br/><br/>
        <button onClick={()=>{this.removeUser(0)}}>RemoveUser1</button>
        <label>Font Color: </label>
        <input id="FontColor" type="color" onChange={(event)=>this.handleColorChange(event)}></input>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salariu, imagine) => this.submitAddForm(event, name, email, isGoldClient, salariu, imagine)}/>
        <br/><br/>
        <button onClick={()=>{this.hideUsersAndShowPosts()}}>ShowPosts</button>
        <button onClick={()=>{this.hidePostAndShowUsers()}}>ShowUsers</button>
     
        { this.state.isUserListVisible
          ? <UserList users={this.state.users}  deleteUserByEmail={(email) => this.deleteUserByEmail(email)}/> 
          : <PostList posts={this.state.posts}/> }
        
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        
      </div>
    );
  }
}

export default App;
