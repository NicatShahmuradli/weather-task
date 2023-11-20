import React from 'react';
import { Card } from 'antd';



function Cardx({data}) {
    let imga=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`

  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={imga} />}
  >
  <img/>
  <p>{data.name}</p>
  <p>havanin tempi- {data.main.temp}</p>

  </Card>
  )
}

export default Cardx