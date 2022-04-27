import { useContext, useEffect, useRef, useState, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { MapContext } from '../root'

const renderMap = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <p>Error</p>;
  return <p>Loading..</p>;
};

interface Pin {
  lat: number
  lng: number
  id: string
}

interface Props {
  pins: Pin[]
  onPinClick: (id: string) => void
}

const DrawMap: React.FC<Props> = ({ pins, onPinClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  
  useEffect(() => {
    if (ref.current && !map) {
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      setMap(new window.google.maps.Map(ref.current, { zoom: 8, center: latlng }));
    }
  }, [ref, map]);

  const markers = pins.map(pin => {
    const marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.lng },
      label: pin.id,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      // @ts-expect-error
      onPinClick(marker.label)
    });

    return marker;
  });
  new MarkerClusterer({ markers, map });

  return (<div ref={ref} style={{ width: '100%', height: 600 }} />);
}

export const GoogleMap: React.FC<Props> = ({ pins, onPinClick }) => {
  const MapApiKey = useContext(MapContext)

  return (
    <Wrapper apiKey={MapApiKey} render={renderMap}>
      <DrawMap pins={pins} onPinClick={onPinClick} />
    </Wrapper>
  );
}
