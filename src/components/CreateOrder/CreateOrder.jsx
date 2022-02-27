import React from 'react';
import {
  Button, Card, Cascader, Form, Input, InputNumber, Select,
} from 'antd';
import ReactQuill from 'react-quill';
import './index.scss';
import 'react-quill/dist/quill.snow.css';
import { createOrUpdateItem } from '../../service';

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
        onFinish={async (values) => { await createOrUpdateItem(values); }}
        className="form"
      >
        <Form.Item label="商品分类" name="category" required>
          <Cascader
            options={[
              {
                value: 1,
                label: '服装',
                children: [
                  {
                    value: 2,
                    label: '外套',
                  },
                  {
                    value: 3,
                    label: 'T恤',
                  },
                  {
                    value: 4,
                    label: '休闲裤',
                  },
                  {
                    value: 5,
                    label: '牛仔裤',
                  },
                  {
                    value: 6,
                    label: '衬衫',
                  },
                  {
                    value: 7,
                    label: '男鞋',
                  },
                ],
              },
              {
                value: 8,
                label: '手机数码',
                children: [
                  {
                    value: 9,
                    label: '手机通讯',
                  },
                  {
                    value: 10,
                    label: '手机配件',
                  },
                  {
                    value: 11,
                    label: '摄影摄像',
                  },
                  {
                    value: 12,
                    label: '影音娱乐',
                  },
                  {
                    value: 13,
                    label: '数码配件',
                  },
                  {
                    value: 14,
                    label: '智能设备',
                  },
                ],
              },
              {
                value: 15,
                label: '家用电器',
                children: [
                  {
                    value: 16,
                    label: '电视',
                  },
                  {
                    value: 17,
                    label: '空调',
                  },
                  {
                    value: 18,
                    label: '洗衣机',
                  },
                  {
                    value: 19,
                    label: '冰箱',
                  },
                  {
                    value: 20,
                    label: '厨卫家电',
                  },
                  {
                    value: 21,
                    label: '厨房小电',
                  },
                  {
                    value: 22,
                    label: '生活电器',
                  },
                  {
                    value: 23,
                    label: '个护健康',
                  },
                ],
              },
              {
                value: 24,
                label: '家居家装',
                children: [
                  {
                    value: 25,
                    label: '厨房卫浴',
                  },
                  {
                    value: 26,
                    label: '灯饰照明',
                  },
                  {
                    value: 27,
                    label: '五金工具',
                  },
                  {
                    value: 28,
                    label: '卧室家具',
                  },
                  {
                    value: 29,
                    label: '客厅家具',
                  },
                ],
              },
              {
                value: 30,
                label: '汽车用品',
                children: [
                  {
                    value: 31,
                    label: '全新整车',
                  },
                  {
                    value: 32,
                    label: '车载电器',
                  },
                  {
                    value: 33,
                    label: '维修保养',
                  },
                  {
                    value: 34,
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
        <Form.Item name="subtitle" label="副标题" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="brand" label="商品品牌" rules={[{ required: true }]}>
          <Select>
            <Select.Option value={1}>小米</Select.Option>
            <Select.Option value={2}>七匹狼</Select.Option>
            <Select.Option value={3}>海澜之家</Select.Option>
            <Select.Option value={4}>苹果</Select.Option>
            <Select.Option value={5}>三星</Select.Option>
            <Select.Option value={6}>华为</Select.Option>
            <Select.Option value={7}>格力</Select.Option>
            <Select.Option value={8}>方太</Select.Option>
            <Select.Option value={9}>万和</Select.Option>
            <Select.Option value={10}>OPPO</Select.Option>
            <Select.Option value={11}>NIKE</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="introduction" label="商品介绍">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="item_number" label="商品货号">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="商品售价" rules={[{ type: 'number', min: 0 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="market_price" label="市场价" rules={[{ type: 'number', min: 0 }]}>
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
