/* // fiyat ve indirim oranını alacak, 
indirim varsa asıl fiyattan indirim oranı kadar çıkartıcak, 
indirim yoksa asıl fiyatı döndürecek */

export default (price:number, discount:number=0) =>{
    if(discount){
        return (price * (100-discount))/100;
    }else{
        return price;
    }
}