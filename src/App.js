import './App.css';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Andres',
  lastName: 'Ruiz'
};

/* JSX */
function getGreeting(user){
  if(user)
    return <h1>Hello, {formatName(user)}</h1>
  else
    return <h1>Hello, Stranger</h1>
}

const element = getGreeting(user);
const elementWithoutName = getGreeting();

/* Attributes with JSX */
const url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';
const image = <img src={url}></img>;

function App() {
  return (image);
}

export default App;
