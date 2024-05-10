import React from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  children: any;
};

export default function EditorText({ children, className, ...props }: Props) {
  return (
    <p
      {...props}
      suppressContentEditableWarning={true}
      className={`${className} editable-style`}
      contentEditable="true">
      {children}
    </p>
  );
}
