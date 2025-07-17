import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id':11,
    'image':'https://placeimg.dev/64x64/FF5733',
    'name':'홍길동',  
    'birthday':'12345',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.dev/64x64/FF5733',
    'name':'홍길순',  
    'birthday':'12345',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':3,
    'image':'https://placeimg.dev/64x64/FF5733',
    'name':'홍길자',  
    'birthday':'12345',
    'gender':'남자',
    'job':'대학생'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
            /> 
          );
        })      
      }
    </div>
  ); 
}

export default App;
