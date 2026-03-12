import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explorer</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollArea}>
                
                <View style={styles.searchContainer}>
                    <Ionicons name="location-outline" size={24} color="black" style={styles.searchIcon} />
                    <TextInput 
                        style={styles.searchInput} 
                        placeholder="Search for meals or area" 
                        placeholderTextColor="#999"
                    />
                    <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Categories</Text>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name="filter" size={16} color="#f39c12" />
                        <Text style={styles.filterText}>Filter</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591' }} style={styles.catImage} />
                        <Text style={styles.catText}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd' }} style={styles.catImage} />
                        <Text style={styles.catText}>Burgers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1600891964092-4316c288032e' }} style={styles.catImage} />
                        <Text style={styles.catText}>Steak</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* --- POPULAR ITEMS 1 --- */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Items</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <TouchableOpacity style={styles.foodCard}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c' }} style={styles.foodImage} />
                        <View style={styles.foodInfo}>
                            <Text style={styles.foodName}>Food 1</Text>
                            <Text style={styles.foodAuthor}>By Viet Nam</Text>
                            <Text style={styles.foodPrice}>1$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.foodCard}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' }} style={styles.foodImage} />
                        <View style={styles.foodInfo}>
                            <Text style={styles.foodName}>Food 2</Text>
                            <Text style={styles.foodAuthor}>By US</Text>
                            <Text style={styles.foodPrice}>3$</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                 <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Items</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <TouchableOpacity style={styles.foodCard}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601' }} style={styles.foodImage} />
                        <View style={styles.foodInfo}>
                            <Text style={styles.foodName}>Food 3</Text>
                            <Text style={styles.foodAuthor}>By Italy</Text>
                            <Text style={styles.foodPrice}>5$</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodCard}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624' }} style={styles.foodImage} />
                        <View style={styles.foodInfo}>
                            <Text style={styles.foodName}>Bún Đậu</Text>
                            <Text style={styles.foodAuthor}>By Viet Nam</Text>
                            <Text style={styles.foodPrice}>2$</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <View style={{ height: 50 }} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    scrollArea: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, 
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    filterBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        color: '#f39c12',
        marginLeft: 5,
        fontWeight: '600',
    },
    viewAllText: {
        color: '#f39c12',
        fontWeight: '600',
    },
    horizontalScroll: {
        paddingLeft: 20,
        marginBottom: 20,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    catImage: {
        width: 80,
        height: 60,
        borderRadius: 10,
        marginBottom: 5,
    },
    catText: {
        fontWeight: '600',
        color: '#444',
    },
    foodCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        marginRight: 15,
        width: 250,
        // Bóng đổ cho thẻ
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    foodImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    foodInfo: {
        marginLeft: 15,
        justifyContent: 'center',
        flex: 1,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    foodAuthor: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
    },
    foodPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    }
});