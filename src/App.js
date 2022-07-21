import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#f8f9fa',
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
        data = data.filter(user => user.id < 7);
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


  emailIsValid(email){
    const regex = /.*@.*\..*/i;
    if(!email || regex.test(email) === false){
        this.setState({
            error: "Email is not valid"
        });
        return false;
    }
    return true;
  }

  submitAddForm(event, name, email, isGoldClient, salariu, imagine) {
    event.preventDefault();

    if(this.emailIsValid(email)){
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
    }else{
      console.log("error");
      return false;
    }


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



  deleteUserByEmail = (email) => {
    console.log("email", email);

    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.email !== email)
    }));
  }

  render() {
    return(
      <div className="app container " style={{background: this.state.background, color: this.state.color}}>
        <h1 className='py-5'>Admin panel - Proiectul 1</h1>

        <label className='lead mb-4' htmlFor='FontColor' style={{marginRight: '6px'}}>Font Color: </label>
        <input id="FontColor" type="color" style={{marginRight: '16px'}} onChange={(event)=>this.handleColorChange(event)}></input>
        <label className='lead mb-4' htmlFor='background-color' style={{marginRight: '6px'}}>Backround Color: </label>
        <input id='background-color' type="color" onChange={(event) => this.changeColor(event)}/>

        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salariu, imagine) => this.submitAddForm(event, name, email, isGoldClient, salariu, imagine)}/>
        <button className="btn btn-primary" onClick={()=>{this.hideUsersAndShowPosts()}}>ShowPosts</button>
        <button className="btn btn-primary" onClick={()=>{this.hidePostAndShowUsers()}}>ShowUsers</button>
     
        { this.state.isUserListVisible
          ? <UserList users={this.state.users}  deleteUserByEmail={(email) => this.deleteUserByEmail(email)}/> 
          : <PostList posts={this.state.posts}/> }
        

        
      </div>
    );
  }
}

export default App;
