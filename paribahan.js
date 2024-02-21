
document.addEventListener('click', function paribahon(){
    const paribohonBtn = document.getElementById('paribahan-section')
    paribohonBtn.scrollIntoView({ behavior: 'smooth' })
})
const allBtn = document.getElementsByClassName('btn');
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
          event.target.setAttribute('disabled',false);
          event.target .style.backgroundColor = "#1dd100";

        const totalSeat =document.getElementById('total-seat').innerText;
        const convertedSeat =parseInt(totalSeat);
        document.getElementById('total-seat').innerText= convertedSeat - 1;
       
   
    


    const Seat = btn.innerText;

    const Price = document.getElementById('per-price').innerText;
    const convertedPrice = parseInt(Price);


    const selectedSeat =document.getElementById('Selected-seat').innerText;
    const seatSelected = parseInt(selectedSeat);
    document.getElementById('Selected-seat').innerText =seatSelected + 1;

    const seatLimit = document.getElementById('Selected-seat').innerText;
    const limit = parseInt(seatLimit);
    if(limit + 1 > 5){
        alert('limit nai');
        return;
    }
   
   
    const priceContainer = document.getElementById('price-container')
    
    const div =document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-around');
    

   
    const p1 =document.createElement('p')
    const p2 = document.createElement('p');
    const p3 =document.createElement('p');

    p1.innerText = Seat;
    p2.innerText = 'Economy';
    p3.innerText = parseInt(convertedPrice);

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    priceContainer.appendChild(div);
    updatedTotalPrice();
    updatedGrandTotal()
    
     

   })
}
function updatedTotalPrice(){
    const previousTotal = document.getElementById('total-price').innerText;
   
    const convertedTotal=parseInt(previousTotal);
   
    const singlePrice = document.getElementById('per-price').innerText;
   
    const sum =convertedTotal+parseInt(singlePrice);
   
    document.getElementById('total-price').innerText = sum;
}
function updatedGrandTotal(GrandTotal){
    
  
    const previousTotal = document.getElementById('total-price').innerText;
    const convertedTotal = parseInt(previousTotal);
        if(GrandTotal== undefined){

    document.getElementById("grand-total").innerText = convertedTotal;

        }
    else{
        const couponCode =document.getElementById('coupon-code').value;

        if(couponCode=='NEW15'){
            const discounted = convertedTotal *0.15;
            document.getElementById("grand-total").innerText = convertedTotal - discounted;

        }
        else{
            alert('please enter valid coupon code')
        }
   
    }
}
// function getConvertedValue(elementId){
//     const element = document.getElementById(elementId).innerText;
//     const convertedPrice =parseInt(element);
//     return convertedPrice;
// }
