document.getElementById("run-c-program").addEventListener("click", async () => {
    try {
        // Charger le fichier WebAssembly
        const response = await fetch("program.wasm");
        const buffer = await response.arrayBuffer();
        const wasmModule = await WebAssembly.instantiate(buffer);

        // Appeler la fonction principale du programme C
        wasmModule.instance.exports.main();
    } catch (error) {
        console.error("Erreur lors de l'exécution du fichier C :", error);
    }
});
