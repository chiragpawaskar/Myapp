import React from "react";
import { _encatch } from "@encatch/web-sdk";

const styles = {
  btn: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    background: "#c8f547",
    color: "#0d0d0d",
    fontWeight: 700,
    fontSize: "0.875rem",
    padding: "0.65rem 1.25rem",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(200,245,71,0.25)",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
};

function FeedbackButton({ formId = "your-form-id" }) {
  const handleClick = () => {
    _encatch.showForm(formId);
  };

  return (
    <button style={styles.btn} onClick={handleClick}>
      💬 Feedback
    </button>
  );
}

export default FeedbackButton;
