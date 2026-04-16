function calculateTotal() {
    const price1 = parseFloat(document.getElementById("item1").value);
    const price2 = parseFloat(document.getElementById("item2").value);
    const price3 = parseFloat(document.getElementById("item3").value);

    const total = price1 + price2 + price3;
    document.getElementById("suma").textContent = "Total: $" + total.toFixed(2);
}   