function baixar() {
    const link = window.document.createElement("a");
    link.href = "IMG/Currículo/Currículo simples redatora e social media branco e preto_20251006_142748_0000.pdf"
    link.download = "Currículo.pdf"
    link.click();

}