import React, {useEffect} from 'react'

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").classList.remove("visible");
    }, 500);
  }, []);
  return <></>;
}

export default App
