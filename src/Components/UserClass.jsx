
import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        URL: "Default",
        avatar_url: "Dummy Photo",
      } 
    }
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/amanbhargava1010");
    const json = await data.json();
    this.setState({
      userInfo: json,
    }); 
    //Initially react was rendering with the dummy data. 
  }

  componentWillUnmount() {
    console.log("User Cleared. ");
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { login, url ,avatar_url} = this.state.userInfo ;
  
   
    return (
      <div className="user-card ">
        <h2>Login Name : {login}</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h1 className="font-bold">{ loggedinUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h3>API Link : {url}</h3>
        <img src={avatar_url} alt="" />
        <h4>Contact : amanbhargava952@gmail.com </h4>
      </div>
    );
    }
}

export default UserClass;