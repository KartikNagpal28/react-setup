import React from 'react';
import { Space } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { languages } from '@app/constants/languages';

const languageOptions = languages.map((lang) => (
  <Option key={lang.id} value={lang.name}>
    <Space align="center">
      <ReactCountryFlag svg countryCode={lang.countryCode} alt="country flag" />
      {lang.title}
    </Space>
  </Option>
));

export const LanguageItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="language" label="Language">
      <Select>{languageOptions}</Select>
    </BaseButtonsForm.Item>
  );
};
