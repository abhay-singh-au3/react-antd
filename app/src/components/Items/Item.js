import React from 'react';
import { Card, Col, Avatar, Tag, Space } from 'antd';

const { Meta } = Card;

const Item = ({
  trackName,
  artworkUrl100,
  artistName,
  previewUrl,
  primaryGenreName,
  country,
  collectionPrice,
}) => (
  <Col span={{ xs: 24, sm: 24, md: 12, lg: 6 }} className="row-gutter">
    <Space direction="vertical">
      <Card hoverable style={{ width: 450 }} title={trackName}>
        <Tag color="green">$ {collectionPrice}</Tag>
        <Tag color="magenta">{country}</Tag>
        <br />
        <audio preload="none" controls style={{ width: '85%', padding: 5 }}>
          <source src={previewUrl} type="audio/mpeg" />
          Not supported
        </audio>
        <Meta
          title={artistName}
          description={primaryGenreName}
          avatar={<Avatar src={artworkUrl100} />}
        />
      </Card>
    </Space>
  </Col>
);

export default Item;
