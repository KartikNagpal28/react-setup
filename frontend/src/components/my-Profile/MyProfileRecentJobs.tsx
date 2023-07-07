import React, { useEffect, useState, useRef } from 'react';
import { Input, Modal } from 'antd';
import { BaseButtonsForm } from '../common/forms/BaseButtonsForm/BaseButtonsForm';
// import { Address, addRecentJobs, deleteJob, getRecentJobs } from '@app/api/myprofile.api';
import { BuilderDetail, RecentJobs } from '@app/interfaces/Builder';
import { MyProfileRecentJobsData, MyProfileRecentJobsProps } from '@app/interfaces/MyProfile';
import { notificationController } from '@app/controllers/notificationController';
import { InputNumber } from '../common/inputs/InputNumber/InputNumber';
import { Button } from '../common/buttons/Button/Button';
import { uploadPhoto } from '@app/api/common.api';
import productmodule from './Image.module.css';
import './Product.css';
import { ExclamationCircleFilled } from '@ant-design/icons';
import MyProfileEditRecentJob from './MyProfileEditRecentJob';
import recentJobsDefaultImage from '@app/assets/images/recentJobsDefaultImage.png';
import { ReactComponent as CloseModal } from '@app/assets/icons/closeModalIcon.svg';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import profilemodule from './MyProfileForm.module.css';
import recentProfile from './MyProfileRecentJobs.module.css';
import { Option, Select } from '../common/selects/Select/Select';
import { log } from 'console';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const initValues = {
  name: '',
  rating: null,
  // address: [],
  address: {
    fullAddress: '',
    city: '',
    county: '',
    state: '',
    zipcode: '',
    addressPlaceId: undefined,
    addressUrl: undefined,
    lat: '',
    long: '',
  },
  recentJobMediaItems: [{ url: '' }],
};

const styles = {
  addBtn: {
    background: '#14FDA8',
    border: '1px solid #14FDA8',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '8px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#030303',
  },
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
  },
  smallBtn: {
    padding: '5px 8px !important',
  },
};

