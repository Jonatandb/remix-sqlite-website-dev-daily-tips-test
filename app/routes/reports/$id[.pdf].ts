import { jsPDF } from "jspdf";

export async function loader({ params }) {
  const text = params.id

  const pdf = new jsPDF();
  pdf.text(text, 10, 10);
  pdf.save(`${text}.pdf`);

  const file = await pdf.output();

  return new Response(file, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}