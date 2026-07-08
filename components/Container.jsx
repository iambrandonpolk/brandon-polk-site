// Consistent max-width + horizontal padding wrapper used by every section.
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
