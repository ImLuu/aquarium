import React from 'react'
import './Tarjeta.css'
import { Card, Text ,ProgressBar, Metric} from '@tremor/react';
const Tarjeta = () => {
  return (
    <Card>
        <Text>Sales</Text>
        <Metric>$71.000</Metric>
        <ProgressBar/>
    </Card>
  )
}
export default Tarjeta;