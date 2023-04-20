import React from 'react';
import Form from "./Form";
import "./Form.css";
import './App.css';
const users = [
  { id: 'a', name: 'Umaira' },
  { id: 'b', name: 'Sohail' },
  { id: 'c', name: 'zeeshan' },
  { id: 'd', name: 'fatima' },
];
function App() {
  
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');
  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };
  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );
  return (
    <div className="App">
      <h2 style={{fontStyle:"italic", fontSize:"30px"}}>UseMemo Hook</h2>
       <input type="text"style={{fontSize:"30px"}} value={text} onChange={handleText} />
      <button type="button" style={{fontSize:"30px", background:"black", color:"white", marginTop:"120px", marginLeft:"20px"}} onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
      <Form/>
    </div>
  
  );
}
const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li style={{fontFamily:"monospace" , fontSize:"20px", color:"red"}}>{item.name}</li>;
};

export default App;
