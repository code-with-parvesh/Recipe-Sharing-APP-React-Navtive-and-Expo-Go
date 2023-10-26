import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16, }}>
			<View style={{ marginTop: 30 }}>
			{/* render header */}
			<Header headerText={"Hi, Parvesh "} headerIcon={"bell-o"} />
			</View>
			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your fav recipe"} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
