export const InlineStyle = () => {
  const containerStyle = {
    border: "solid",
    borderRadius: "20px",
    padding: "8pt",
    margin: "8pt"
  };

  return (
    <div style={containerStyle}>
      <p> - Inline Style - </p>
      <button>FIGHT!</button>
    </div>
  );
};
