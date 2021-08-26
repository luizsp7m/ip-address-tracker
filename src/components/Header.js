import { Container, Title, Search, Display, Card } from '../styles/Header';

export default function Header() {
  return (
    <Container>
      <Title>IP Address Tracker</Title>

      <Search>
        <input type="text" placeholder="Search for any IP address or domain" />
        <button>
          <img src="/images/icon-arrow.svg" alt="Arrow" />
        </button>
      </Search>

      <Display>
        <Card>
          <span>IP Address</span>
          <h3>192.168.0.1</h3>
        </Card>

        <Card>
          <span>Location</span>
          <h3>Ourinhos, SP</h3>
          <h3>36</h3>
        </Card>

        <Card>
          <span>Timezone</span>
          <h3>UTC-05:00</h3>
        </Card>

        <Card>
          <span>ISP</span>
          <h3>SpaceX</h3>
          <h3>Starlink</h3>
        </Card>
      </Display>
    </Container>
  );
}