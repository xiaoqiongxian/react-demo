import React from 'react';
import {bindActionCreators} from 'redux';
import {remove} from '../actions.js';
import {connect} from 'react-redux';
import { Table, Button } from 'antd';

export const stateKey = 'techTable';

function TechTable({onRemove,dataSource}) {
  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '掌握程度',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="danger" onClick={() => onRemove(record.id)}>Delete</Button>
      </span>
    ),
  }];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  dataSource: state[stateKey] || [{key: '1',id:'1',name: 'JavaScript',status: '精通'}]
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRemove: remove
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TechTable);