const MyProfileRecentJobs: React.FC<MyProfileRecentJobsProps> = ({ builderId }) => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [recentJobs, setRecentJobs] = useState<RecentJobs[]>([]);
  const [builderDetail, setBuilderDetail] = useState<BuilderDetail>({});
  const [fileUrl, setFileUrl] = useState<Array<string>>([]);
  const [isJobClicked, setJobClicked] = useState<boolean>(false);
  const [isEditJobClicked, setEditJobClicked] = useState<boolean>(false);
  const [editJobId, setEditJobId] = useState<number>(0);
  const [editJob, setEditJob] = useState<RecentJobs[]>([]);
  const [value, setValue] = useState(null);
  const [fullAddress, setFullAddress] = useState<any>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [newAdd, setNewAdd] = useState<any>({});
  const { confirm } = Modal;
  function recentUserJob() {
    // getRecentJobs(builderId).then((res: any) => {
    //   if (res.data) {
    //     setRecentJobs(res.data.recentJobs);
    //   }
    // });
  }
  useEffect(() => {
    recentUserJob();
    if (!isJobClicked) {
      setFileUrl([]);
    }
  }, [isJobClicked]);

  const handleLocationChange = (values: any) => {
    setSelectedLocation(values);
  };

  const handleSubmit = (values: MyProfileRecentJobsData) => {
    const { name } = values;
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
      rating: null,
      recentJobMediaItems: fileUrl.map((url) => ({ url })),
    };
    // addRecentJobs(builderId, updatedValues)
    //   .then(() => {
    //     setJobClicked(false);
    //     notificationController.success({
    //       message: 'Recent Jobs updated successfully.',
    //     });
    //     recentUserJob();
    //   })
    //   .catch((err) => {
    //     notificationController.error({ message: err.message });
    //   });
  };

  const handleChange2 = async (e: any) => {
    try {
      const filePath = [...fileUrl];
      for (let i = 0; i < e.target.files.length; i = i + 1) {
        const res = await uploadPhoto(e.target.files[i]);
        filePath.push(res.data.url);
      }
      setFileUrl(filePath);
    } catch (err) {
      console.error(err);
    }
  };

  const showConfirm = (id: number) => {
    confirm({
      title: 'Do you want to delete this job?',
      icon: <ExclamationCircleFilled />,
      content: '',
      onOk() {
        handleDeleteJob(id);
      },
      onCancel() {
        console.log({});
      },
    });
  };

  const handleDeleteJob = async (id: number) => {
    try {
      // await deleteJob(builderId, id);
      // notificationController.success({
      //   message: 'Job deleted successfully.',
      // });
      // const updatedJobs = recentJobs.filter((item) => item.id !== id);
      // setRecentJobs(updatedJobs);
    } catch (err) {
      // notificationController.error({ message: err.message });
    }
  };

  const inputRef = useRef<any>(null);

  const handlePlaceChange = () => {
    const place = inputRef.current.getPlaces();
    setFullAddress(place);
  };

  const onCancel = () => {
    setJobClicked(!isJobClicked);
  };

  return (
    <>
      <div className="pb-[30px] mt-8">
        <div className="flex gap-2 items-center flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-[#1B1B1B] text-[18px] font-semibold leading-7">Recent Projects</span>{' '}
            <span className="text-[#475467] font-normal text-[14px] leading-5">Share a few snippets of your work.</span>
          </div>
          <button
            onClick={() => {
              setJobClicked(true);
            }}
            style={styles.addBtn}
            className="px-[16px] py-[10px]"
          >
            Add Job
          </button>
        </div>
      </div>

      <Modal
        open={isJobClicked}
        onCancel={() => setJobClicked(!isJobClicked)}
        footer={null}
        width={1000}
        closeIcon={<CloseModal />}
        destroyOnClose
      >
        <div className={`${recentProfile.modalHeader} h-[140px] bg-black`}></div>
        <div className="p-8 flex flex-col ">
          <div className="text-xl font-semibold mb-6">Add Recent Job</div>
          <BaseButtonsForm
            {...formItemLayout}
            isFieldsChanged={isFieldsChanged}
            onFieldsChange={() => setFieldsChanged(true)}
            onFinish={handleSubmit}
            initialValues={initValues}
          >
            <BaseButtonsForm.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Job Name is required' }]}
            >
              <Input placeholder="Enter the job name"></Input>
            </BaseButtonsForm.Item>
            <BaseButtonsForm.Item label="Location" className="w-full" name="address" valuePropName="array">
              <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChange}>
                <input
                  className="w-full h-[45px] border-2 px-[14px] py-[10px] rounded-[8px]"
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                />
              </StandaloneSearchBox>
            </BaseButtonsForm.Item>
            <div>
              <div className="flex justify-between">
                <p className="text-[14px] opacity-80 mt-[10px] text-[#344054]">Work Images</p>
                <BaseButtonsForm.Item name="recentJobMediaItems" className="w-[100px]">
                  <div className="setUploadFields cursor-pointer hover:cursor-pointer text-[#1b1b1b] bg-[#14fda8] h-[40px] flex justify-center items-center rounded-lg text-[14px] leading-5 font-semibold ">
                    <input
                      className="cursor-pointer"
                      type="file"
                      multiple
                      accept=".jpg, .jpeg, .png"
                      onChange={handleChange2}
                    />
                    + Add
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
                          <img src={`${item}`} alt="img" />
                        </div>
                      </div>
                    );
                  })}
              </div>
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
      <div className="flex gap-[10px] flex-wrap">
        {recentJobs.map((job, index) => (
          <div className="jobinfo" key={index}>
            <img
              className={`${profilemodule.recenJobImage}`}
              src={job.recentJobMediaItems[0]?.url || recentJobsDefaultImage}
              alt=""
            />
            <div className="flex flex-row  justify-end mt-2 gap-2">
              <button onClick={() => showConfirm(job.id)} style={styles.deleteBtn} className="p-[5px]">
                Delete
              </button>
              <button
                onClick={() => {
                  setEditJobClicked(!isEditJobClicked);
                  setEditJobId(job.id);
                }}
                className="p-[5px]"
                style={styles.addBtn}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditJobClicked && (
        <MyProfileEditRecentJob
          isEditJobClicked={isEditJobClicked}
          setEditJobClicked={setEditJobClicked}
          builderId={builderId}
          editJobId={editJobId}
        />
      )}
    </>
  );
};

export default MyProfileRecentJobs;
