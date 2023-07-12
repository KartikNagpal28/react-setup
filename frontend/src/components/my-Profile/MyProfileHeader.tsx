import { MyProfileHeaderProps } from '@app/interfaces/MyProfile';
import React from 'react';
import myProfileIcon from '@app/React-Setup-Images/myProfileIcon.png';
import profilemodule from './MyProfileForm.module.css';

const styles: any = {
  imageIcon: {
    width: '52px',
    height: '52px',
  },
};

const MyProfileHeader: React.FC<MyProfileHeaderProps> = ({ title, children }) => {
  return (
    <>
      <div
        className={`${profilemodule.headerContainer} bg-[url('assets/images/black-checked-bg.svg')] w-[calc(100vw-404px)] rounded-b-lg mx-[26px] h-[21rem] p-[70px] fixed z-1`}
      >
        <div className="flex gap-[9px] mb-[10px]">
          <img src={myProfileIcon} alt="" style={styles.imageIcon} />
          <h1 className="text-[52px] font-normal leading-[60px] text-[#FFF]">{title}</h1>
        </div>
        <span className="font-light text-[18px] leading-7 text-[#FFF] opacity-90">
          Update your profile and settings here
        </span>
      </div>
    </>
  );
};

export default MyProfileHeader;
