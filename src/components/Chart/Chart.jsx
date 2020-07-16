// import dependencies 
import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'; //import API 
import { Line, Bar } from 'react-chartjs-2';//import charts

// import stylesheet
import styles from './Chart.module.css';

const Charts = ({ data: { confirmed, recovered, deaths}, country }) => {
    //stores data in array when fetched
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            //popule daily data w/ setter fxn
            setDailyData(await fetchDailyData());
        }
        //console.log(dailyData);
        fetchAPI();
    }, []);

    //line chart for global data
    const lineChart = (

        // if statement to handle if data not present
        dailyData.length
            ? (
                <Line
                    //seed data to chart
                    data={{
                        labels: dailyData.map(({ date }) => date), //return array w/ all dates
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed), //return array w/ all affected 
                            label: 'Infected',//name of chart
                            borderColor: '#FAA11D', // color style
                            backgroundColor: 'rgba(250,161,29,0.09)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths), //return array w/ all deaths 
                            label: 'Deaths',//name of chart
                            borderColor: '#D7351F', // color style
                            backgroundColor: 'rgba(215,53,31,0.5)',
                            fill: true,
                        }],
                    }}
                />) : null

    );
    console.log(confirmed, recovered, deaths);

    //bar chart for selected countries 
    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],//barchart for each subject
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                '#FAA11D',
                                '#5DC9B6',
                                '#D7351F',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current State in ${country}` },

                    }}
                />
            ) : null
    );
    return (
        <div className={styles.container}>
            {/* if country selected show bar chat else show line chart*/}
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;