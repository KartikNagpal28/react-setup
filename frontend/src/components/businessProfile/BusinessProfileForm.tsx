import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { uploadPhoto } from '@app/api/common.api';
import productmodule from './Image.module.css';
import './Product.css';
import { BusinessProfileData } from '@app/interfaces/BusinessProfile';
import { BusinessUserDetail, updateBusinessProfile } from '@app/api/businessprofile.api';
import { notificationController } from '@app/controllers/notificationController';
import { useDispatch } from 'react-redux';
import { updateUsername } from '@app/store/slices/userSlice';
import uploadIcon from '@app/TunnelImages/uploadIcon.svg';
import { Button } from '../common/buttons/Button/Button';
import emailIcon from '@app/assets/icons/emailIcon.svg';
import EmojiPerson from '@app/assets/icons/emoji-person.svg';
import MainSection from '../layouts/main/MainSection/MainSection';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const styles: any = {
  mainContainer: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
    borderRadius: '12px',
    padding: '24px',
  },
};

const BusinessProfileForm: React.FC = () => {
  const dispatch = useDispatch();
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [imgPath, setImagePath] = useState<string>('');
  const [form] = Form.useForm();
  const [userDetail, setUserDetail] = useState<BusinessProfileData>();
  const [initValues, setInitValues] = useState<BusinessProfileData>({
    firstName: '',
    lastName: '',
    contactNumber: '',
    photoUrl: '',
    email: '',
  });

  const onCancel = () => {
    form.setFieldsValue(initValues);
  };

  const handleSubmit = (values: BusinessProfileData) => {
    const { firstName, lastName, contactNumber, photoUrl } = values;
    const updatedValues = {
      firstName,
      lastName,
      contactNumber,
      photoUrl: typeof imgPath === 'string' ? imgPath : '',
    };
    updateBusinessProfile({ firstName, lastName, contactNumber, photoUrl: typeof imgPath === 'string' ? imgPath : '' })
      .then(() => {
        dispatch(updateUsername(updatedValues.firstName + ' ' + updatedValues.lastName + ' ' + updatedValues.photoUrl));
        notificationController.success({
          message: 'Profile updated successfully.',
        });
      })
      .catch((err) => {
        notificationController.error({ message: err.message });
      });
  };

  useEffect(() => {
    BusinessUserDetail().then((res: any) => {
      if (res.data) {
        const user = res.data.user;
        setUserDetail(user);
        const initValuesDup = {
          firstName: user.firstName,
          lastName: user.lastName,
          contactNumber: user.contactNumber,
          photoUrl: user.photoUrl,
          email: user.email,
        };
        form.setFieldsValue(initValuesDup);
        setInitValues(initValuesDup);
        setImagePath(initValuesDup.photoUrl);
      }
    });
  }, [form]);

  const handleChange = async (e: any) => {
    try {
      const res = await uploadPhoto(e.target.files[0]);
      setImagePath(res.data.url);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <MainSection icon={EmojiPerson} title="My Profile" subtitle="Update your profile and settings here">
      <div className="flex flex-col w-full px-[25px] py-[5px]">
        <div className="pb-[30px]">
          <h1 className="text-[#1B1B1B] text-[18px] font-semibold leading-7">Personal Info</h1>
          <p className="text-[#475467] font-normal text-[14px] leading-5">
            Update your photo and personal details here.
          </p>
        </div>

        <div style={styles.mainContainer}>
          <BaseButtonsForm
            {...formItemLayout}
            isFieldsChanged={isFieldsChanged}
            onFinish={handleSubmit}
            form={form}
            onFieldsChange={() => setFieldsChanged(true)}
          >
            <div className="grid grid-cols-2 gap-[24px]">
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
            <div className="flex">
              <BaseButtonsForm.Item label="Profile Photo" name="photoUrl" className="w-full ">
                <div className="flex flex-row mt-5">
                  <div className="flex-0">
                    {imgPath !== '' && (
                      <div className={`${productmodule.imageContainer}`}>
                        <div className={`${productmodule.dataContainer}`}>
                          <div className={`${productmodule.imageHolder}`}>
                            <img className="w-[64px] h-[64px]" src={imgPath} alt="img" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="setUploadFields flex-1">
                    <input type="file" onChange={handleChange} accept=".jpg, .jpeg, .png, .svg, .gif" />
                    <img src={uploadIcon} alt="" />
                    <p className="ant-upload-text text-[#475467] text-[14px] leading-5 font-semibold mt-3 mb-1">
                      <span className="text-[#14FDAB]">Click to upload</span> or drag and drop
                    </p>
                    <p className="ant-upload-hint text-[#475467] text-[12px] leading-4 font-normal">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
              </BaseButtonsForm.Item>
            </div>
            <div
              style={{
                border: '1px solid #EAECF0',
                padding: '0px !important',
                marginBottom: '16px',
                marginTop: '24px',
                marginLeft: '-24px',
                marginRight: '-24px',
              }}
            ></div>

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
      </div>
    </MainSection>
  );
};

export default BusinessProfileForm;
