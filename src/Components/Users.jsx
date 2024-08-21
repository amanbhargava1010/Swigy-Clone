// This is a functional Component. 

const user = ({ name,location}) => {
  return (
    <div className="user-card">
      <h1>Name : {name}</h1>
      <h2>Location : {location}</h2>
      <h3>Contact : amanbhargava952@gmail.com</h3>
    </div>
  ) 
}

export default user; 