import React from 'react';
import {connect} from 'react-redux';
import { Modal, Icon, Button, Form, Input} from 'antd';
import {update} from '../actions.js';

const FormItem  = Form.Item;

const UpdateForm = Form.create({
  onFieldsChange(props,changedFields){
      debugger
      props.onChange(changedFields);
    },

    mapPropsToFields(props){
      return {
        name:Form.createFormField({
          ...props.name,
          value:props.name.value
        }),
        status:Form.createFormField({
          ...props.status,
          value:props.status.value
        })
      }
    },

    onValuesChange(_,values){
      console.log(values)
    }

})((props) => {
  const {visible,onCancel,onCreate,form} = props;
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol:{
      sm:{span:4}
    },
    wrapperCol:{
      sm:{span:20}
    }
  }
  return (
    <Modal
      visible={visible}
      title="修改"
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem 
        {...formItemLayout}
        label="技能">
          {getFieldDecorator("name",{
            rules:[{required:true,message:"请输入技能"}],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem 
        {...formItemLayout}
        label="掌握程度">
          {getFieldDecorator("status",{
            rules:[{required:true,message:"请输入掌握程度"}],
          })(
            <Input />
          )}
        </FormItem>
      </Form>
    </Modal>
  )
})

class UpdateTech extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      key:props.key,
      id:props.id,
      fields:{
        name:{
          value:props.name,
        },
        status:{
          value:props.status
        }
      },
      visible: false,
      confirmLoading: false,
    };
  }

  handelFormChange = (changedFields) => {
    debugger
    this.setState(({ fields }) => ({
      fields:{...fields,...changedFields},
    }));
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleUpdate = () => {
    const _self = this;

    _self.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          _self.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 200);
        let tech = {
          key:_self.state.key,
          id:_self.state.id,
          name:_self.state.fields.name.value,
          status:_self.state.fields.status.value
        }
        _self.props.onUpdate(tech);

    /*const form = this.formRef.props.form;
    form.validateFields((err, valus)=>{
      if(err){
        return;
      }else{
        _self.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          _self.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 200);
        let tech = {
          key:_self.state.key,
          id:_self.state.id,
          name:_self.state.fields.name.value,
          status:_self.state.fields.status.value
        }
        _self.props.onUpdate(tech);
        form.reset
      }
    })*/
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  saveFormRef = (formRef)=>{
    this.formRef = formRef;
  }

  render() {
    const { visible, confirmLoading} = this.state;
    const fields = this.state.fields;
    return (
      <div className="option-update">
        <Icon type="edit" onClick={this.showModal}></Icon>
        <UpdateForm
          {...fields}
          onChange={this.handelFormChange}
          
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleUpdate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (tech) => {
      dispatch(update(tech));
    }
  }
};

export default connect(null, mapDispatchToProps)(UpdateTech);