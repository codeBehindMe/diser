import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { createContext } from "react";

export const MapContext = createContext('');

export async function loader() {
  return {
    REACT_GOOGLE_MAPS_API_KEY: process.env.REACT_GOOGLE_MAPS_API_KEY,
  };
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Diser ",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const envData = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MapContext.Provider value={envData.REACT_GOOGLE_MAPS_API_KEY}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MapContext.Provider>
      </body>
    </html>
  );
}
