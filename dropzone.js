function addRowToTable(firstName, lastName, email, phone) {

    const table = document
        .getElementById("dataTable")
        .getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = phone;
}



// Dropzon.js yapılandırılması
let dropZone = Dropzone.options.myDropzone = {
    url: '#',  // dosyaları sunucuya yükleme kapalı
    autoProcessQueue: false,   // otomatik yükleme devre dışı
    clickable: true,  // dropzone alanı tıklanabilir
    addRemoveLinks: true,  // dosya silme linki aktif
    // removedfile: function (file) {
   

    // },
    init: function () {
        this.on('addedfile', (file) => {

            // dosya yüklendiğinde yapılacak işlemler
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                const lines = content.split('\n');  // \n -> new line
                lines.forEach(line => {
                    const [firstName, lastName, email, phone] = line.split(',');
                    addRowToTable(firstName, lastName, email, phone);
                });
            }

            reader.readAsText(file);

        });

        this.on('dragover', () => {
            console.log('dragover event fired');
        });

        this.on('drop', (file) => {

            console.log('dosya yükleme başarılı');
        })
    }
};
