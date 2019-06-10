/**
 *
 * ButtonBackWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';

const ButtonBackWrapper = styled.button`
  display: block;
  border-radius: 2px;
  width: 90%;
  display: inline-block;

  @media screen and (min-width: ${PHONE_LANDSCAPE_VIEWPORT_WIDTH}) {
    width: 17rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonBackWrapper;
