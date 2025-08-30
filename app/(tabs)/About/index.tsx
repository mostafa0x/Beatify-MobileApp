import AppBar from "@/components/AppBar";
import Ellipse from "@/components/Ellipse";
import Logo from "@/components/Logo";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { Facebook, Github, Instagram, Mail } from "lucide-react-native";

import React from "react";
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Ellipse onLeft={false} x={0} y={0} type={4} />
      <AppBar />
      <View style={styles.contentContainer}>
        <Logo size={{ w: 254, h: 254 }} />
        <Text style={styles.description}>
          This app lets you discover and play your favorite songs, playlists,
          and search for any track just like Spotify. Enjoy smooth music
          streaming with a beautiful and easy-to-use interface.
        </Text>
        <Text style={styles.name}>Mostafa Ahmed</Text>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => Linking.openURL("mailto:mostafaahmedxdev@gmail.com")}
        >
          <Mail color={Colors.textPrimary} size={rf(24)} />
          <Text style={styles.link}>Contact Me</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version: 1.0.0</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.facebook.com/mostafa.ahmad.954571")
            }
          >
            <Facebook color={Colors.textPrimary} size={rf(36)} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/mostafa_0x/")
            }
          >
            <Instagram color={Colors.textPrimary} size={rf(36)} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/mostafa0x")}
          >
            <Github color={Colors.textPrimary} size={rf(36)} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: rw(24),
    paddingTop: rh(30),
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: rh(16),
    marginTop: rh(10),
  },
  name: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.textPrimary,
    fontSize: rf(24),
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.textPrimary,
    fontSize: rf(32),
  },
  btnContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: rw(10),
  },
  description: {
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textSec,
    fontSize: rf(16),
    textAlign: "center",
    marginHorizontal: rw(10),
    lineHeight: rh(24),
    paddingBottom: rh(50),
  },
  link: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(16),
    color: Colors.textPrimary,
    textDecorationLine: "underline",
  },
  version: {
    fontSize: rf(14),
    color: Colors.textPrimary,
    marginTop: rh(10),
    width: "100%",
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rw(30),
    marginTop: rh(40),
  },
});
