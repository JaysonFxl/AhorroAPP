import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatNumber } from '../utils/numberFormat';

const SavingsChart = ({ savingsData, time }) => {
  const data = savingsData.slice(0, time);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={formatNumber} />
        <Tooltip formatter={(value) => formatNumber(Math.floor(value))} />
        <Legend />
        <Line type="monotone" dataKey="savings" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="rateOfChange" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SavingsChart;
