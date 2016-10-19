/*   function readTextFile(file) {
      var rawFile = new XMLHttpRequest(), 
          allText;
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function () {
         if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
               allText = rawFile.responseText;
            }
         }
      }
      rawFile.send(null);
      return allText;
   } */
   function readTextFile(file) {
      var reader = new FileReader(),
	         allText;
      reader.onload = function(progressEvent) {
         allText = this.result;
      };
      reader.readAsText(file);
	  return allText;
   }