import React from "react";
import { View, Text, StyleSheet, Font } from "@react-pdf/renderer";

const Footer = () => {
    
    Font.register({
        family: 'Lato Bold',
        src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
      });

  const styles = StyleSheet.create({
    footer: {
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      lineHeight: "1.5px",
      marginTop: "30px",
      marginBottom: "30px",
      paddingLeft: "30px",
      paddingRight: "30px"
    },
    line: {
      border: "0.5px solid black",
      marginBottom: "2px"
    },
  });

  return (
    <>
      <View style={styles.footer}>
        <hr style={styles.line} />

        <Text style={{ fontSize: 8, fontFamily: "Lato Bold" }}>
          QED42 Engineering Pvt. Ltd.
        </Text>
        <Text style={{ fontSize: 8 }}>
          <Text style={{ fontFamily: "Lato Bold" }}>Pune</Text> : 203, Second Floor
          B-Wing Nyati Tech Park Wadgaon Sheri, Pune - 411 014
        </Text>
        <Text style={{ fontSize: 8 }}>
          <Text style={{ fontFamily: "Lato Bold" }}>Delhi</Text>: Plot no 7, Third
          Floor, Lane no 2. Kehar Singh Estate, Saidulajab, Saket, New Delhi -
          110030
        </Text>
      </View>
    </>
  );
};

export default Footer;
