import React, { useContext } from 'react';
import UserCard from './UserCard';
import UserFilters from './UserFilter/UserFilters';
import EmojiBuilder from '@app/assets/icons/emoji-builder.svg';
import MainSection from '@app/components/layouts/main/MainSection/MainSection';

import userDetailModule from './UserDetail.module.css';

const UserDetails: React.FC = () => {
  return (
    <MainSection icon={EmojiBuilder} title="All Users" subtitle="Browse all users on App">
      <UserFilters />

      <div className={`${userDetailModule.rightMainSection}`}>
        <p
          style={{ fontWeight: '400', fontStyle: 'normal' }}
          className="leading-[21px] text-[15px] text-[#170F1D] flex items-center gap-[5px] mb-[11px]"
        >
          Showing{' '}
          <span style={{ fontStyle: 'normal', fontWeight: '700', lineHeight: '21px', color: '#170F1D' }}>1</span>{' '}
          Registered users
        </p>
        <UserCard builderDetail={true} />
      </div>
    </MainSection>
  );
};

export default UserDetails;
