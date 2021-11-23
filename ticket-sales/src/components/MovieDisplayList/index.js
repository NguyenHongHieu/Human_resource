import { List, Card, Tooltip } from 'antd';
import React from 'react'
import data from './data';

function MovieDisplayList() {

  return (
    < List
      pagination={{
        simple: true,
        pageSize: 2,
        style: { textAlign: 'center', }
      }}
      style={{ backgroundColor: 'gray' }}
      grid={{ gutter: 16, column: 3 }}
      dataSource={data}
      renderItem={(item, index) => {
        const { title, description, imgUrl } = item;
        return (
          <List.Item>
            <Card
              hoverable
              style={{ width: 240, margin: 20 }}
              cover={<img alt='' src={imgUrl} />}
            >
              <Tooltip title={`${description} - ${title}`} >
                <Card.Meta title={title} />
              </Tooltip >
            </Card>
          </List.Item>
        );
      }}
    />
  )
}

export default MovieDisplayList;
