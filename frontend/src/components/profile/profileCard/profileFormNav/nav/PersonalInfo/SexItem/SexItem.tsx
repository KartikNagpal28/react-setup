import React from 'react';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Select, Option } from '@app/components/common/selects/Select/Select';

export const SexItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="sex" label="Sex">
      <Select>
        <Option value="male">
          <Space align="center">
            <ManOutlined />
            Male
          </Space>
        </Option>
        <Option value="female">
          <Space align="center">
            <WomanOutlined />
            Female
          </Space>
        </Option>
      </Select>
    </BaseButtonsForm.Item>
  );
};
