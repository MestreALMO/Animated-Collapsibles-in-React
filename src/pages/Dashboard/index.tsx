import React from 'react';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <h2>Animated Collapsibles</h2>

      <p>A Collapsible:</p>
      <button type="button" className="collapsible">
        Open Collapsible
      </button>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <p>Collapsible Set:</p>
      <button type="button" className="collapsible">
        Open Section 1
      </button>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <button type="button" className="collapsible">
        Open Section 2
      </button>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <button type="button" className="collapsible">
        Open Section 3
      </button>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Container>
  </>
);

export default Dashboard;
