// import dependencies 
import React from 'react';

// import components
import { Cards, Chart, CountryPicker } from './components';
//import stylesheet
import styles from './App.module.css';
// import function 
import { fetchData } from './api';
//import image 
import covidImage from './components/img/image.png';
//import footer
import Footer from './footer/footer';

// PARENT COMPONENT (GLOBAL COMPONENT)
 
class App extends React.Component {
    // store data in objects
    state = {
        data: {},
        country: ''
    }

    //receive fetch data from API
    async componentDidMount () {
        const fetchedData = await fetchData();

        //populate data in state
        this.setState({ data: fetchedData});
    }

    // handle country change on picker
    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);//fetch data according to picker value
         //populate data in state matching w/ country selected
         this.setState({ data: fetchedData, country: country});



    }

    render() {
        //construct data 
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                {/* Render Components */}
                <img className= {styles.image} src={covidImage} alt="COVID-19" />
                <Cards  data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <Footer />
            </div>
        );
    }
}
export default App;