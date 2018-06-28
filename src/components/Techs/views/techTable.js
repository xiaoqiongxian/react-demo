import React from 'react';
import {bindActionCreators} from 'redux';
import {remove} from './../actions.js';
import {connect} from 'react-redux';
import { Table,Icon} from 'antd';
import UpdateTech from './updateTech.js';

const { Column} = Table;
export const stateKey = 'techs';

function TechTable({onRemove, data}) {
  return (
    <div>
      <Table dataSource={data}>
        <Column
          title="id"
          dataIndex="id"
          key="id"
        />
        <Column
          title="name"
          dataIndex="name"
          key="name"
        />
        <Column
          title="status"
          dataIndex="status"
          key="status"
        />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <div>
              <UpdateTech id={record.id} name={record.name} status={record.status} />
              <Icon type="delete" onClick={() => onRemove(record.id)}></Icon>
            </div>
          )}
        />
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state[stateKey] || [{key:"0",id:"0",name:"javascript",status:"精通"}]
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRemove: remove
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TechTable);

