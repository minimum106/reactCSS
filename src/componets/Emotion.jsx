/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx, css } from "@emotion/react";
import style from "@emotion/styled";

export const Emotion = () => {
  const constainerStyle = css`
    border: solid;
    border-radius: 20px;
    padding: 8pt;
    margin: 8pt;
  `;
  return (
    <div css={constainerStyle}>
      <p> - CSS Modules - </p>
      <button>FIGHT!</button>
    </div>
  );
};
