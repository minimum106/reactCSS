export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p> - StyledJsx Modules - </p>
        <button>FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid;
          border-radius: 20px;
          padding: 8pt;
          margin: 8pt;
        }
      `}</style>
    </>
  );
};
