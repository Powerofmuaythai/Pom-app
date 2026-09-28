import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

interface PlaceholderProps {
  aspect?: string;
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  labelPosition?: "center" | "top-left";
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

/**
 * Labelled grey box standing in for photography. Per the design brief, every
 * image area names its own crop so real photos can drop in without layout
 * changes — there is no photography in this handoff.
 */
export function Placeholder({ aspect, className = "", style, label, labelPosition = "center", onClick, children }: PlaceholderProps) {
  return (
    <div
      className={`ph ${className}`}
      style={{ aspectRatio: aspect, ...style }}
      onClick={onClick}
    >
      {label && (
        <span className={labelPosition === "center" ? "ph__label ph__label--center" : "ph__label ph__label--corner"}>
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
