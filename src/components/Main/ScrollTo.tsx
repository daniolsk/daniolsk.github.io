"use client";

const ScrollTo = ({
  target,
  className,
  children,
}: {
  target: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      onClick={() =>
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
      }
      className={className}
    >
      {children}
    </span>
  );
};

export default ScrollTo;
