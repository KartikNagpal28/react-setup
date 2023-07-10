import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Badge } from '@app/components/common/Badge/Badge';
import { NotificationsOverlay } from '@app/components/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';
import { Popover } from '@app/components/common/Popover/Popover';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>();
  const [isOpened, setOpened] = useState(false);

  return (
    <Popover trigger="click" onOpenChange={setOpened}>
      <HeaderActionWrapper>
        <Button
          type={isOpened ? 'ghost' : 'text'}
          icon={
            <Badge dot>
              <BellOutlined />
            </Badge>
          }
        />
      </HeaderActionWrapper>
    </Popover>
  );
};
