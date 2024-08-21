import React from "react";
import UserClass from "./UserClass";

class about extends React.Component{
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount About");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="w-3/12 m-auto">
        <h1 className="font-bold text-center py-4">Developer Information</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Aman Bhargava"} location={"Pune, MH, India"} />
      </div>
    )
  }
}
  

export default about;

