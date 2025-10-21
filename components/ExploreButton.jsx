// components/ExploreButton.jsx
"use client"; // 👈 This makes it a Client Component

export default function ExploreButton() {
  return (
    <a
      href="/shop"
      style={{
        display: "inline-block",
        backgroundColor: "#e91e63",
        color: "#fff",
        padding: "14px 40px",
        borderRadius: "50px",
        fontWeight: "500",
        textDecoration: "none",
        transition: "0.3s",
      }}
      // These event handlers are now safe inside a Client Component
      onMouseOver={(e) => (e.target.style.backgroundColor = "#c2185b")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
    >
      Explore Our Collection
    </a>
  );
}