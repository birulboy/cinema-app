import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import SearchBarM1 from "../components/SearchBarM1/SerchBarM1";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import SimilarMovie from "../components/ItemCard/SimilarMovie"
import SeriesPage from "./SeriesPage";
import MoviePage from "./TrueMoviePage";
import PeoplePage from "./PeoplePage";



function ItemInfoPage() {
  const { type, id } = useParams();
if (type=="movie"){
  return (
    <MoviePage/>
  );
}else if(type=="person"){
  {console.log(id)}
  return(
    <PeoplePage />
  )
}else if(type=="tv"){
  return(
    <SeriesPage />
  )
}
}

export default ItemInfoPage;
