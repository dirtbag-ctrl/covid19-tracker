// import dependencies 
import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
// import classnames module 
import cx from 'classnames';

// import stylesheet
import styles from './Cards.module.css';


//gets real data
const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate } }) => {
    //console.log(confirmed);

    // if statement to handle errors while fetch data 
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* FIRST CARD */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    {/* Card Layout */}
                    <CardContent>
                        {/* Styling for text */}
                        <Typography color="textSecondary" gutterBottom className={cx(styles.title)}>Infected</Typography>
                        <Typography variant="h5" className={cx(styles.numbers1)}>
                             {/* Counting Styles for Numbers*/}
                             <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={cx(styles.date)}>{new Date (lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* SECOND CARD */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    {/* Card Layout */}
                    <CardContent>
                        {/* Styling for text */}
                        <Typography color="textSecondary" gutterBottom className={cx(styles.title)}>Recovered</Typography>
                        <Typography variant="h5"className={cx(styles.numbers2)}>
                            {/* Counting Styles for Numbers*/}
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={cx(styles.date)}>{new Date (lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2">Number of recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                
                {/* THIRD CARD */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    {/* Card Layout */}
                    <CardContent>
                        {/* Styling for text */}
                        <Typography color="textSecondary" gutterBottom className={cx(styles.title)}>Deaths</Typography>
                        <Typography variant="h5"className={cx(styles.numbers3)}>
                            {/* Counting Styles for Numbers*/}
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={cx(styles.date)}> {new Date (lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;