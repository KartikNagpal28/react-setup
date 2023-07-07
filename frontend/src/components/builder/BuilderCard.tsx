import React, { useState } from 'react';
import goldenStar from '@app/TunnelImages/goldenStar.svg';
import BuilderProfile from './BuilderProfile';
import { CardHeaderProps } from '@app/interfaces/Builder';
import levelIcon from '@app/TunnelImages/levelIcon.svg';
import defaultImg from '@app/assets/images/dummy-profile-pic.jpg';
import dollarIcon from '@app/assets/icons/dollarIcon.svg';
import builderCardModule from './BuilderCard.module.css';
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
const BuilderCard: React.FC<CardHeaderProps> = ({ builderDetail }) => {
  const [isProfileClicked, setProfileClicked] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${builderCardModule.cardMainContainer} flex flex-col bg-[#FFFFFF] cursor-pointer`}
        style={styles.card}
        onClick={() => setProfileClicked(true)}
      >
        <div className="flex flex-1 gap-[10px] items-start">
          <img style={styles.userImg} src={builderDetail.user?.photoUrl || defaultImageUrl} alt="" />
          <div className="flex flex-col gap-[4px]">
            <div>
              <div className="flex gap-1 text-[#170f1d]">
                <span className="text-[16px] leading-6 font-medium">{builderDetail.user?.firstName}</span>
                <span className="font-medium">{builderDetail.user?.lastName}</span>
              </div>
              <div className="flex items-center justify-center gap-[12px] mb-1">
                <div className="flex gap-[6px]">
                  <img src={dollarIcon} alt="" />
                  <span className="text-[14px] text-[#1B1B1B] leading-[20px] font-normal">
                    ${builderDetail.cost}/hr
                  </span>
                </div>
                <div className="flex gap-[6px]">
                  <img src={levelIcon} alt="" />
                  <span className="text-[14px] text-[#1B1B1B] leading-[20px] font-normal">
                    Level {builderDetail.experienceLevel} User
                  </span>
                </div>
              </div>
            </div>

            {builderDetail.rating && (
              <div className="bg-[#F2F4F7] py-[3.5px] px-[6px] rounded items-center flex w-[134px] gap-[4px]">
                <img src={goldenStar} alt="" />
                <p
                  style={{ fontWeight: '500', fontStyle: 'normal' }}
                  className="text-[#475467] text-[12px] leading-[18px]"
                >
                  {builderDetail.rating}
                </p>
                <p
                  style={{ fontWeight: '500', fontStyle: 'normal' }}
                  className="text-[#475467] text-[12px] leading-[18px]"
                >
                  User Rating
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="skills flex gap-[6px] flex-wrap mt-[18px]">
          {builderDetail.skills?.map((skill, index) =>
            index < 4 ? (
              <span key={index} style={styles.skillContainer}>
                {skill.skillName}
              </span>
            ) : null,
          )}

          {builderDetail.skills?.length && builderDetail.skills?.length > 3 ? (
            <span style={styles.skillContainer}>+{builderDetail.skills?.length - 4}</span>
          ) : null}
        </div>
      </div>

      <BuilderProfile
        isProfileClicked={isProfileClicked}
        setProfileClicked={setProfileClicked}
        builderDetail={builderDetail}
      />
    </>
  );
};

export default BuilderCard;
