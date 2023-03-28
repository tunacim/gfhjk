import React from "react";
import { View,FlatList, Text} from "react-native";
import ListCard from "../../Components/ListCard";
import UseFetch from "../../Hooks/UseFetch";

const List=({navigation})=>{
    const handleRecipeSelect=(id)=>{navigation.navigate("Recipe",{id})}
    const url="http://localhost:5070/recipe"
    const {data}=UseFetch(url)
    const renderList=({item})=><ListCard item={item} onPress={()=>handleRecipeSelect(item.name)}></ListCard>
    console.log(data)
    return(
       <View>     
           <FlatList data={data} renderItem={renderList}></FlatList>
        </View>
    )
}
export default List