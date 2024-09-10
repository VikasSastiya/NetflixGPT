import Header from "./Header"; // Corrected path
import MainContainer from "./MainContainer"; // Corrected path
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  return (
    <div>
      <Header/>
      <MainContainer title="mern" description="mern"/>
     
      {/*
        MainContainer
           -VideoBackground
           -VideoTitle

           SecondaryContainer
           -MovieList *n
           -cards*n
      */}
    </div>
  );
}

export default Browse