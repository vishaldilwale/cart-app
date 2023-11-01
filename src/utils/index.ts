import { ProductInterface } from "../constants/interface";

export const getTrimmedText = (text: string, maxLength = 0) => {
    const trimLength = maxLength || 100;
    const isTrimRequired = text?.length > trimLength;
    if (isTrimRequired) {
        return `${text?.slice(0, trimLength)}...`;
    } else {
        return text;
    }
}

export const getFixedDigit=(value:number,fixedTo=2)=>{
    return value.toFixed(fixedTo);
}

export const getCartTotalValue = (list:ProductInterface[]) => {
    const totalPrice = list.reduce((p,product)=>p+(product?.price * product?.quantity!),0);
    return getFixedDigit(totalPrice)
};