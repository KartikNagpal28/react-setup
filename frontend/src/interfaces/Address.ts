// Address interface data can be shifted into this file in future

export enum AddressComponents {
  STATE = 'administrative_area_level_1',
  CITY = 'administrative_area_level_2',
  ZIP_CODE = 'postal_code',
}

// Maybe renamed in future, To be discussed
export class AddressV2 {
  fullAddress;
  city;
  state;
  zipcode;
  county = '';
  addressPlaceId;
  addressUrl;
  lat;
  long;

  constructor(address?: google.maps.places.PlaceResult) {
    const findInAddressComponent = (search: string): string => {
      const res = address?.address_components?.find((component: { types: string[] }) =>
        component.types.includes(search),
      );
      return res?.long_name || '';
    };

    this.fullAddress = address?.formatted_address;
    this.city = findInAddressComponent(AddressComponents.CITY);
    this.state = findInAddressComponent(AddressComponents.STATE);
    this.zipcode = findInAddressComponent(AddressComponents.ZIP_CODE);
    this.addressPlaceId = address?.place_id;
    this.addressUrl = address?.url;
    this.lat = address?.geometry?.location?.lat();
    this.long = address?.geometry?.location?.lng();
  }
}
