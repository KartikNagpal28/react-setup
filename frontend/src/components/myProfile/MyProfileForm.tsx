import React, { useEffect, useRef, useState } from 'react';
import { Form, Input } from 'antd';
import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
import { useAppSelector } from '@app/hooks/reduxHooks';
import {
  Address,
  ProfileData,
  UserDetail,
  builderMe,
  builderSkills,
  buildercity,
  getRecentJobs,
  updateBuilderProfile,
  updateMyProfile,
} from '@app/api/myprofile.api';
import { notificationController } from '@app/controllers/notificationController';
import { useDispatch } from 'react-redux';
import { updateUsername } from '@app/store/slices/userSlice';
import { TextArea } from '../common/inputs/Input/Input';
import { Option, Select } from '../common/selects/Select/Select';
import { BuilderSkills } from '@app/interfaces/MyProfile';
import MyProfileRecentJobs from './MyProfileRecentJobs';
import { uploadPhoto } from '@app/api/common.api';
import productmodule from './Image.module.css';
import './Product.css';
import { RecentJobs } from '@app/interfaces/Builder';
import uploadIcon from '@app/TunnelImages/uploadIcon.svg';
import { Button } from '../common/buttons/Button/Button';
import { ReactComponent as SearchSkill } from '@app/assets/icons/searchSkillIcon.svg';
import emailIcon from '@app/assets/icons/emailIcon.svg';
import profilemodule from './MyProfileForm.module.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
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
  const [userDetail, setUserDetail] = useState<ProfileData>();
  const [skills, setSkills] = useState<BuilderSkills[]>([]);
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
  const [fullAddress, setFullAddress] = useState<Address[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Address[]>([]);
  const [showBtn, setShowBtn] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<Address>({});
  const [builderAddresses, setBuilderAddresses] = useState<any[]>([]);
  const [initValues, setInitValues] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    contactNumber: '',
    photoUrl: '',
    cost: 0,
    bio: '',
    skills: [],
    addresses: [],
  });

  const onCancel = () => {
    form.setFieldsValue(initValues);
    builderMe().then((res: any) => {
      if (res.data) {
        const updatedBuilderMeData = {
          bio: res.data.builder.bio,
          cost: res.data.builder.cost,
          skills: res.data.builder.skills.map((skill: { id: number }) => skill.id),
          // addresses: res.data.builder.addresses.map((address: { fullAddress: string }) => address.fullAddress),
        };
        setFullAddress([]);
        setBuilderAddresses(res.data.builder.addresses);
        setSelectedAddress({ formatted_address: '' });
        setBuilderMeData(updatedBuilderMeData);
        form.setFieldsValue(updatedBuilderMeData);
      }
    });
  };
  useEffect(() => {
    UserDetail().then((res: any) => {
      if (res.data) {
        const user = res.data.user;
        setUserDetail(user);
        setBuilderId(user.builderId);
        const initValuesDup = {
          firstName: user.firstName,
          lastName: user.lastName,
          contactNumber: user.contactNumber,
          photoUrl: user.photoUrl || '',
          email: user.email,
          cost: user.cost,
          skills: builderMeData.skills,
          bio: builderMeData.bio,
          // addresses: builderMeData.addresses,
        };
        setInitValues(initValuesDup);

        form.setFieldsValue(initValuesDup);
        setImagePath(initValuesDup.photoUrl);
      }
    });
    if (user2?.builderId) {
      getRecentJobs(user2?.builderId).then((res: any) => {
        if (res.data) {
          setRecentJobs(res.data.recentJobs);
          setJobData(res.data.recentJobs);
        }
      });
    }
    builderSkills().then((res: any) => {
      if (res.data) {
        setSkills(res.data.skills);
      }
    });

    buildercity().then((res: any) => {
      if (res.data) {
        setCities(res.data.cities);
      }
    });

    builderMe().then((res: any) => {
      if (res.data) {
        const updatedBuilderMeData = {
          bio: res.data.builder.bio,
          cost: res.data.builder.cost,
          skills: res.data.builder.skills.map((skill: { id: number }) => skill.id),
          // addresses: res.data.builder.addresses.map((address: { fullAddress: string }) => address.fullAddress),
        };
        setBuilderAddresses(res.data.builder.addresses);
        setBuilderMeData(updatedBuilderMeData);

        form.setFieldsValue(updatedBuilderMeData);
      }
    });
  }, [form]);

  const inputRef = useRef<any>(null);

  const handlePlaceChange = () => {
    const place = inputRef.current.getPlaces();
    setFullAddress((prevAddress) => [...prevAddress, ...place]);
    setSelectedLocation([]);
  };

  const handleChange = async (e: any) => {
    try {
      const res = await uploadPhoto(e.target.files[0]);
      setImagePath(res.data.url);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmit = async (values: ProfileData) => {
    const { firstName, lastName, contactNumber, bio, skills } = values;
    const { photoUrl } = values;
    const { cost = 0 } = values;

    //handling location data
    const formattedAddresses = fullAddress?.map((address) => {
      const cityComponent = address.address_components.find((component: { types: string[] }) =>
        component.types.includes('administrative_area_level_2'),
      );
      const zipcodeComponent = address.address_components.find((component: { types: string[] }) =>
        component.types.includes('postal_code'),
      );
      const stateComponent = address.address_components.find((component: { types: string[] }) =>
        component.types.includes('administrative_area_level_1'),
      );

      const state = stateComponent?.long_name || '';
      const city = cityComponent?.long_name || '';
      const zipcode = zipcodeComponent?.long_name || '';

      return {
        fullAddress: address.formatted_address,
        city,
        county: '',
        state,
        zipcode,
        addressPlaceId: address.place_id,
        addressUrl: address.url,
        lat: address.geometry.location.lat(),
        long: address.geometry.location.lng(),
      };
    });

    const combinedAddresses = [
      ...builderAddresses.map(({ id, createdAt, updatedAt, ...address }) => address),
      ...formattedAddresses,
    ];

    //handling recent jobs data
    const newUpdatedJobDetails = recentJobs.map((job) => {
      const { id, name, rating, address, recentJobMediaItems } = job;
      return {
        id,
        name,
        rating,
        address,
        recentJobMediaItems: recentJobMediaItems.map((mediaItem) => {
          const { id, url } = mediaItem;
          return { id, url };
        }),
      };
    });

    const updatedValues = {
      firstName,
      lastName,
      contactNumber,
      photoUrl: typeof imgPath === 'string' ? imgPath : '',
      bio,
      cost: parseInt(cost.toString()),
      skills: [],
      recentJobs: newUpdatedJobDetails,
      addresses: combinedAddresses,
    };

    try {
      await updateMyProfile({
        firstName,
        lastName,
        contactNumber,
        photoUrl: typeof imgPath === 'string' ? imgPath : '',
      });
      dispatch(updateUsername(updatedValues.firstName + ' ' + updatedValues.lastName + ' ' + updatedValues.photoUrl));

      if (builderId) {
        const res = await getRecentJobs(builderId).then((res: any) => {
          if (res.data) {
            setRecentJobs(res.data.recentJobs);
          }
        });
      }

      await updateBuilderProfile({
        bio,
        skills: skills.map((skill) => ({ id: skill })),
        addresses: combinedAddresses,
        cost: parseInt(cost.toString()),
        recentJobs: newUpdatedJobDetails,
      });

      notificationController.success({
        message: 'Profile updated successfully.',
      });
    } catch (err: any) {
      notificationController.error({ message: err.message });
    }
  };

  const removeAddress = (addressIndex: number) => {
    setFullAddress((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(addressIndex, 1);
      return updatedAddresses;
    });
  };

  const handleRemoveAddress = (index: number) => {
    setBuilderAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(index, 1);
      return updatedAddresses;
    });
  };

  const handleSelectAddresses = (address: any) => {
    setSelectedAddress(address);
    form.setFieldsValue({
      addresses: [address.formatted_address],
    });
  };
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
              onFinish={handleSubmit}
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
                    value={userDetail?.email}
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
                    placeHolder={{ Icon: SearchSkill, title: 'Skill' }}
                    options={skills.map((skill) => ({
                      label: skill.skillName,
                      value: skill.id,
                    }))}
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
                  <div className="flex flex-wrap gap-[5px] mb-[5px] items-center">
                    {builderAddresses.map((builderAddr, index) => (
                      <div
                        key={index}
                        className="bg-[#f5f5f5] py-[5px] px-[10px] rounded-[8px] flex justify-between w-[200px]  h-[28px]  items-center"
                      >
                        <p
                          style={{
                            fontWeight: '400',
                            fontStyle: 'normal',
                          }}
                          className="text-[#667085] font-medium justify-center text-sm  items-center whitespace-nowrap overflow-hidden overflow-ellipsis"
                        >
                          {builderAddr.fullAddress && builderAddr.fullAddress.length > 20
                            ? `${builderAddr.fullAddress?.substring(0, 20)}...`
                            : builderAddr.fullAddress}
                        </p>
                        <span className="text-[#667085] cursor-pointer" onClick={() => handleRemoveAddress(index)}>
                          x
                        </span>
                      </div>
                    ))}
                    {fullAddress.map((address, index) => (
                      <div
                        key={index}
                        className="bg-[#f5f5f5] py-[5px] px-[10px] rounded-[8px] flex justify-between w-[200px] h-[28px] items-center"
                      >
                        <p
                          onClick={() => handleSelectAddresses(address)}
                          style={{
                            fontWeight: '400',
                            fontStyle: 'normal',
                          }}
                          className="text-[#667085] font-medium justify-center text-sm  items-center whitespace-nowrap overflow-hidden overflow-ellipsis"
                        >
                          {address.formatted_address && address.formatted_address.length > 20
                            ? `${address.formatted_address?.substring(0, 20)}...`
                            : address.formatted_address}
                        </p>
                        <span className="text-[#667085] cursor-pointer" onClick={() => removeAddress(index)}>
                          x
                        </span>
                      </div>
                    ))}
                  </div>

                  <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChange}>
                    <input
                      className="bg-[#FFF] w-full h-[45px] border-2 px-[14px] py-[10px] rounded-[8px]"
                      type="text"
                      placeholder="Enter Location"
                      name="location"
                      value={selectedAddress?.formatted_address}
                      onChange={(address: any) => setSelectedAddress(address)}
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
                      <input type="file" onChange={handleChange} accept=".jpg, .jpeg, .png, .svg, .gif" />
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
