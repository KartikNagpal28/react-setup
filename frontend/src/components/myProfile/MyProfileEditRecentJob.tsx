import { EditJobProps, MyProfileRecentJobsData } from '@app/interfaces/MyProfile';
import React, { useEffect, useState, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Upload } from 'antd';
import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
import { getJobByJobId, updateBuilderProfile, updateJob } from '@app/api/myprofile.api';
import productmodule from './Image.module.css';
import './Product.css';
import Download from '@app/Images/download.svg';
import uploadIcon from '@app/TunnelImages/uploadIcon.svg';
import DeleteImage from '@app/Images/delete.svg';
import { uploadPhoto } from '@app/api/common.api';
import { notificationController } from '@app/controllers/notificationController';
import { Button } from '../common/buttons/Button/Button';
import { ReactComponent as CloseModal } from '@app/assets/icons/closeModalIcon.svg';
import { StandaloneSearchBox } from '@react-google-maps/api';
import recentProfile from './MyProfileRecentJobs.module.css';
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const styles = {
  deleteBtn: {
    background: '#FFFFFF',
    border: '1px solid #D0D5DD',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '8px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#344054',
    cursor: 'pointer',
  },
};

const MyProfileEditRecentJob: React.FC<EditJobProps> = ({
  isEditJobClicked,
  setEditJobClicked,
  builderId,
  editJobId,
}) => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [jobDetails, setJobDetails] = useState<MyProfileRecentJobsData>();
  const [fileUrl, setFileUrl] = useState<Array<string>>([]);
  const [fullAddress, setFullAddress] = useState<any>([]);

  useEffect(() => {
    getJobByJobId(builderId, editJobId).then((res: any) => {
      if (res.data) {
        setJobDetails(res.data.recentJob);
      }
    });
  }, []);

  useEffect(() => {
    if (jobDetails) {
      form.setFieldsValue({
        name: jobDetails.name,
        rating: jobDetails.rating,
      });
    }
  }, [jobDetails]);

  const [form] = Form.useForm();

  const initialValues = {
    name: jobDetails?.name,
    rating: jobDetails?.rating,
  };

  const handleChange2 = async (e: any) => {
    try {
      const filePath = [...fileUrl];
      for (let i = 0; i < e.target.files.length; i++) {
        const res = await uploadPhoto(e.target.files[i]);
        filePath.push(res.data.url);
      }
      setFileUrl(filePath);
    } catch (err) {
      console.error(err);
    }
  };

  const onCancel = () => {
    setEditJobClicked(!isEditJobClicked);
  };

  const handleJobDelete = async (mediaItemId: number) => {
    if (jobDetails) {
      const updatedMediaItems = jobDetails.recentJobMediaItems.filter((item) => Number(item.id) !== mediaItemId);

      const updatedJobDetails = {
        name: jobDetails.name,
        rating: jobDetails.rating,
        address: [],
        recentJobMediaItems: updatedMediaItems.map(({ id, url }) => ({ id, url })),
      };

      try {
        await updateJob(builderId, editJobId, updatedJobDetails);
        setJobDetails(updatedJobDetails);
      } catch (error) {
        console.error('Error updating job:', error);
      }
    }
  };

  const handleSubmit = async (values: MyProfileRecentJobsData) => {
    const formattedAddresses = fullAddress?.map((address: any) => {
      const cityComponent = address.address_components.find(
        (component: { types: string[] }) =>
          component.types.includes('locality') || component.types.includes('administrative_area_level_3'),
      );
      const zipcodeComponent = address.address_components.find((component: { types: string[] }) =>
        component.types.includes('postal_code'),
      );
      const stateComponent = address.address_components.find((component: { types: string[] }) =>
        component.types.includes('administrative_area_level_1'),
      );
      const countyComponent = address.address_components.find((component: { types: string[] }) =>
        component.types.includes('administrative_area_level_2'),
      );

      const state = stateComponent?.long_name || '';
      const city = cityComponent?.long_name || '';
      const zipcode = zipcodeComponent?.long_name || '';
      const county = countyComponent?.long_name || '';

      return {
        fullAddress: address.formatted_address,
        city,
        county,
        state,
        zipcode,
        addressPlaceId: address.place_id,
        addressUrl: address.url,
        lat: address.geometry.location.lat(),
        long: address.geometry.location.lng(),
      };
    });

    const updatedValues = {
      ...values,
      address: formattedAddresses[0],
      recentJobMediaItems: fileUrl.map((url) => ({ url })),
    };

    const updatedJobDetails = {
      name: values.name,
      rating: values.rating,
      recentJobMediaItems: jobDetails?.recentJobMediaItems.map(({ id, url }) => ({ id, url })) || [],
    };

    const mergedJobDetails = {
      ...updatedValues,
      recentJobMediaItems: [...updatedJobDetails.recentJobMediaItems, ...updatedValues.recentJobMediaItems],
    };

    updateJob(builderId, editJobId, mergedJobDetails)
      .then(() => {
        setEditJobClicked(!isEditJobClicked);
        // setJobDetails(mergedJobDetails);
        setEditJobClicked(!isEditJobClicked);
        notificationController.success({
          message: 'Jobs updated successfully.',
        });
      })
      .catch((err) => {
        notificationController.error({ message: err.message });
      });
  };

  const inputRef = useRef<any>(null);

  const handlePlaceChange = () => {
    const place = inputRef.current.getPlaces();
    setFullAddress(place);
  };

  return (
    <Modal
      open={isEditJobClicked}
      onCancel={() => setEditJobClicked(!isEditJobClicked)}
      footer={null}
      width={1000}
      closeIcon={<CloseModal />}
    >
      <div className={`${recentProfile.modalHeader} bg-black`}></div>
      <div className="p-8 flex flex-col ">
        <div className="text-xl font-semibold mb-6">Edit Recent Job</div>
        <BaseButtonsForm
          {...formItemLayout}
          isFieldsChanged={isFieldsChanged}
          onFieldsChange={() => setFieldsChanged(true)}
          form={form}
          onFinish={handleSubmit}
        >
          <BaseButtonsForm.Item label="Name" name="name">
            <Input placeholder="Enter the job name"></Input>
          </BaseButtonsForm.Item>

          <BaseButtonsForm.Item label="Location" className="w-full" name="address" valuePropName="array">
            <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChange}>
              <input
                className=" locationName w-full h-[45px] border-2 px-[14px] py-[10px] rounded-[8px]"
                type="text"
                placeholder="Enter Location"
                name="location"
                defaultValue={jobDetails?.address?.fullAddress}
              />
            </StandaloneSearchBox>
          </BaseButtonsForm.Item>

          <div className="flex gap-1 flex-col">
            <div className="flex justify-between">
              <p className="text-[14px] opacity-80 mt-[10px] text-[#344054]">Work Images</p>
              <BaseButtonsForm.Item name="recentJobMediaItems" className="w-[100px]">
                <div className="setUploadFields bg-[#14fda8] h-[40px] flex justify-center items-center rounded-lg text-[14px] leading-5 font-semibold ">
                  <input
                    type="file"
                    placeholder="Add"
                    multiple
                    accept=".jpg, .jpeg, .png"
                    className="cursor-pointer"
                    onChange={handleChange2}
                  />
                  <button className="text-[14px] text-[#030303]">+ Add</button>
                </div>
              </BaseButtonsForm.Item>
            </div>
            <div className={`${productmodule.imageContainer}`}>
              {fileUrl &&
                fileUrl.length > 0 &&
                fileUrl.map((item, index) => {
                  return (
                    <div key={index} className={`${productmodule.dataContainer}`}>
                      <div className={`${productmodule.imageHolder}`}>
                        <img className="w-[260px] h-[150px]" src={`${item}`} alt="img" />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="deleteImages flex flex-wrap gap-5">
            {jobDetails &&
              jobDetails.recentJobMediaItems.map((mediaItem) => (
                <div key={mediaItem.id} className="mb-6 ">
                  <img className="w-[260px] h-[150px] rounded-md border" src={mediaItem.url} />
                  <div className="flex flex-row justify-end mt-2">
                    <p style={styles.deleteBtn} className="p-[5px]" onClick={() => handleJobDelete(mediaItem.id)}>
                      Delete
                    </p>
                  </div>
                </div>
              ))}
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
    </Modal>
  );
};

export default MyProfileEditRecentJob;
