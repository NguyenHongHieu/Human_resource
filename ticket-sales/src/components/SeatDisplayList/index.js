import { Space } from 'antd'
import React from 'react'
import initData from './data'

function SeatDisplayList() {
  console.log(initData);
  return (
    <div style={{ width: '460px', margin: 10, padding: 5, border: '1px solid black' }}>
      <Space size='large' wrap>
        {
          initData.map((item, index) => {
            return <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                backgroundColor: 'gray',
              }}
            >
              <h2 style={{ color: 'white' }}>{item.numberSeat}</h2>
            </div>
          })
        }
      </Space>
    </div>
  )
}

export default SeatDisplayList
