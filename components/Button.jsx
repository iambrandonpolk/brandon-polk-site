// Reusable button / link. Renders an <a> so it works for in-page anchors
// and external links. Primary is a quiet solid; secondary is a bare text link
// with an animated underline — restraint over noise.
export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "group inline-flex items-center gap-2 text-sm font-medium transition-all duration-500 ease-calm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]";

  const variants = {
    // Teal is the primary brand action.
    primary:
      "justify-center rounded-full bg-[var(--brand)] px-7 py-3.5 text-white shadow-sm shadow-brand/20 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]",
    quiet: "text-[var(--text-muted)] hover:text-[var(--text)]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
