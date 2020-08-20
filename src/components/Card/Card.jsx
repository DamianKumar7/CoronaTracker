import React from 'react';
import {Card, CardContent, Typography,Grid} from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const cards = ({data :{confirmed,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed){
        return "loading..."
    }
    return(
        <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
                <Grid item component= {Card} xs = {12} md = {3} className = {cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color = 'textSecondary' gutterBottom>Confirmed</Typography>
                        <Typography variant = 'h4'>
                        <CountUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {1}
                            separator = ','
                        />
                        </Typography>
                        <Typography color = 'textSecondary' >Last Updated {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = 'body'>No. of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component= {Card} xs = {12} md = {3} className = {cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color = 'textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant = 'h4'>
                        <CountUp 
                            start = {0}
                            end = {recovered.value}
                            duration = {1}
                            separator = ','
                        />
                        </Typography>
                        <Typography color = 'textSecondary' >Last Updated {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = 'body2'>No. of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component= {Card} xs = {12} md = {3} className = {cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color = 'textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant = 'h3'>
                        <CountUp 
                            start = {0}
                            end = {deaths.value}
                            duration = {1}
                            separator = ','
                        />
                        </Typography>
                        <Typography color = 'textSecondary' >Last Updated {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = 'body'>No. of active cases</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )

}
export default cards;
