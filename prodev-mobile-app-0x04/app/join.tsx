import { styles } from "@/styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.navGroup}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={25} />
                    </TouchableOpacity>
                    <Image source={require('@/assets/images/logo.png')} />
                </View>
                <Text style={styles.largeText}>Create Your</Text>
                <Text style={styles.largeText}>Account</Text>
                <Text style={styles.smallText}>
                    Enter your details to create a new account.
                </Text>

                <View style={styles.formGroup}>
                    <View>
                        <Text style={styles.placeholderText}>Email</Text>
                        <TextInput keyboardType="email-address" style={styles.inputField} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.placeholderText}>Password</Text>
                        <View style={styles.passwordGroup}>
                            <TextInput style={{ flex: 1 }} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.placeholderText}>Password</Text>
                        <View style={styles.passwordGroup}>
                            <TextInput style={{ flex: 1 }} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>

                <View style={styles.dividerGroup}>
                    <View
                        style={styles.divider}
                    ></View>
                    <Text
                        style={styles.dividerText}
                    >
                        OR
                    </Text>
                    <View
                        style={styles.divider}
                    ></View>
                </View>

                <View style={styles.socialMediaButtonGroup}>
                    <TouchableOpacity style={styles.socialMediaButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <Image source={require("@/assets/images/google.png")} />
                            <Text style={styles.socialMediaButtonText}>
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialMediaButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <Image source={require("@/assets/images/facebook.png")} />
                            <Text style={styles.socialMediaButtonText}>
                                Continue with Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.subTextGroup}>
                    <Text style={styles.subText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/signin')}>
                        <Text style={styles.subTextJoin}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}