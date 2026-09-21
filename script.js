document.getElementById("fileInput").addEventListener("change", handleFile);

function handleFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet);

    // Filtro 1: Tramite en proceso + REMISION
    const filtro1 = rows.filter(r =>
      r["TIPO DE TRAMITE"]?.toUpperCase() === "REMISION" &&
      r["TRAMITE CERRADO/ABIERTO"]?.toUpperCase() === "TRAMITE EN PROCESO"
    );

    // Filtro 2: Urgencia Vital + REMISION
    const filtro2 = rows.filter(r =>
      r["TIPO DE TRAMITE"]?.toUpperCase() === "REMISION" &&
      r["OBSERVACION"]?.toUpperCase().includes("URGENCIA VITAL")
    );

    document.getElementById("output").textContent =
      "--- Filtro 1: Tramite en proceso ---\n" +
      JSON.stringify(filtro1, null, 2) +
      "\n\n--- Filtro 2: Urgencia Vital ---\n" +
      JSON.stringify(filtro2, null, 2);
  };

  reader.readAsArrayBuffer(file);
}
