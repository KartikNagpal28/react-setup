import React, { useState, useEffect } from 'react';

import { LoginUserDetail } from '@app/api/auth.api';
import * as S from './UserProfile.styles';
import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
import { Input } from '../common/inputs/Input/Input';
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
};

export const UserProfile: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>(initValues);

  useEffect(() => {
    LoginUserDetail().then((res: any) => {
      if (res.data) {
        setUserData(res.data.user);
      }
    });
  }, []);
  return (
    <>
      <S.WrapperRow justify="space-between" style={{ overflow: 'hidden' }}>
        <S.FormWrapper>
          <BaseButtonsForm isFieldsChanged={false} name="createRetailer">
            <BaseButtonsForm.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: 'First Name required' }]}
            >
              <Input
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              />
            </BaseButtonsForm.Item>

            <BaseButtonsForm.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: 'Last Name required' }]}
            >
              <Input defaultValue={userData.lastName} />
            </BaseButtonsForm.Item>

            <BaseButtonsForm.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Email required', type: 'email' }]}
            >
              <Input defaultValue={userData.email} />
            </BaseButtonsForm.Item>
          </BaseButtonsForm>
        </S.FormWrapper>
      </S.WrapperRow>
    </>
  );
};
