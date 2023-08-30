import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

const data = [
  {
    title: "Leto 2017",
    content:
      "V letu 2017 je bilo v Evropi prijavljenih 4.002 pojavov APK pri divjih prašičih in 265 pojavov pri domačih prašičih.",
  },
  {
    title: "Leto 2018",
    content:
      "V letu 2018 je bilo v Evropi prijavljenih 5.429 pojavov APK pri divjih prašičih in 1.465 pojavov pri domačih prašičih.",
  },
  {
    title: "Leto 2019",
    content:
      "V letu 2019 je bilo v Evropi prijavljenih 6.456 pojavov APK pri divjih prašičih in 1.912 pojavov pri domačih prašičih.",
  },
  {
    title: "Leto 2020",
    content:
      "V letu 2020 je bilo v Evropi prijavljenih 11.208 pojavov APK pri divjih prašičih in 1.247 pojavov pri domačih prašičih.",
  },
];

export function Harmonica() {
  return (
    <div className="max-w-md w-full">
      {data.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
