import PropertyListing from "@/components/PropertyListing";
import { FILTER_ICONS, FILTERS, SAMPLE_DATA } from "@/constants/data";
import { styles } from "@/styles/_homestyle";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchGroup}>
                <View style={styles.searchFormGroup}>
                    <View style={styles.searchControlGroup}>
                        <Text style={styles.searchFormText}>Where to?</Text>
                        <TextInput
                            style={{ ...styles.searchControl, ...styles.searchFormText }}
                            placeholder="Location . Date . Add guest"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <View style={styles.searchButton}>
                        <Feather name="search" size={24} color="white" />
                    </View>
                </View>
            </View>

            <View
                style={{
                    height: 72,
                    backgroundColor: "white",
                }}
            >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.filterGroup}>
                        {FILTERS.map((filter: string, index: number) => {
                            const iconConfig = FILTER_ICONS[filter];
                            const IconComponent = iconConfig.library === "Feather"
                                ? Feather
                                : MaterialCommunityIcons;

                            return (
                                <View style={styles.filterContainer} key={index}>
                                    <IconComponent
                                        name={iconConfig.name as any}
                                        size={24}
                                        color="#666"
                                    />
                                    <Text>{filter}</Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>

            <ScrollView style={styles.listingContainer}>
                <PropertyListing listings={SAMPLE_DATA} />
                <View style={styles.paginationContainer}>
                    <TouchableHighlight style={styles.showMoreButton}>
                        <Text style={styles.showMoreButtonText}>Show more</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;