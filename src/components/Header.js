import { useState } from 'react';

import { Container, Title, Search, Display, Card } from '../styles/Header';

export default function Header({ loading, ipInformation, handleSubmit }) {

  const [inputValue, setInputValue] = useState('');
  
  return (
    <Container>
      <Title>IP Address Tracker</Title>

      <Search>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={({ target })=> setInputValue(target.value)}
        />

        <button onClick={() => handleSubmit(inputValue)}>
          <img src="/images/icon-arrow.svg" alt="Arrow" />
        </button>
      </Search>

      {!loading && (
        <Display>
          <Card>
            <span>IP Address</span>
            <h3>{ipInformation.ip}</h3>
          </Card>

          <Card>
            <span>Location</span>
            <h3>{ipInformation.location.city}, {ipInformation.location.region} <br /> {ipInformation.location.country} </h3>
          </Card>

          <Card>
            <span>Timezone</span>
            <h3>UTC {ipInformation.location.timezone}</h3>
          </Card>

          <Card>
            <span>ISP</span>
            <h3>{ipInformation.isp}</h3>
          </Card>
        </Display>
      )}
    </Container>
  );
}