"use client";
import React from "react";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props) {
  console.log(params);

  return (
    <div className="brake-all">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
      incidunt placeat. Reprehenderit ex iure, nobis dolore est fugit magnam
      repudiandae maiores illo molestiae numquam eaque atque consectetur
      asperiores assumenda optio!
    </div>
  );
}
