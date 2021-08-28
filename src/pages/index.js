import { Fragment, useEffect, useState } from "react";

import Header from "../components/Header";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

import Head from 'next/head';

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

  async function handleSubmit(value) {
    if (value.trim() === '') return alert('Valor inválido');

    setLoading(true);

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)) {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${ApiKey}&ipAddress=${value}`);
      const data = await response.json();

      setIpInformarion(data);
      setPosition([data.location.lat, data.location.lng]);
    } else {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${ApiKey}&domain=${value}`);


      if (response.status === 200) {
        const data = await response.json();
        setIpInformarion(data);
        setPosition([data.location.lat, data.location.lng]);
      } else {
        alert('Domain not found');
        getInitialData();
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>IP Address Tracker</title>
      </Head>

      <Header loading={loading} ipInformation={ipInformation} handleSubmit={handleSubmit} />
      <Map loading={loading} position={position} />
    </Fragment>
  )
}
