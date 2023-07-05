import { LoadScriptNext } from '@react-google-maps/api';
import Spinner from '@app/assets/icons/spinner.svg';

const libraries: ('places' | 'geometry' | 'drawing' | 'localContext' | 'visualization')[] = ['places'];
const MapContainer = ({ children }: { children: JSX.Element }) => (
  <LoadScriptNext
    loadingElement={
      <div id="initSpinner">
        <img src={Spinner} alt="Loading..." />
      </div>
    }
    googleMapsApiKey="AIzaSyAzbjDQ-Mv2anv2LWPHLPl5pxfNR9IGEuQ"
    libraries={libraries}
  >
    {children}
  </LoadScriptNext>
);

export default MapContainer;
