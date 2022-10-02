export const DeprecationBanner = () => {
  return (
    <div>
      <span
        style={{
          backgroundColor: "rgba(239, 53, 84, 0.9)",
          position: "fixed",
          zIndex: "9999",
          top: "0",
          left: "0",
          width: "100vw",
          height: "2rem",
          fontSize: ".9375rem",
          lineHeight: "2rem",
          fontFamily: "'Open Sans', system-ui",
          color: "white",
        }}
      >Visit the new site at <a style={{textDecoration: "underline"}} href="https://ethany.im">ethany.im</a>.</span>
    </div>
  )
}