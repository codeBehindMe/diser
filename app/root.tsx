import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { useEffect, useRef, useState, ReactElement, Children, isValidElement, cloneElement } from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const renderMappy = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <p>Error</p>;
  return <p>spinner</p>;
};

export const MyMapComponent = ({ children }: { children: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  
  useEffect(() => {
    if (ref.current && !map) {
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      setMap(new window.google.maps.Map(ref.current, { zoom: 8, center: latlng }));
    }
  }, [ref, map]);

  return (
    <>
      <div ref={ref} style={{ width: 800, height: 600 }} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );

  // return <div ref={ref} id="map" style={{ width: 800, height: 600, background: 'yellow', overflow: 'visible' }} />
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      const latlng = new google.maps.LatLng(-34.397, 150.644);
      let floptions = {}
      floptions = Object.assign(floptions, options, { position: latlng })
      marker.setOptions(floptions);
    }
  }, [marker, options]);

  return null;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Wrapper apiKey={"AIzaSyAnOd-ezmIIpuGq1QUyPkMBD0Omsx6qy60"} render={renderMappy}>
          <MyMapComponent>
            <Marker />
          </MyMapComponent>
        </Wrapper>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
