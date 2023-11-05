'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({date}){

    return(
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={date}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="money" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    )

}