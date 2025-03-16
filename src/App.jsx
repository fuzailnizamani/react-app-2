import Header from "./Components/header";
import Enter from "./Components/Enter";
import data from "../data.js";

export default function App () {
  const enterCompents = data.map((entry) => {
    return (
    <Enter 
    key={entry.id}
    {...entry}
    />
  );
  });
  return(
    <>
        <Header />
        <main className="container">
          {enterCompents}
        </main>
    </>
  )
}