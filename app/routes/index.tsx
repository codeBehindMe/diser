import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { Header } from '../components/Header';
import { GoogleMap } from "~/components/GoogleMap";
import { InfoDrawer } from '~/components/InfoDrawer';

export default function Index() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [_pins, setPins] = useState([])

  useEffect(() => {
    const getPins = async () => {
    const pinsFromServer = await fetchPins()
    setPins(pinsFromServer)
    }
    getPins()
  }, [])

  const fetchPins = async () => {
      const res = await fetch("http://localhost:5000/pins")
      const data = res.json()

      return data
  }



  const pins = [
    { lat: -31.56391, lng: 147.154312, id: 'A' },
    { lat: -33.718234, lng: 150.363181, id: 'B' },
    { lat: -33.727111, lng: 150.371124, id: 'C' },
    { lat: -33.848588, lng: 151.209834, id: 'D' },
  ]

  const toggleDrawer = () => {
    setOpenDrawer(prev => !prev)
  }

  const onPinClick = (id: string) => {
    toggleDrawer()
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <InfoDrawer title="sean" id="sss" />
      </Drawer>
      <GoogleMap pins={_pins} onPinClick={onPinClick} />
    </div>
  );
}
