import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  property: {
    fontWeight: "ultrabold",
    fontSize: 10
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  }
});

const SemiHeader = () => {
  return (
    <>
    <View style={styles.container}>
      <View>
        <Text style={styles.property}>Nikhil Taneja</Text>
        <Text style={styles.property}>Ahmedabad</Text>
      </View>
      <View>
        <Text style={styles.property}>Date: 20th June,2022</Text>
      </View>
    </View>
  </>
  );
};

export default SemiHeader;
