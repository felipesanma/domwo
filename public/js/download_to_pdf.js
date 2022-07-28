function downloadToPDF() {
    const invoice = this.document.getElementById("invoice");
    console.log(invoice);
    console.log(window);
    var opt = {
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2.5 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save();
}