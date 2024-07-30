function calculatePrice() {  
    // 获取用户输入的PPT页数  
    var slides = document.getElementById('slides').value;  
  
    // 假设每页PPT的报价是50元  
    var pricePerSlide = 50;  
  
    // 计算总价  
    var totalPrice = slides * pricePerSlide;  
  
    // 显示结果  
    document.getElementById('price').textContent = totalPrice;  
}
