'use client'
import React, { useState } from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
 
 
const PieChartComponent = ({stock,keys,currentPriceArray}) => {
    console.log(stock)
    console.log(keys)
    console.log(currentPriceArray)

    let tmp = keys.map(a => new Object({ name: a, value: currentPriceArray[a] *  stock[a]['count'] }))
    let data= tmp.sort((a,b) => {
        if(a.value > b.value) return 1;
        if(a.value < b.value) return -1;
        return 0;
      });

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    console.log(data)
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

// random color
    function makeRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
      }


    return (
        <>
            <div>

                    {/* <h1>Favorite Beverages - technostuf.com</h1> */}
                    {/* <hr /> */}
                    <div className="col-md-8">
                        <ResponsiveContainer width={300} height={400} className="text-center">
                            <PieChart width={300} height={400}>

                                <Pie
                                    dataKey="value"
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                    fill="#8884d8"
                                    label={renderCustomizedLabel}
                                    labelLine={false}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}
export default PieChartComponent;