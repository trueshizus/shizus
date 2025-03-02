"use client";

export default function DownloadAsPdf() {
  const handleDownload = async () => {
    const element = document.querySelector("article");
    if (element) {
      // Dynamically import html2pdf only on client side
      const html2pdf = (await import("html2pdf.js")).default;

      await html2pdf(element, {
        filename: "cv-jesus-herrera.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          format: "a4",
          unit: "pt",
          margin: [20, 20, 20, 20],
          compress: true,
        },
      });
    }
  };

  return (
    <button
      type="button"
      aria-label="Download as PDF"
      title="Download as PDF"
      className="items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500 hidden md:flex"
      onClick={handleDownload}
    >
      ⤓
    </button>
  );
}
