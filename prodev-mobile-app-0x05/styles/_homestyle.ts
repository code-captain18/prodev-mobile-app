import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchGroup: {
        backgroundColor: "#20996fff",
        paddingHorizontal: 10,
        paddingTop: 60,
        paddingVertical: 16,
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    searchControl: {
        fontSize: 12,
        color: "#999",
        marginTop: 4,
    },
    searchButton: {
        backgroundColor: "#FFA800",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    filterGroup: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 12,
        gap: 10,
    },
    filterContainer: {
        alignItems: "center",
        gap: 8,
        width: 80,
        justifyContent: "center",
    },
    listingContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    paginationContainer: {
        alignItems: "center",
        paddingVertical: 24,
    },
    showMoreButton: {
        backgroundColor: "#222020ff",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 20,
    },
    showMoreButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "300",
    },
});

export { styles };

