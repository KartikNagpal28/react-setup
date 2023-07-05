import { useState, useEffect } from 'react';
import { Modal, Tabs, TabsProps } from 'antd';

import tickIcon from '@app/assets/icons/tick.svg';
import leftArrowIcon from '@app/assets/icons/leftArrowIcon.svg';
import { Button } from '@app/components/common/buttons/Button/Button.styles';
import { ReactComponent as CloseModal } from '@app/assets/icons/closeModalIcon.svg';
import { BookingDetails, BuilderBookingProps, SetBooking, SetIsDisabled } from '@app/interfaces/BuilderBooking';

import JobType from './JobType';
import JobLocation from './JobLocation';
import JobDescription from './JobDescription';
import BookingCalendar from './BookingCalendar';
import JobExtraDescription from './JobExtraDescription';
import { createBooking } from '@app/api/booking.api';
import { notificationController } from '@app/controllers/notificationController';

const BuilderBooking: React.FC<BuilderBookingProps> = ({ isBookingInitiated, setBookingInitiated, builderDetail }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const businessId = user?.businessId || 0;

  const [booking, setBooking] = useState<BookingDetails>(new BookingDetails(businessId, builderDetail.id));

  const [isDisabled, setIsDisabled] = useState(false);

  const firstName = builderDetail.user?.firstName || '';
  const items = _getTabsConfigs(firstName, booking, setBooking, setIsDisabled);

  const [tabIndex, setTabIndex] = useState(1);
  const incrementTabIndex = () => {
    if (tabIndex >= 5) {
      _createBooking(booking, setBookingInitiated);
      return;
    }
    setTabIndex((prev) => ++prev);
  };

  const decrementTabIndex = () => {
    if (tabIndex <= 1) {
      closeDialog();
      return;
    }
    setIsDisabled(false);
    setTabIndex((prev) => --prev);
  };

  const closeDialog = () => {
    setTabIndex(1);
    setBookingInitiated(false);
  };

  useEffect(() => {
    if (!isBookingInitiated) {
      setBooking(new BookingDetails(businessId, builderDetail.id));
      setIsDisabled(false);
      setTabIndex(1);
    }
  }, [isBookingInitiated, businessId, builderDetail.id]);

  return (
    <Modal
      destroyOnClose={true}
      open={isBookingInitiated}
      onCancel={closeDialog}
      footer={null}
      width={1020}
      closeIcon={<CloseModal className="text-[#170F1D]" />}
    >
      <div className="px-[33px] flex flex-col items-center pb-[76px] pt-[60px] min-h-[500px]">
        <div className="flex gap-2 items-center self-start mb-14 cursor-pointer" onClick={decrementTabIndex}>
          <img className="h-5 w-5" src={leftArrowIcon} alt="left arrow icon" />
          <span className="text-sm text-[#475467]">{tabIndex === 1 ? 'Back to profile' : 'Back'}</span>
        </div>

        <Tabs items={items} activeKey={tabIndex + ''} renderTabBar={_emptyTabPane} destroyInactiveTabPane={true} />

        <Button
          type={isDisabled ? 'ghost' : 'primary'}
          className="!w-24 mt-14 !rounded-full"
          onClick={incrementTabIndex}
          disabled={isDisabled}
        >
          Ok <img src={tickIcon} alt="tick icon" />
        </Button>
      </div>
    </Modal>
  );
};

const _emptyTabPane = () => {
  return <div></div>;
};

const _getTabsConfigs = (
  firstName: string,
  booking: BookingDetails,
  setBooking: SetBooking,
  setIsDisabled: SetIsDisabled,
): TabsProps['items'] => {
  return [
    <JobType bookingState={{ booking, setBooking }} setIsDisabled={setIsDisabled} />,
    <BookingCalendar builderName={firstName} bookingState={{ booking, setBooking }} setIsDisabled={setIsDisabled} />,
    <JobDescription builderName={firstName} bookingState={{ booking, setBooking }} setIsDisabled={setIsDisabled} />,
    <JobLocation bookingState={{ booking, setBooking }} setIsDisabled={setIsDisabled} />,
    <JobExtraDescription bookingState={{ booking, setBooking }} setIsDisabled={setIsDisabled} />,
  ].map((component, index) => ({ key: (index + 1).toString(), label: index.toString(), children: component }));
};

const _createBooking = (payload: BookingDetails, setBookingInitiated: (isOpen: boolean) => void) => {
  createBooking(payload)
    .then(() => {
      notificationController.success({ message: 'Booking created successfully' });
      setBookingInitiated(false);
    })
    .catch((err: { message: string }) => notificationController.error({ message: err.message }));
};

export default BuilderBooking;
