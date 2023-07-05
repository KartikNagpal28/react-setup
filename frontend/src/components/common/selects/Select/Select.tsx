import React, { ComponentProps } from 'react';
import { Select as AntSelect } from 'antd';
import { BaseOptionType, DefaultOptionType, RefSelectProps } from 'antd/lib/select';
import * as S from './Select.styles';
import { InputPlaceHolderProps } from '@app/interfaces/InputPlaceHolder';
import InputPlaceHolder from '../../InputPlaceHolder/InputPlaceHolder';

export const { Option } = AntSelect;

type SelectOnChange = ComponentProps<typeof S.Select>['onChange'];

export interface SelectProps extends ComponentProps<typeof AntSelect>, S.SelectProps {
  className?: string;
  onChange?: SelectOnChange;
  placeHolder?: InputPlaceHolderProps;
}

export const Select = React.forwardRef<RefSelectProps, SelectProps>(
  ({ className, width, children, placeHolder, ...props }, ref) => {
    const PlaceHolder = placeHolder && (
      <InputPlaceHolder
        Icon={placeHolder.Icon}
        title={placeHolder.title}
        showChevron={placeHolder.showChevron}
      ></InputPlaceHolder>
    );

    return (
      <S.Select
        getPopupContainer={(triggerNode) => triggerNode}
        ref={ref}
        placeholder={PlaceHolder}
        className={className}
        width={width}
        {...props}
      >
        {children}
      </S.Select>
    );
  },
);
