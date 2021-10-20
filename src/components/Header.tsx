import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BaseContainer } from './baseComponents';
const Header: React.FC = () => (
  <StyledHeader>
    <StyledBaseContainer>
      <span>Formik Examples</span>
      <nav>
        <ul>
          <li>
            <Link to="/">{'<Formik>'}</Link>
          </li>
          <li>
            <Link to="/use-formik">useFormik()</Link>
          </li>
          <li>
            <Link to="/use-custom-form-hook">useCustomFormHook()</Link>
          </li>
        </ul>
      </nav>
    </StyledBaseContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  font-size: 1.25rem;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      &:not(:last-of-type) {
        margin-right: 20px;
      }
      a {
        color: inherit;
      }
    }
  }
`;

const StyledBaseContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export default Header;
