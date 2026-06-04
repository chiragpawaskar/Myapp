import React from "react";

const styles = {
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "2rem",
    textAlign: "center",
    color: "rgba(240,240,232,0.5)",
    fontSize: "0.85rem",
  },
  accent: { color: "#c8f547" },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        Built with <span style={styles.accent}>React</span> +{" "}
        <span style={styles.accent}>Node.js</span> · MIT License ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
