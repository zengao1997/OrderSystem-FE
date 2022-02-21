import React from 'react';
import {
  Button, Card, Cascader, Form, Input, InputNumber, Select,
} from 'antd';
import ReactQuill from 'react-quill';
import './index.scss';
import 'react-quill/dist/quill.snow.css';

function CreateOrder() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ];
  return (
    <Card className="create-order-card">
      <h2 className="title">创建订单</h2>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        name="create-order"
        onFinish={(values) => { console.log(values); }}
        className="form"
      >
        <Form.Item label="商品分类" name="category" required>
          <Cascader
            options={[
              {
                value: '服装',
                label: '服装',
                children: [
                  {
                    value: '外套',
                    label: '外套',
                  },
                  {
                    value: 'T恤',
                    label: 'T恤',
                  },
                  {
                    value: '休闲裤',
                    label: '休闲裤',
                  },
                  {
                    value: '牛仔裤',
                    label: '牛仔裤',
                  },
                  {
                    value: '衬衫',
                    label: '衬衫',
                  },
                  {
                    value: '男鞋',
                    label: '男鞋',
                  },
                ],
              },
              {
                value: '手机数码',
                label: '手机数码',
                children: [
                  {
                    value: '手机通讯',
                    label: '手机通讯',
                  },
                  {
                    value: '手机配件',
                    label: '手机配件',
                  },
                  {
                    value: '摄影摄像',
                    label: '摄影摄像',
                  },
                  {
                    value: '影音娱乐',
                    label: '影音娱乐',
                  },
                  {
                    value: '数码配件',
                    label: '数码配件',
                  },
                  {
                    value: '智能设备',
                    label: '智能设备',
                  },
                ],
              },
              {
                value: '家用电器',
                label: '家用电器',
                children: [
                  {
                    value: '电视',
                    label: '电视',
                  },
                  {
                    value: '空调',
                    label: '空调',
                  },
                  {
                    value: '洗衣机',
                    label: '洗衣机',
                  },
                  {
                    value: '冰箱',
                    label: '冰箱',
                  },
                  {
                    value: '厨卫家电',
                    label: '厨卫家电',
                  },
                  {
                    value: '厨房小电',
                    label: '厨房小电',
                  },
                  {
                    value: '生活电器',
                    label: '生活电器',
                  },
                  {
                    value: '个护健康',
                    label: '个护健康',
                  },
                ],
              },
              {
                value: '家居家装',
                label: '家居家装',
                children: [
                  {
                    value: '厨房卫浴',
                    label: '厨房卫浴',
                  },
                  {
                    value: '灯饰照明',
                    label: '灯饰照明',
                  },
                  {
                    value: '五金工具',
                    label: '五金工具',
                  },
                  {
                    value: '卧室家具',
                    label: '卧室家具',
                  },
                  {
                    value: '客厅家具',
                    label: '客厅家具',
                  },
                ],
              },
              {
                value: '汽车用品',
                label: '汽车用品',
                children: [
                  {
                    value: '全新整车',
                    label: '全新整车',
                  },
                  {
                    value: '车载电器',
                    label: '车载电器',
                  },
                  {
                    value: '维修保养',
                    label: '维修保养',
                  },
                  {
                    value: '汽车装饰',
                    label: '汽车装饰',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="name" label="商品名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="sub-title" label="副标题" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="brand" label="商品品牌" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="小米">小米</Select.Option>
            <Select.Option value="七匹狼">七匹狼</Select.Option>
            <Select.Option value="海澜之家">海澜之家</Select.Option>
            <Select.Option value="苹果">苹果</Select.Option>
            <Select.Option value="三星">三星</Select.Option>
            <Select.Option value="华为">华为</Select.Option>
            <Select.Option value="格力">格力</Select.Option>
            <Select.Option value="方太">方太</Select.Option>
            <Select.Option value="万和">万和</Select.Option>
            <Select.Option value="OPPO">OPPO</Select.Option>
            <Select.Option value="NIKE">NIKE</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="introduction" label="商品介绍">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="item-number" label="商品货号">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="商品售价" rules={[{ type: 'number', min: 0 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="market-price" label="市场价" rules={[{ type: 'number', min: 0 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="inventory" label="商品库存" rules={[{ type: 'number', min: 0 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="unit" label="计量单位">
          <Input />
        </Form.Item>
        <Form.Item name="weight" label="商品重量" rules={[{ type: 'number', min: 0 }]}>
          <InputNumber addonAfter="克" />
        </Form.Item>
        <Form.Item name="sort" label="排序" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="detail" label="规格参数" initialValue="">
          <ReactQuill theme="snow" modules={modules} formats={formats} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

      </Form>
    </Card>
  );
}

export default CreateOrder;
