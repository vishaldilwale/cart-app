import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
height:50px;
background-color:#B2B2B2;
color:blue;
border:2px solid red;
top:0px;
display:flex;
justify-content:end;
align-items:center;
padding:10px 30px;
position:sticky;
`;

export const LinkWrapper = styled(Link)`
color: rgb(139,0,0);
font-weight: bold;
text-decoration:none;
display:flex;
align-items:center;
justify-content:end
`;