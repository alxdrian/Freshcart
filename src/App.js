import { css, Global } from "@emotion/react";

const cssGlobal = css`

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&display=swap');

  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
  
  body {
    background-color: #F6F6F9;
    display: flex;
    justify-content: center;
  }

  main {
    display: flex;
    justify-content: center;
    height: 100%;
    min-width: 320px;
    max-width: 1080px;
  }
`;

function App() {
  return (
    <main>
      <Global styles={cssGlobal} />
    </main>
  );
}

export default App;
