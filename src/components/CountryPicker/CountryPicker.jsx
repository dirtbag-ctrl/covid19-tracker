// import dependencies 
import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

//import stylesheet
import styles from './CountryPicker.module.css';



// import countries function from API module 
import { fetchCountries } from '../../api';
import createMixins from '@material-ui/core/styles/createMixins';

const CountryPicker = ({ handleCountryChange }) => {
    //store data in array when fetched
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            //popule country data w/ setter fxn
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);


    return (
        // Picker for Selected Country
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" variant='filled' onChange={(e) => handleCountryChange(e.target.value)} className={styles.picker}>
                <option value="">Global</option>
                {/* Traverse through each country in API*/}
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )
}

export default CountryPicker;