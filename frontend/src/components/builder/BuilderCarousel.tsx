import React, { useState } from 'react';
import { Modal, Rate } from 'antd';
import { BuilderCarouselProps } from '@app/interfaces/Builder';
import './BuilderProfile.module.css';
import leftArrow from '@app/assets/icons/leftArrowIcon.svg';
import carouselArrowRight from '@app/assets/icons/carouselArrowRight.svg';
import carouselArrowLeft from '@app/assets/icons/carouselArrowLeft.svg';
import disableRightArrowIcon from '@app/assets/icons/disableRightArrowIcon.svg';
import disableLeftArrowIcon from '@app/assets/icons/disableLeftArrowIcon.svg';
import { ReactComponent as CloseModal } from '@app/assets/icons/closeModalIcon.svg';
const BuilderCarousel: React.FC<BuilderCarouselProps> = ({
  isProfileClicked,
  setProfileClicked,
  isCarouselOpen,
  setIsCaraouselOpen,
  job,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? prevSlide : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === job!.recentJobMediaItems.length - 1 ? prevSlide : prevSlide + 1));
  };

  if (!job) {
    return null;
  }

  const isFirstImage = currentSlide === 0;
  const isLastImage = currentSlide === job!.recentJobMediaItems.length - 1;

  return (
    <Modal
      open={isCarouselOpen}
      onCancel={() => {
        setIsCaraouselOpen(false);
        setProfileClicked(!isProfileClicked);
      }}
      footer={null}
      width={1020}
      closeIcon={<CloseModal />}
    >
      <div className="h-[140px] bg-black"></div>
      <div className="flex flex-col mt-[51px]">
        <button
          className="ml-[31px] mb-[43px] w-[126px] h-[20px] flex gap-[8px] items-center"
          onClick={() => {
            setIsCaraouselOpen(false);
            setProfileClicked(!isProfileClicked);
          }}
        >
          <img src={leftArrow} alt="Back" />
          <span
            style={{ fontWeight: '600', fontStyle: 'normal' }}
            className="text-[#475467] text-[14px] leading-[20px]"
          >
            Back to profile
          </span>
        </button>
        <div className="px-[32px] ml-[4px] h-[73px] flex flex-col font-medium mb-[58px]">
          <p style={{ fontStyle: 'normal', fontWeight: '700' }} className="text-[#101828]  leading-7 text-[18px]">
            {job.name}
          </p>
          <p style={{ fontStyle: 'normal', fontWeight: '500' }} className="text-[#101828]  leading-7 text-[18px]">
            Monrovia, CA{' '}
          </p>
          <div className="w-[166px]">
            <Rate
              className="w-[72px] flex gap-[0px] h-[13px] text-[0.62rem]"
              allowHalf
              disabled
              defaultValue={job.rating}
            />
          </div>
        </div>
        <div className="flex gap-[25px] px-[33px] mx-auto mb-[45px] overflow-hidden">
          {job.recentJobMediaItems.map((mediaItem, index) => (
            <img
              className={`w-full h-[416px] rounded-[8.32px] ${index === currentSlide ? '' : 'hidden'}`}
              key={mediaItem.id}
              src={job.recentJobMediaItems[index].url}
              alt=""
            />
          ))}
        </div>
        <div className="flex gap-[16px] justify-center mb-[220px]">
          <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
            {isFirstImage ? <img src={disableLeftArrowIcon} alt="" /> : <img src={carouselArrowLeft} alt="" />}
          </button>
          <button onClick={handleNextSlide} disabled={currentSlide === job!.recentJobMediaItems.length - 1}>
            {isLastImage ? <img src={disableRightArrowIcon} alt="" /> : <img src={carouselArrowRight} alt="" />}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BuilderCarousel;
