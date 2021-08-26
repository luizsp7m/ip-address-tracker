import { Fragment } from "react";

import Header from "../components/Header";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {

  return (
    <Fragment>
      <Header />
      <Map />
    </Fragment>
  )
}
