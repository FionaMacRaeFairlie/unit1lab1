import React, { Component } from 'react' 
import {Bar} from 'react-chartjs-2';
 
class BarChartExample2 extends Component {
    state = {
        data:[]
    }
    componentDidMount() {
        const url = 'http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=55.9895989531941,-3.796229726988194'
        fetch(url)
          .then(result => result.json())
          .then(result => {
            this.setState({
              data: result.jobsBreakdown,
            })
          })
        }
   
    render() {
        const { data } = this.state
        var items = data.slice(0, 10).map(item => Math.round(item.percentage))
        var label = data.slice(0, 10).map(item => item.description)
             
        var chartData = {
           labels: label,
           datasets: [
             {
               label: 'Job Data',
               backgroundColor: 'rgba(50,99,300,0.2)',
               hoverBackgroundColor: 'rgba(50,99,300,0.6)',
               data: items
             }
           ]
         };
        return(   
            <Bar 
            data= {chartData}
            height={500}
            options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                 maintainAspectRatio: false
            }}
          />
        )
    
  }
}
export default BarChartExample2;

