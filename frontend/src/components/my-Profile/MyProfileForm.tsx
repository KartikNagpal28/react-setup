import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useDispatch } from 'react-redux';
import { TextArea } from '../common/inputs/Input/Input';
import { Select } from '../common/selects/Select/Select';
import MyProfileRecentJobs from './MyProfileRecentJobs';
import productmodule from './Image.module.css';
import './Product.css';
import { RecentJobs } from '@app/interfaces/Builder';
import uploadIcon from '@app/TunnelImages/uploadIcon.svg';
import { Button } from '../common/buttons/Button/Button';
import emailIcon from '@app/assets/icons/emailIcon.svg';
import profilemodule from './MyProfileForm.module.css';
import { StandaloneSearchBox } from '@react-google-maps/api';
import MyProfileAvailability from './MyProfileAvailability';
import { ReactComponent as CostIcon } from '@app/assets/icons/costIcon.svg';
import EmojiPerson from '@app/assets/icons/emoji-person.svg';
import MainSection from '../layouts/main/MainSection/MainSection';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const libraries: ('places' | 'geometry' | 'drawing' | 'localContext' | 'visualization')[] = ['places'];

const MyProfileForm: React.FC = () => {
  const user2 = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [form] = Form.useForm();
  const [imgPath, setImagePath] = useState<string>('');
  const [userDetail, setUserDetail] = useState<string>('');
  const [skills, setSkills] = useState<string>('');
  const [builderId, setBuilderId] = useState<number>();
  const [cities, setCities] = useState([]);

  const [builderMeData, setBuilderMeData] = useState({
    bio: '',
    cost: 0,
    skills: [],
    // addresses: []
  });
  const [recentJobs, setRecentJobs] = useState<RecentJobs[]>([]);
  const [jobData, setJobData] = useState([]);
  const [value, setValue] = useState(null);
  const [fullAddress, setFullAddress] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [showBtn, setShowBtn] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [builderAddresses, setBuilderAddresses] = useState<string>('');
  const [initValues, setInitValues] = useState<string>('');

  const onCancel = () => {
    form.setFieldsValue(initValues);
  };
  useEffect(() => {
    if (user2?.builderId) {
    }
  }, [form]);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];

  return (
    <>
      <MainSection icon={EmojiPerson} title="My Profile" subtitle="Update your profile and settings here">
        <div className="flex flex-col w-full px-[25px] py-[5px]">
          <div className={`${profilemodule.mainContainerHeading} flex flex-col gap-[4px]`}>
            <h1 className="text-[#1B1B1B] text-[18px] font-semibold leading-7">Personal Info</h1>
            <p className="text-[#475467] font-normal text-[14px] leading-5">
              Update your photo and personal details here.
            </p>
          </div>
          <div className={`${profilemodule.profileFormContainer}`}>
            <BaseButtonsForm
              {...formItemLayout}
              className={`${profilemodule.profileForm}`}
              form={form}
              isFieldsChanged={isFieldsChanged}
              onFinish={() => {}}
              onFieldsChange={() => setFieldsChanged(true)}
            >
              <div className={`${profilemodule.FormFieldName}`}>
                <BaseButtonsForm.Item
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true, message: 'First Name is required' }]}
                >
                  <Input className="" placeholder="Enter you first name"></Input>
                </BaseButtonsForm.Item>
                <BaseButtonsForm.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: 'Last Name is required' }]}
                >
                  <Input placeholder="Enter you last name"></Input>
                </BaseButtonsForm.Item>
              </div>
              <BaseButtonsForm.Item
                label="Phone Number"
                name="contactNumber"
                rules={[{ required: true, message: 'Contact is required' }]}
              >
                <Input placeholder="Enter you contact"></Input>
              </BaseButtonsForm.Item>
              <BaseButtonsForm.Item
                label="Email"
                name="email"
                rules={[{ type: 'email', message: 'Enter a valid email' }]}
              >
                <div className="flex items-center border px-[14px] py-[10px] rounded-[8px] border-[#D0D5DD] gap-[9.67px]">
                  <img src={emailIcon} alt="" />
                  <input
                    style={{ fontWeight: '400', fontStyle: 'normal', backgroundColor: '#fff', color: '#667085' }}
                    className="leading-[24px] text-[16px]"
                    value="test@gmail.com"
                    disabled
                  ></input>
                </div>
              </BaseButtonsForm.Item>
              <BaseButtonsForm.Item
                label="Short Bio"
                name="bio"
                rules={[{ required: true, message: 'Bio is required' }]}
              >
                <TextArea placeholder="Enter you bio" showCount maxLength={1000}></TextArea>
              </BaseButtonsForm.Item>
              <div>
                <BaseButtonsForm.Item
                  label="Skills"
                  name="skills"
                  rules={[{ required: true, message: 'Skills are required' }]}
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Skill"
                    options={options}
                    filterOption={(input, option) => option?.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  />
                </BaseButtonsForm.Item>
              </div>

              <BaseButtonsForm.Item
                label="Cost/hour"
                name="cost"
                rules={[{ required: true, message: 'Cost is required' }]}
              >
                <div className="flex items-center border px-[14px] py-[10px] rounded-[8px] border-[#D0D5DD] gap-[9.67px] hover:border-[1px] hover:border-[#14FDA8]">
                  <CostIcon />
                  <input
                    type="number"
                    placeholder="Enter cost per hour"
                    className="w-full font-normal bg-[#fff] text-[#667085] outline-none border-none"
                  ></input>
                </div>
              </BaseButtonsForm.Item>

              <BaseButtonsForm.Item className="w-full" label="Location" name="addresses" valuePropName="array">
                <div>
                  <div className="flex flex-wrap gap-[5px] mb-[5px] items-center"></div>

                  <StandaloneSearchBox>
                    <input
                      className="bg-[#FFF] w-full h-[45px] border-2 px-[14px] py-[10px] rounded-[8px]"
                      type="text"
                      placeholder="Enter Location"
                      name="location"
                      // value={selectedAddress?.formatted_address}
                      onChange={() => {}}
                    />
                  </StandaloneSearchBox>
                </div>
              </BaseButtonsForm.Item>

              <div className="flex">
                <BaseButtonsForm.Item label="Profile Photo" name="photoUrl" className="w-full">
                  <div className={`${productmodule.uploadContainer}`}>
                    <div className="flex-0">
                      {imgPath !== '' && (
                        <div className={`${productmodule.imageContainer}`}>
                          <div className={`${productmodule.DataContainer}`}>
                            <div className={`${productmodule.smallImageHolder}`}>
                              <img className="w-[64px] h-[64px] mr-[20px]" src={imgPath} alt="img" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="setUploadFields flex-1">
                      <input type="file" onChange={() => {}} accept=".jpg, .jpeg, .png, .svg, .gif" />
                      <img src={uploadIcon} alt="" />
                      <p className="ant-upload-text text-[#475467] text-[14px] leading-5 font-semibold mt-3">
                        <span className="text-[#14FDAB]">Click to upload</span> or drag and drop
                      </p>
                      <p className="ant-upload-hint text-[#475467] text-[12px] leading-4 font-normal mb-1">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                    </div>
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
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </BaseButtonsForm.Item>
            </BaseButtonsForm>
          </div>

          <MyProfileAvailability />

          {builderId && <MyProfileRecentJobs builderId={builderId} />}
        </div>
      </MainSection>
    </>
  );
};

export default MyProfileForm;
