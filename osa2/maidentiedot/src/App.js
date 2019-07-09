import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState([]);
  const [newSearch, setSearch] = useState('');

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(r => {
      console.log(r.data);
      setCountries(r.data)
    })
  },[]);

  const onSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <React.Fragment>
      Find Countries
      <Filter
        onChange={onSearch}
        value={newSearch}
      />
      <Countries
        countryData={countries}
        newFilter={newSearch}
      />
    </React.Fragment>
  );
}

export default App;
