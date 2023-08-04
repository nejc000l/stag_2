import React from "react";

type Props = {
  params: { id: any };
};

export default function page({ params }: Props) {
  console.log(params);
  return <div> this is my name helo </div>;
}
