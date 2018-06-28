import React, { Component } from 'react'
import echarts from 'echarts'

export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {

      },
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.loadChart()
    }, 500)
  }

  loadChart() {
    this.chartObj = echarts.init(this.chart)
    const option = {
    	color:["#ec670b"],
	    title: {
	        text: '技能分布图'
	    },
	    tooltip: {},
	    legend: {
	        data: ['']
	    },
	    radar: {
	        shape: 'circle',
	        name: {
	            textStyle: {
	                color: '#ffffff',
	                backgroundColor: '#ec670b',
	                borderRadius: 3,
	                padding: [3, 5]
	           }
	        },
	        indicator: [
	           { name: 'javascript', max: 100},
	           { name: 'ES6', max: 100},
	           { name: 'Html5', max: 100},
	           { name: 'CSS3', max: 100},
	           { name: 'React.js', max: 100},
	           { name: 'vue.js', max: 100},
	           { name: 'angular.js', max: 100},
	           { name: 'node.js', max: 100},
	           { name: 'java', max: 100},
	           { name: 'webpack', max: 100},
	           { name: 'git', max: 100},
	           { name: 'svn', max: 100},
	        ]
	    },
	    series: [{
	        type: 'radar',
	        data : [
	             {
	                value : [90, 82, 92, 90, 70, 95, 20, 60, 50, 79, 95, 80],
	                name : '分数'
	            }
	        ]
	    }]
	};
    this.chartObj.setOption(option)
  }

  render() {
    return (
      <div>
        <div style={{width:'1000px', height:'600px'}} ref={c => this.chart = c}></div>
      </div>
    )
  }
}
