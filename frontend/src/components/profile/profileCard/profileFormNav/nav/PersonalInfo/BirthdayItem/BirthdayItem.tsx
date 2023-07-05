import React from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as S from './BirthdayItem.styles';

export const BirthdayItem: React.FC = () => {
  return (
    <BaseButtonsForm.Item name="birthday" label="Birthday">
      <S.BirthdayPicker format="L" />
    </BaseButtonsForm.Item>
  );
};
