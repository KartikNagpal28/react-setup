import React, { useContext } from 'react';

import BuilderCard from './BuilderCard';
import BuilderContext from './store/builder-context';
import BuilderFilters from './BuilderFilters/BuilderFilters';

import { BuilderDetail } from '@app/interfaces/Builder';
import EmojiBuilder from '@app/assets/icons/emoji-builder.svg';
import MainSection from '@app/components/layouts/main/MainSection/MainSection';

import builderDetailModule from './BuilderDetail.module.css';

const BuilderDetails: React.FC = () => {
  const ctx = useContext(BuilderContext);

  return (
    <MainSection icon={EmojiBuilder} title="All Users" subtitle="Browse all users on App">
      <BuilderFilters />

      <div className={`${builderDetailModule.rightMainSection}`}>
        <p
          style={{ fontWeight: '400', fontStyle: 'normal' }}
          className="leading-[21px] text-[15px] text-[#170F1D] flex items-center gap-[5px] mb-[11px]"
        >
          Showing{' '}
          <span style={{ fontStyle: 'normal', fontWeight: '700', lineHeight: '21px', color: '#170F1D' }}>
            {ctx.builders.length}
          </span>{' '}
          Registered users
        </p>
        {ctx.builders.map((builder: BuilderDetail) => (
          <BuilderCard key={builder.id} builderDetail={builder} />
        ))}
      </div>
    </MainSection>
  );
};

export default BuilderDetails;
