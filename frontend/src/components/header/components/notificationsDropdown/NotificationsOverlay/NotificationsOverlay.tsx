import React, { useMemo } from 'react';
import { Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Notification } from 'components/common/Notification/Notification';
import { capitalize } from 'utils/utils';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from './NotificationsOverlay.styles';

interface NotificationsOverlayProps {}

export const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({ ...props }) => {
  const notifications = [1, 2, 3];
  return (
    <S.NoticesOverlayMenu {...props}>
      <S.MenuRow gutter={[20, 20]}>
        <Col span={24}>
          {notifications.length > 0 ? (
            <Space direction="vertical" size={10} split={<S.SplitDivider />}></Space>
          ) : (
            <S.Text>No notifications yet</S.Text>
          )}
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            {notifications.length > 0 && (
              <Col span={24}>
                <S.Btn type="ghost" onClick={() => {}}>
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
