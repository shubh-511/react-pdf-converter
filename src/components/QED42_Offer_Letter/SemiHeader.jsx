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

const SemiHeader = ({ SemiHeaderData }) => {
  const date = new Date(SemiHeaderData["Date"]);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return (
    <>
    <View style={styles.container}>
      <View>
        <Text style={styles.property}>{SemiHeaderData["Candidate Full Name"]}</Text>
        <Text style={styles.property}>{SemiHeaderData["Candidate City"]}</Text>
      </View>
      <View>
        <Text style={styles.property}>Date: {date.toLocaleDateString('en-US', options)}</Text>
      </View>
    </View>
  </>
  );
};

export default SemiHeader;
