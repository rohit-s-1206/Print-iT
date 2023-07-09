document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];
  
    if (file) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var fileContent = e.target.result;
        var printerReadyContent = generatePrinterReadyFile(fileContent);
  
        var printerReadyFile = document.getElementById("printerReadyFile");
        printerReadyFile.textContent = printerReadyContent;
      };
  
      reader.readAsText(file);
    }
  });
  
  function generatePrinterReadyFile(fileContent) {
    // Generate printer-ready file here (process file content)
    // You can use a library or custom logic to convert, modify, or style the content as needed
  
    var printerReadyContent = "Printer-Ready File Content:\n\n" + fileContent;
    return printerReadyContent;
  }
  