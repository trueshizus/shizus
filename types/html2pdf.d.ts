declare module 'html2pdf.js' {
    interface Html2PdfOptions {
      filename?: string;
      image?: {
        type?: string;
        quality?: number;
      };
      html2canvas?: {
        scale?: number;
      };
      jsPDF?: {
        format?: string;
        unit?: string;
        margin?: number[];
        compress?: boolean;
      };
    }
  
    function html2pdf(element: HTMLElement, options?: Html2PdfOptions): Promise<void>;
    export default html2pdf;
  }