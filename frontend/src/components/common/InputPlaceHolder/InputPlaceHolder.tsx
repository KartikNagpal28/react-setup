import { DownOutlined } from '@ant-design/icons';
import { InputPlaceHolderProps } from '@app/interfaces/InputPlaceHolder';

const InputPlaceHolder = ({ Icon, title, showChevron }: InputPlaceHolderProps) => {
  const displayChevron = showChevron !== undefined ? showChevron : true;

  return (
    <div
      style={{ fontWeight: '400', fontStyle: 'normal' }}
      className="text-[#667085] font-medium text-sm flex items-center"
    >
      <Icon className="mr-[8px]" />
      <span>{title}</span>
      {displayChevron && <DownOutlined className="ml-auto text-[#667085] opacity-[0.5]" />}
    </div>
  );
};

export default InputPlaceHolder;
