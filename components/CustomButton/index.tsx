import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function CustomButton({ lable }: { lable: string }) {
  return (
    <LinearGradient
      colors={["#842ED8", "#DB28A9", "#9D1DCA"]}
      locations={[0.31, 0.59, 1]}
    >
      <Button style={styles.btnContaier} labelStyle={styles.btnLabel}>
        {lable}
      </Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btnContaier: {},
  btnLabel: {},
});

export default memo(CustomButton);
