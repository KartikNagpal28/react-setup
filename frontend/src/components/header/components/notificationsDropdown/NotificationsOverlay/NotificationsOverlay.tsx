import React, { useMemo } from 'react';
import { Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Notification } from 'components/common/Notification/Notification';
import { capitalize } from 'utils/utils';
import { Mention, Notification as NotificationType } from 'api/notifications.api';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from './NotificationsOverlay.styles';

interface NotificationsOverlayProps {
  notifications: NotificationType[];
  setNotifications: (state: NotificationType[]) => void;
}

export const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({
  notifications,
  setNotifications,
  ...props
}) => {
  const noticesList = useMemo(
    () =>
      notifications.map((notification, index) => {
        const type = notificationsSeverities.find((dbSeverity) => dbSeverity.id === notification.id)?.name;

        return (
          <Notification
            key={index}
            type={type || 'warning'}
            title={capitalize(type || 'warning')}
            description={notification.description}
            {...(type === 'mention' && {
              mentionIconSrc: (notification as Mention).userIcon,
              title: (notification as Mention).userName,
              description: (
                <></>
                // <Trans i18nKey={(notification as Mention).description}>
                //   <S.LinkBtn type="link" href={(notification as Mention).href}>
                //     {{ place: (notification as Mention).place }}
                //   </S.LinkBtn>
                // </Trans>
              ),
            })}
          />
        );
      }),
    [notifications],
  );

  return (
    <S.NoticesOverlayMenu {...props}>
      <S.MenuRow gutter={[20, 20]}>
        <Col span={24}>
          {notifications.length > 0 ? (
            <Space direction="vertical" size={10} split={<S.SplitDivider />}>
              {noticesList}
            </Space>
          ) : (
            <S.Text>No notifications yet</S.Text>
          )}
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            {notifications.length > 0 && (
              <Col span={24}>
                <S.Btn type="ghost" onClick={() => setNotifications([])}>
                  Mark all as read
                </S.Btn>
              </Col>
            )}
            <Col span={24}>
              <S.Btn type="link">
                <Link to="/">View all</Link>
              </S.Btn>
            </Col>
          </Row>
        </Col>
      </S.MenuRow>
    </S.NoticesOverlayMenu>
  );
};
