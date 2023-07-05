import React from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Card } from '@app/components/common/Card/Card';
import { NotificationsTypes } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/NotificationsTypes/NotificationsTypes';
import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  return (
    <Card>
      <BaseButtonsForm.Item>
        <BaseButtonsForm.Title>Notifications settings</BaseButtonsForm.Title>
      </BaseButtonsForm.Item>
      <S.Description>Choose for which activities you want to get an email or push notification.</S.Description>
      <NotificationsTypes />
    </Card>
  );
};
