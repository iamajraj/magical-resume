import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  children: any;
};

export default function EditorText({ children, ...props }: Props) {
  return <p {...props}>{children}</p>;
}
