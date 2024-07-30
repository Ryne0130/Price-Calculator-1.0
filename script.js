function calculatePrice() {  
    var pages = parseInt(document.getElementById('pages').value, 10);  
    var designLevel = document.getElementById('designLevel').value;  
    var isPureContent = document.getElementById('pureContent').checked;  
    var animation = document.querySelector('input[name="animation"]:checked').value;  
  
    var pricePerPage = 0;  
    switch (designLevel) {  
        case 'simple':  
            pricePerPage = animation === 'static' ? 5 : 8;  
            break;  
        case 'general':  
            pricePerPage = animation === 'static' ? 8 : 12;  
            break;  
        case 'standard':  
            pricePerPage = animation === 'static' ? 12 : 15;  
            break;  
        case 'beautiful':  
            pricePerPage = animation === 'static' ? 25 : 30;  
            break;  
        case 'high-end':  
            pricePerPage = animation === 'static' ? 40 : 45;  
            break;  
        case 'chief':  
            pricePerPage = animation === 'static' ? 150 : 200;  
            break;  
    }  
  
    // 假设纯内容排版有折扣（这里简单处理为8折）  
    if (isPureContent) {  
        pricePerPage *= 0.8;  
    }  
  
    var totalPrice = pages * pricePerPage;  
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);  
}
