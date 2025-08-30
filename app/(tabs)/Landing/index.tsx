import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { setNewUser } from "@/services/Storage";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LandingScreen() {
  const router = useRouter();

  const handleToHome = async () => {
    await setNewUser();
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <Logo size={{ w: 254, h: 254 }} />
      <View style={styles.secContainer}>
        <View style={styles.contantContainer}>
          <View style={styles.textsContiner}>
            <Text style={styles.mainTxt}>Feel the beat</Text>
            <Text numberOfLines={2} style={styles.secTxt}>
              Emmerse yourself into the world of music today
            </Text>
          </View>
          <View style={styles.btnContiner}>
            <TouchableOpacity onPress={handleToHome}>
              <CustomButton lable="Continue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(150),
  },
  secContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(50),
  },
  contantContainer: {
    alignItems: "center",
  },
  textsContiner: {
    gap: rh(16),
    alignItems: "center",
  },
  mainTxt: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: rf(24),
    color: Colors.textPrimary,
  },
  secTxt: {
    fontFamily: Fonts.OpenSansSemiBold,
    fontSize: rf(14),
    color: Colors.textSec,
    width: rw(200),
    textAlign: "center",
  },
  btnContiner: {
    marginTop: rh(40),
  },
});
