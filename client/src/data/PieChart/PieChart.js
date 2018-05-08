import React, {Component} from "react";
import {
    render
} from 'react-dom'
import {
    ResponsivePie
} from '@nivo/pie'


const PieChart = (props) => {

    let {read, unread} = props;

    let data = [{
            "id": "read",
            "label": "read",
            "value": props.read,
            "color": "hsl(35, 70%, 50%)"
        }, {
            "id": "unread",
            "label": "unread",
            "value": props.unread,
            "color": "hsl(161, 70%, 50%)"
        }];


    return (<ResponsivePie
        data = {data}
     margin = {
         {
             "top": 0,
             "right": 0,
             "bottom": 0,
             "left": 0
         }
     }
     innerRadius = {
         0.15
     }
     padAngle = {
         0.7
     }
     cornerRadius = {
         14
     }
     colors = "d320c"
     colorBy = "id"
     borderColor = "inherit:darker(0.6)"
     radialLabelsSkipAngle = {
         10
     }
     radialLabelsTextXOffset = {
         6
     }
     radialLabelsTextColor = "#333333"
     radialLabelsLinkOffset = {
         0
     }
     radialLabelsLinkDiagonalLength = {
         16
     }
     radialLabelsLinkHorizontalLength = {
         24
     }
     radialLabelsLinkStrokeWidth = {
         1
     }
     radialLabelsLinkColor = "inherit"
     slicesLabelsSkipAngle = {
         0
     }
     slicesLabelsTextColor = "#333333"
     animate = {
         true
     }
     motionStiffness = {
         0
     }
     motionDamping = {
         15
     }
     legends = {
         [{
             "anchor": "bottom",
             "direction": "row",
             "translateY": 56,
             "itemWidth": 100,
             "itemHeight": 14,
             "symbolSize": 14,
             "symbolShape": "circle"
         }]
     }
     />
    )

    
}

export default PieChart;


