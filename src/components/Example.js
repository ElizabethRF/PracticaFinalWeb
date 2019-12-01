import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

const MSEC_DAILY = 86400000 * 30.5;

export default function Example(props) {
  const timestamp = new Date('January 1 2017').getTime();
  return (
    <XYPlot xType="time" width={400} height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="Date" />
      <YAxis title="People" />
      <LineSeries
        data={[
          {x: timestamp + MSEC_DAILY, y: 3},
          {x: timestamp + MSEC_DAILY * 2, y: 5},
          {x: timestamp + MSEC_DAILY * 3, y: 15},
          {x: timestamp + MSEC_DAILY * 4, y: 12}
        ]}
      />
      <LineSeries data={null} />
      <LineSeries
        data={[
          {x: timestamp + MSEC_DAILY, y: 10},
          {x: timestamp + MSEC_DAILY * 2, y: 4},
          {x: timestamp + MSEC_DAILY * 3, y: 2},
          {x: timestamp + MSEC_DAILY * 4, y: 15}
        ]}
      />
    </XYPlot>
  );
}