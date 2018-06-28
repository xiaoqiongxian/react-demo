import React from 'react';
import {connect} from 'react-redux';
import { Modal, Button, Form, Input} from 'antd';
import {add} from '../actions.js';

const FormItem  = Form.Item;

/*const AddForm = Form.create({
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
      title="新增"
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
})*/

const AddForm = Form.create({
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

})(
  class extends React.Component {
    render(){
      const {visible,onCancel,onCreate,form} = this.props;
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
          title="新增"
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
    }
  }
)

class AddTech extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fields:{
        name:{
          value:"",
        },
        status:{
          value:""
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

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleCreate = () => {
    const _self = this;
    const form = this.formRef.props.form;
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
          name:_self.state.fields.name.value,
          status:_self.state.fields.status.value
        }
        _self.props.onAdd(tech);
        form.reset
      }
    })
  }

  saveFormRef = (formRef)=>{
    this.formRef = formRef;
  }
  
  render() {
    const { visible, confirmLoading} = this.state;
    const fields = this.state.fields;
    return (
      <div className="tool-add">
        <Button type="primary" icon="plus" onClick={this.showModal}>新增</Button>
        <AddForm
          {...fields}
          onChange={this.handelFormChange}
          wrappedComponentRef={(inst) => this.formRef = inst}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (tech) => {
      dispatch(add(tech));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTech);


