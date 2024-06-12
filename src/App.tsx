import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate {
  people:{
    name: string,
    age: number,
    url: string,
    note?: string | undefined;
  }[]
}

function App() {

  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'Lebron James',
      url: 'https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/06/11223100/GettyImages-2151103340-1024x683.jpg',
      age: 36,
      note: 'Loves basketball alot. Greatest of all time'
    }
    // {
    //     name: 'Jack Sparrow',
    //     url: '',
    //     age: 40,
    //     note: 'Captain of the black pearl'
    //   },
    //   {
    //       name: 'Sergio Aguero',
    //       url: '',
    //       age: 33,
    //       note: 'Man City all time leading goal scorer'
    //   }
])
  
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/> 
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
