import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent  {
  @Input() label=''
  @Input() chartLabel=''
   @Input() color=''
  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    title: {
        text: ""
    },
    axisY: {
        title: "",
        valueFormatString: "#0,,.",
        suffix: "M"
    },
    data: 
    [
      {
        type: "splineArea",
        color: "#6739bc",
        name: 'Input(A)',
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: [
            { x: new Date(2004, 0), y: 2506000 },
            { x: new Date(2005, 0), y: 2798000 },
            { x: new Date(2006, 0), y: 3386000 },
            { x: new Date(2007, 0), y: 6944000 },
            { x: new Date(2008, 0), y: 6026000 },
            { x: new Date(2009, 0), y: 2394000 },
            { x: new Date(2010, 0), y: 1872000 },
            { x: new Date(2011, 0), y: 2140000 },
            { x: new Date(2012, 0), y: 7289000 },
            { x: new Date(2013, 0), y: 4830000 },
            { x: new Date(2014, 0), y: 2009000 },
            { x: new Date(2015, 0), y: 2840000 },
            { x: new Date(2016, 0), y: 2396000 },
            { x: new Date(2017, 0), y: 1613000 },
            { x: new Date(2018, 0), y: 2821000 },
            { x: new Date(2019, 0), y: 2000000 },
            { x: new Date(2020, 0), y: 1397000 }
        ]
    },
    {
      type: "splineArea",
      color: "#eb6824",
      name: 'Input(B)',
      showInLegend: true,
      xValueFormatString: "YYYY",
      dataPoints: [
        { x: new Date(2004, 0), y: 3456200 },
        { x: new Date(2005, 0), y: 4567100 },
        { x: new Date(2006, 0), y: 5678900 },
        { x: new Date(2007, 0), y: 6789100 },
        { x: new Date(2008, 0), y: 7890100 },
        { x: new Date(2009, 0), y: 8901200 },
        { x: new Date(2010, 0), y: 9012300 },
        { x: new Date(2011, 0), y: 1234500 },
        { x: new Date(2012, 0), y: 2345600 },
        { x: new Date(2013, 0), y: 3456700 },
        { x: new Date(2014, 0), y: 4567800 },
        { x: new Date(2015, 0), y: 5678900 },
        { x: new Date(2016, 0), y: 6789100 },
        { x: new Date(2017, 0), y: 7890200 },
        { x: new Date(2018, 0), y: 8901300 },
        { x: new Date(2019, 0), y: 9012400 },
        { x: new Date(2020, 0), y: 1234600 }
      ]
  },
  {
    type: "splineArea",
    color: "#34a487",
    name: 'Input(C)',
    showInLegend: true,
    xValueFormatString: "YYYY",
    dataPoints: [
      { x: new Date(2004, 0), y: 3598000 },
      { x: new Date(2005, 0), y: 4076000 },
      { x: new Date(2006, 0), y: 4654000 },
      { x: new Date(2007, 0), y: 5212000 },
      { x: new Date(2008, 0), y: 5790000 },
      { x: new Date(2009, 0), y: 6368000 },
      { x: new Date(2010, 0), y: 6946000 },
      { x: new Date(2011, 0), y: 7524000 },
      { x: new Date(2012, 0), y: 8102000 },
      { x: new Date(2013, 0), y: 8680000 },
      { x: new Date(2014, 0), y: 9258000 },
      { x: new Date(2015, 0), y: 9836000 },
      { x: new Date(2016, 0), y: 10424000 },
      { x: new Date(2017, 0), y: 11011600 },
      { x: new Date(2018, 0), y: 11599200 },
      { x: new Date(2019, 0), y: 12186800 },
      { x: new Date(2020, 0), y: 12774400 }
  
    ]
}
  ]
}


}
