import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  color: #4b5563;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export default function Header() {
  return (
    <StyleHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <Paragraph>A community of artists and art-lovers.</Paragraph>
    </StyleHeader>
  );
}
