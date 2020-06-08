import React from 'react';
import { Row, Result, BackTop, Space } from 'antd';
import { connect } from 'react-redux';

import Item from '../Items/Item';
import { mapStateToProps } from '../../store/store';
import { CustomSpinner } from '../Styled-components';

const ItemContainer = ({ data: { results, error, loading } }) => (
  <>
    <Space direction="horizontal" align="center">
      <BackTop />
      <Row gutter={16}>
        {results.length > 0
          ? results.map((val, index) => <Item key={index} {...val} />)
          : null}
      </Row>
    </Space>
    {loading ? <CustomSpinner /> : null}
    {error ? <Result status="404" title="404" subTitle={error} /> : null}
  </>
);

export default connect(mapStateToProps)(ItemContainer);
