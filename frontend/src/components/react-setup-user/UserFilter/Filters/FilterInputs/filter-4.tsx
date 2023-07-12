import { useContext, useEffect, useRef, useState } from 'react';

import { ReactComponent as CostIcon } from '@app/assets/icons/costIcon.svg';
// import BuilderContext from '@app/components/builder/store/builder-context';

export const MaxCost = () => {
  const [maxCost, setMaxCost] = useState<number | null>(null);
  const isFirstRun = useRef(true);

  const handleMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCost(+event.target.value || null);
  };

  // const filterCtx = useContext(BuilderContext);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      // filterCtx.updateFilter('costMax', maxCost);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [maxCost]);

  return (
    <div className="w-[210px] h-[40px] flex items-center gap-[6px] border border-[#D0D5DD] hover:border-primary rounded-[6px] px-[14px] py-[10px]">
      <CostIcon />
      <input
        style={{ fontStyle: 'normal', fontWeight: '400', backgroundColor: 'transparent' }}
        type="number"
        onChange={handleMax}
        min={1}
        max={100}
        className="focus:outline-0 border-0 text-[14px] text-[#667085] placeholder:text-[#667085] leading-[20px]  w-full"
        placeholder="Filter 5"
      />
    </div>
  );
};
