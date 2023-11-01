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

export const getCartTotalValue = (list:ProductInterface[]) => {
    let totalPrice = 0;
    list.forEach((c:any) => {
        const price = c.price;
        const quantity = c.quantity;
        const totalProductPrice = price * quantity;
        totalPrice += totalProductPrice
    });
    return totalPrice.toFixed(2)
};