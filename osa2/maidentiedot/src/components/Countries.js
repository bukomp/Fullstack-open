import React from'react';

const Countries = (props) => {
  let countries = [];
  let display;

  if(props.countryData !== undefined) {

    if (props.newFilter) {

      props.countryData.forEach(country => {

        if (country.name.includes(props.newFilter)){
          countries.push(
            {
              name: country.name,
              capital: country.capital,
              population: country.population,
              languages: country.languages,
              flag: country.flag
            }
          )
        }
      })

      if(countries.length > 10) {
        display = "Too many matches, specify another filter"
      } else if(countries.length === 1){

        const languages = []
        countries[0].languages.forEach(language => {languages.push(<li key={language.name}>{language.name}</li>)})

        display =
          <React.Fragment>
            <h1>
              {countries[0].name}
            </h1>
            <div>
              {`Capital ${countries[0].capital}`}
            </div>
            <div>
              {`Population ${countries[0].population}`}
            </div>
            <h2>languages</h2>
            <ul>
              {languages}
            </ul>
            <img src={countries[0].flag} style={{width:"20%", margin: "10px"}}/>
          </React.Fragment>
      } else {
        display = []
        countries.forEach(country => {display.push(<div>{country.name}</div>)})
      }

    }

  }
  return(
    <div>
      {display}
    </div>
  );
};

export default Countries;