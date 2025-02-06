"use client";

export default function DownloadAsPdf() {
  const handleDownload = async () => {
    const element = document.querySelector("article");
    if (element) {
      // Find all ul elements within the article and store their original list-style
      const ulElements = element.querySelectorAll("ul");
      const originalStyles = Array.from(ulElements).map(
        (ul) => ul.style.listStyle
      );

      // Remove bullets temporarily
      ulElements.forEach((ul) => (ul.style.listStyle = "none"));

      // Dynamically import html2pdf only on client side
      const html2pdf = (await import("html2pdf.js")).default;

      try {
        await html2pdf(element, {
          filename: "cv-jesus-herrera.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: {
            format: "a4",
            unit: "pt",
            margin: [40, 40, 40, 40], // Increased margins for better spacing
            lineHeight: 1.5, // Add line height
            compress: true,
          },
        });
      } finally {
        // Restore original list styles
        ulElements.forEach(
          (ul, index) => (ul.style.listStyle = originalStyles[index])
        );
      }
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
