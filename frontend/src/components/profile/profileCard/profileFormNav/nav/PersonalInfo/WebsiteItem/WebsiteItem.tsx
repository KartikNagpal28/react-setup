import React from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { OpenURLInput } from '@app/components/common/inputs/OpenURLInput/OpenURLInput';
import { websitePattern } from '@app/constants/patterns';

const scheme = 'https://';

interface WebsiteItemProps {
  website?: string;
}

export const WebsiteItem: React.FC<WebsiteItemProps> = () => {
  return (
    <BaseButtonsForm.Item shouldUpdate>
      {({ getFieldValue }) => {
        const website = getFieldValue('website');

        return (
          <BaseButtonsForm.Item
            name="website"
            label="Website"
            rules={[
              {
                pattern: websitePattern,
                message: 'Please input a valid URL!',
              },
            ]}
          >
            <OpenURLInput href={`${scheme}${website}`} target="_blank" addonBefore={scheme} />
          </BaseButtonsForm.Item>
        );
      }}
    </BaseButtonsForm.Item>
  );
};
