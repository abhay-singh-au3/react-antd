import styled from 'styled-components';

export const NavTitle = styled.h3`
  padding-left: 5px;
  color: navy;
`;

export const CustomAudio = styled.audio`
  width: 85%;
  padding: 5px;
`;

export const CustomSpinner = styled.div`
  border: 1px solid;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  margin: auto;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 50 50'%3E%3Cpath d='M28.43 6.378C18.27 4.586 8.58 11.37 6.788 21.533c-1.791 10.161 4.994 19.851 15.155 21.643l.707-4.006C14.7 37.768 9.392 30.189 10.794 22.24c1.401-7.95 8.981-13.258 16.93-11.856l.707-4.006z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E")
    center / contain no-repeat;
`;
