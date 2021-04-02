import { Typography, Space, Form, Button, Select } from "antd";

const { Title } = Typography;
const { Option } = Select;

function AboutYourselfStage() {
  return (
    <Space direction="vertical" size="large">
      <Title>Tell us about yourself, [name]</Title>

      <Form layout="vertical">
        <Form.Item label="What kind of work do you do?" name="workType">
          <Select>
            <Option value="marketing">Marketing</Option>
            <Option value="product">Product</Option>
            <Option value="design">Design</Option>
            <Option value="operations">Operations</Option>
            <Option value="sales">Sales</Option>
            <Option value="customerSuccess">Customer success</Option>
            <Option value="hr">HR</Option>
            <Option value="it">IT</Option>
            <Option value="engineering">Engineering</Option>
            <Option value="generalProjectManagement">
              General Project Management
            </Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}

export default AboutYourselfStage;
