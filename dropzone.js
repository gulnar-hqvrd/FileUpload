function addRowtoTable(firstname, lastname, email, phone) {
  const table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  const newRow = table.insertRow();
  newRow.insertCell(0).textContent = firstname;
  newRow.insertCell(1).textContent = lastname;
  newRow.insertCell(2).textContent = email;
  newRow.insertCell(3).textContent = phone;
}

//   document.getElementById("fileInput").addEventListener("change", (event) => {
//     const file = event.target.files[0];

//     if (!file) {
//       throw new Error("No file");
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const content = e.target.result;
//       const lines = content.split('\n')
//       lines.forEach(line=>{
//           const [firstname , lastname , email , phone] = line.split(",");
//           addRowtoTable(firstname , lastname , email , phone)
//       })
//     };

//     reader.readAsText(file)
//   });

Dropzone.options.myDropzone = {
  url: "#", //fayllar admin yuklemir))
  autoProcessQueue: false, // automatic yukleme deactive
  clickable: true, //dropzone hissesi click oluna bilsin
  init: function () {
    this.on("addedfile", (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          const lines = content.split('\n')
          lines.forEach(line=>{
              const [firstname , lastname , email , phone] = line.split(",");
              addRowtoTable(firstname , lastname , email , phone)
          })
        };
      
        reader.readAsText(file)
    });
  },
};
