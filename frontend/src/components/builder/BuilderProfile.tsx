import { BuilderProfileProps, RecentJobs } from '@app/interfaces/Builder';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './BuilderProfile.module.css';
import tunnelStatsHands from '@app/TunnelImages/tunnelStatsHands.svg';
import tunnelStatsPop from '@app/TunnelImages/tunnelStatsPop.svg';
import { getRecentJobs } from '@app/api/myprofile.api';
import BuilderCarousel from './BuilderCarousel';
import { Rate } from 'antd';
import defaultImg from '@app/assets/images/dummy-profile-pic.jpg';
import { ReactComponent as CloseModal } from '@app/assets/icons/closeModalIcon.svg';
import { Button } from '../common/buttons/Button/Button.styles';
import BuilderBooking from './BuilderBooking/BuilderBooking';
import { useAppSelector } from '@app/hooks/reduxHooks';

const defaultImageUrl = defaultImg;
const styles = {
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
const BuilderProfile: React.FC<BuilderProfileProps> = ({ isProfileClicked, setProfileClicked, builderDetail }) => {
  const arr = Array(10).fill({});
  const images = Array(6).fill({});

  const user = useAppSelector((state) => state.user.user);

  const [selectedJob, setSelectedJob] = useState<RecentJobs | null>(null);
  const [recentJobs, setRecentJobs] = useState<RecentJobs[]>([]);
  const [isCarouselOpen, setIsCaraouselOpen] = useState<boolean>(false);
  const firstName = builderDetail.user?.firstName || '';
  const lastName = builderDetail.user?.lastName || '';

  const [isBookingInitiated, setBookingInitiated] = useState(false);

  useEffect(() => {
    if (isProfileClicked && builderDetail.id) {
      getRecentJobs(builderDetail.id).then((res: any) => {
        if (res.data) {
          setRecentJobs(res.data.recentJobs);
        }
      });
    }
  }, [isProfileClicked, builderDetail.id]);

  return (
    <div className="modal-builder">
      <Modal
        open={isProfileClicked}
        onCancel={() => setProfileClicked(!isProfileClicked)}
        footer={null}
        width={1020}
        closeIcon={<CloseModal />}
      >
        <div className="h-[140px] bg-[url('assets/images/black-checked-bg.svg')] relative z-10">
          <img
            className="absolute top-[50px] left-[33px] w-[120px] h-[120px] rounded-[10px]"
            src={builderDetail.user?.photoUrl || defaultImageUrl}
            alt=""
          />
        </div>
        <div className="px-[33px] flex flex-col pb-[76px] mt-[17px] h-[28.125rem] overflow-auto">
          <Button
            className={`w-fit ml-auto mr-[5px] ${user?.businessId ? 'visible' : 'invisible'}`}
            type="primary"
            onClick={() => setBookingInitiated(true)}
          >
            {`Book ${firstName}`}
          </Button>
          <h1 style={{ fontWeight: '500', fontStyle: 'normal' }} className="text-black text-[24px] leading-[29px]">
            {`${firstName} ${lastName}`}
          </h1>
          <div className="builder-description lg:flex justify-between">
            <div>
              <div className="w-full lg:w-[550px] flex flex-col gap-[20px]">
                <span className="font-normal">Level {builderDetail.experienceLevel} Builder</span>
                <div className="bg-[#F4F5F7] w-full lg:w-[552px] min-h-[126px] rounded-[5px] p-[15px] lg:p-[15px 24.5656px 15px 18px]">
                  <span className="text-[#000] text-[14px] leading-6 font-normal">{builderDetail.bio}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] w-full sm:w-[300px] h-[140px] mt-5 lg:mt-0">
              <p
                style={{ fontStyle: 'normal', fontWeight: '700' }}
                className="text-[12px] leading-[12px] tracking-[2px]"
              >
                TUNNEL STATS
              </p>
              <div className="w-full sm:w-[300px] bg-[#FFF] border border-[#E2E2DB] rounded-[8px] pl-[13px] pr-[73px] py-3">
                <div className="flex gap-[15.5px] items-center mb-[11px]">
                  <div
                    style={{ boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)' }}
                    className="w-[50px] h-[50px] rounded-[5px] flex items-center justify-center"
                  >
                    <img className="w-[19px] h-[20px]" src={tunnelStatsPop} alt="" />
                  </div>

                  <div className="gap-[4px]">
                    <p
                      style={{ fontWeight: '600', fontStyle: 'normal' }}
                      className="text-[#170F1D] text-[14px] leading-[19px] font-semibold"
                    >
                      0
                    </p>
                    <p
                      style={{ fontWeight: '400', fontStyle: 'normal' }}
                      className="text-[#170F1D] text-[12px] leading-[17px] font-normal"
                    >
                      Jobs Completed
                    </p>
                  </div>
                </div>

                <div className="flex gap-[15.5px] items-center">
                  <div
                    style={{ boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)' }}
                    className="w-[50px] h-[50px] rounded-[5px] flex items-center justify-center"
                  >
                    <img className="w-[19px] h-[20px]" src={tunnelStatsHands} alt="" />
                  </div>

                  <div className="gap-[4px]">
                    <p
                      style={{ fontWeight: '600', fontStyle: 'normal' }}
                      className="text-[#04C982] text-[14px] leading-[19px] font-semibold"
                    >
                      {builderDetail.rating || '0'}
                    </p>
                    <p
                      style={{ fontWeight: '400', fontStyle: 'normal' }}
                      className="text-[#170F1D] text-[12px] leading-[17px] font-normal"
                    >
                      Builder Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="builder-skills mt-[35px] mb-[22px]">
            <p
              style={{ fontStyle: 'normal', fontWeight: '600' }}
              className="text-[#101828] text-[18px] leading-7 mb-[18px]"
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {builderDetail.skills?.map((skill, index) => (
                <span style={styles.skillContainer} key={index}>
                  {skill.skillName}
                </span>
              ))}
            </div>
          </div>

          <div className="recent-job">
            <p
              style={{ fontStyle: 'normal', fontWeight: '600' }}
              className="text-[#101828] text-[18px] leading-[28px] mb-[24px]"
            >
              Recent Jobs
            </p>
            <div className="flex gap-[22px] flex-wrap">
              {recentJobs.map((job, index) => (
                <div
                  className="relative jobinfo"
                  key={index}
                  onClick={() => {
                    setIsCaraouselOpen(true);
                    setSelectedJob(job);
                    setProfileClicked(!isProfileClicked);
                  }}
                >
                  <img
                    className="w-[300px] h-[200px] rounded-[4px] cursor-pointer"
                    src={job.recentJobMediaItems[0]?.url}
                    alt=""
                  />
                  <div
                    style={{
                      background:
                        'rgba(255, 255, 255, 0.3), border: 1px solid rgba(255, 255, 255, 0.5), border-radius: 0px 0px 4px 4px',
                    }}
                    className="backdrop-blur-[8px] gap-[2px] absolute flex flex-col items-start justify-center px-[20px] py-[10px] left-0 bottom-0 w-full h-[75px]"
                  >
                    <Rate className="w-[74px] h-[13px] text-[0.52rem]" allowHalf disabled defaultValue={job.rating} />
                    <p
                      style={{ fontWeight: '600', fontStyle: 'normal' }}
                      className="text-[#030303] text-center  leading-7 text-[14px]"
                    >
                      {job.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <div>
        {isCarouselOpen && (
          <BuilderCarousel
            isProfileClicked={isProfileClicked}
            setProfileClicked={setProfileClicked}
            isCarouselOpen={isCarouselOpen}
            setIsCaraouselOpen={setIsCaraouselOpen}
            job={selectedJob}
          />
        )}
      </div>

      <BuilderBooking
        isBookingInitiated={isBookingInitiated}
        setBookingInitiated={setBookingInitiated}
        builderDetail={builderDetail}
      />
    </div>
  );
};

export default BuilderProfile;
