import styled from 'styled-components';

interface WidthProps {
    width: string | number;
}
interface ButtonProps {
    width?: string | number;
    height?: string | number;
}
interface CustomButtonProps {
    disabled?: boolean;
}

export const CardWrapper = styled.div`
width:400px;
max-width:100%;
height:auto;
border:1px solid grey;
padding:20px;
margin:20px 15px;
border-radius:20px;
@media only screen and (max-width: 728px) {
    width:-webkit-fill-available;
  }
`;
export const CardImg = styled.img`
height:100px;
width:100px
`;
export const ImgWrapper = styled.div`
width:30%
`;
export const WidthWrapper = styled.div<WidthProps>`
width:${props => props.width || '100%'}
`;
export const FlexBox = styled.div`
display:flex
`;
export const CardActionWrapper = styled.div`
display:flex;
 justify-content:around;
 align-items:center;
 width:100%
`;
export const CardActionWrapperCart = styled.div`
display:flex;
 justify-content:around;
 align-items:center;
 margin-top:15px
`;

export const CustomButton = styled.button<CustomButtonProps>`
border-radius: 10px;
cursor:pointer
`;
export const AddToCartBtn = styled(CustomButton)`
width:150px;
height:50px;
marginLeft:20px
`;
export const Button = styled(CustomButton) <ButtonProps>`
width:${props => props.width || 'auto'};
height:${props => props.height || 'auto'}
`;
export const QuantityIconBtn = styled(CustomButton)`
width:50px;
height:50px;
`;
export const QuantityValueWrapper = styled.div`
margin:0px 10px;
 min-width:30px;
 text-align:center
`;
export const QuantityWrapper = styled.div`
width:40%;
display:flex;
align-items:center;
justify-content:end;
margin-left:auto
`;