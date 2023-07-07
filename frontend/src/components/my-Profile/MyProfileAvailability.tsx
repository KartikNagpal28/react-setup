import React, { useState } from 'react';
import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
import { Checkbox } from '@app/components/common/Checkbox/Checkbox';
import { Switch } from '../common/Switch/Switch';
import availableModule from './MyProfileAvailability.module.css';
import { Button } from '../common/buttons/Button/Button';
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const MyProfileAvailability: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const handleSubmit = () => {
    console.log('submitted');
  };
  const onChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="mt-[31px] flex flex-col gap-[31px]">
        <div className="flex flex-col gap-[4px] ">
          <h1 className={`${availableModule.compHeading}`}>Availability</h1>
          <p className={`${availableModule.subHeading}`}>Update your availability here.</p>
        </div>

        <div>
          <div className={`${availableModule.mainContainer} flex flex-col gap-[44px] px-[24px] pt-[24px]`}>
            <div className="flex gap-[8px]">
              <Switch defaultChecked onChange={onChange} />
              <div>
                <p className={`${availableModule.statusHeading}`}>Available for jobs</p>
                {!toggle ? (
                  <p className={`${availableModule.statusSubHeading}`}>I'm open and available for work.</p>
                ) : (
                  <p className={`${availableModule.statusSubHeading}`}>I'm not available for work.</p>
                )}
              </div>
            </div>

            <BaseButtonsForm
              {...formItemLayout}
              onFinish={handleSubmit}
              isFieldsChanged={isFieldsChanged}
              onFieldsChange={() => setFieldsChanged(true)}
            >
              <div className="bg-[#fff]">
                <BaseButtonsForm.Item name="available">
                  <div className="flex flex-col border border-[#EAECF0] mb-[51px]">
                    {days.map((day, index) => (
                      <div key={index} className="h-[72px] border-b border-[#EAECF0] flex items-center px-[24px]">
                        <Checkbox className={availableModule.customCheckbox} key={index}>
                          <span className={`${availableModule.dayName}`}>{day}</span>
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                </BaseButtonsForm.Item>
              </div>

              <BaseButtonsForm.Item>
                <div className="flex flex-row-reverse gap-[12px]">
                  <Button style={{ fontStyle: 'normal' }} className="text-[14px]" type="primary" htmlType="submit">
                    Save Changes
                  </Button>
                  <Button
                    style={{ fontWeight: '600', fontStyle: 'normal' }}
                    className="text-[14px] text-[#344054] border border-[#d0d5dd] hover:border hover:border-[#d0d5dd] leading-5 hover:text-[#344054] "
                    htmlType="button"
                  >
                    Cancel
                  </Button>
                </div>
              </BaseButtonsForm.Item>
            </BaseButtonsForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileAvailability;
