import { Fragment, useEffect, useState } from "react";

import Header from "../components/Header";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {

  const ApiKey = process.env.NEXT_PUBLIC_IPIFY_KEY;

  const [loading, setLoading] = useState(true);
  const [ipInformation, setIpInformarion] = useState({});
  const [position, setPosition] = useState([0, 0]);

  async function getInitialData() {
    setLoading(true);

    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${ApiKey}`);
    const data = await response.json();
    setIpInformarion(data);
    setPosition([data.location.lat, data.location.lng]);

    setLoading(false);
  }

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Fragment>
      <Header loading={loading} ipInformation={ipInformation} />
      <Map loading={loading} position={position} />
    </Fragment>
  )
}
