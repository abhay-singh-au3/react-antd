import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Col, Row, message } from 'antd';

import { getData } from '../../actions';
import { NavTitle } from '../Styled-components';

const style = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

let SearchField = ({ getData }) => {
  const [form] = Form.useForm();
  const [query, setQuery] = useState('');

  const submit = () => {
    if (query.trim().length > 0) {
      getData(query);
    } else {
      message.info('Cannot search for empty values');
    }
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ ...style }}>
          <NavTitle>ITUNES</NavTitle>
          <Form layout="inline" form={form}>
            <Form.Item>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search here"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={submit}>
                Search
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const mapDispatchToProps = {
  getData: getData,
};

SearchField = connect(null, mapDispatchToProps)(SearchField);

export default SearchField;
