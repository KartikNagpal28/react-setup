import React from 'react';
import { Col, Row, Switch } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface TwoFactorSwitchProps {
  isEnabled: boolean;
  setEnabled: (state: boolean) => void;
}

export const TwoFactorSwitch: React.FC<TwoFactorSwitchProps> = ({ isEnabled, setEnabled }) => {
  return (
    <BaseButtonsForm.Item>
      <Row gutter={[10, 10]} justify="space-between" align="middle">
        <Col span={20}>
          <BaseButtonsForm.Title>Two–factor authentication</BaseButtonsForm.Title>
        </Col>
        <Col span={4}>
          <Row justify="end">
            <Col>
              <BaseButtonsForm.Item name="2fa">
                <Switch checked={isEnabled} onChange={setEnabled} />
              </BaseButtonsForm.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </BaseButtonsForm.Item>
  );
};
