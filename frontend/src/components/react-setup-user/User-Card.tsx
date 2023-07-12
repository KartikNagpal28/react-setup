import React, { useState } from 'react';
import UserProfile from './User-Profile';
import { CardHeaderProps } from '@app/interfaces/User';
import levelIcon from '@app/React-Setup-Images/levelIcon.svg';
import defaultImg from '@app/assets/images/dummy-profile-pic.jpg';
import dollarIcon from '@app/assets/icons/dollarIcon.svg';
import userCardModule from './User-Card.module.css';
const defaultImageUrl = defaultImg;

const styles = {
  card: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '16px',
    padding: '14px 10px',
    marginBottom: '8px',
  },
  userImg: {
    filter: 'drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.1))',
    borderRadius: '5px',
    height: '60px',
    width: '60px',
  },
  skillContainer: {
    background: '#F9FAFB',
    border: '1px solid #EAECF0',
    borderRadius: '16px',
    padding: '2px 10px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#344054',
  },
};
const UserCard: React.FC<CardHeaderProps> = () => {
  const [isProfileClicked, setProfileClicked] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${userCardModule.cardMainContainer} flex flex-col bg-[#FFFFFF] cursor-pointer`}
        style={styles.card}
        onClick={() => setProfileClicked(true)}
      >
        <div className="flex flex-1 gap-[10px] items-start">
          <img style={styles.userImg} src={defaultImageUrl} alt="" />
          <div className="flex flex-col gap-[4px]">
            <div>
              <div className="flex gap-1 text-[#170f1d]">
                <span className="text-[16px] leading-6 font-medium">Lorem</span>
                <span className="font-medium">Ipsum</span>
              </div>
              <div className="flex items-center justify-center gap-[12px] mb-1">
                <div className="flex gap-[6px]">
                  <img src={dollarIcon} alt="" />
                  <span className="text-[14px] text-[#1B1B1B] leading-[20px] font-normal">$50/hr</span>
                </div>
                <div className="flex gap-[6px]">
                  <img src={levelIcon} alt="" />
                  <span className="text-[14px] text-[#1B1B1B] leading-[20px] font-normal">Level 2 User</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills flex gap-[6px] flex-wrap mt-[18px]">
          <span>Electrical</span>
          <span>Masonry</span>
          <span>Havc</span>
        </div>
      </div>

      <UserProfile isProfileClicked={isProfileClicked} setProfileClicked={setProfileClicked} />
    </>
  );
};

export default UserCard;
