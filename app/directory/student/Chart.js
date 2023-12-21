'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';


export default function Chart({date}){

    return(
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={400}
          height={200}
          data={date}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 10,
          }}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          
          <Line type="monotone" dataKey="money" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    )

}