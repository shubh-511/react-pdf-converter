import React from "react";
import { Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  }
})

const Header = () => {
  return (
    <Image style={styles.image} src= "/qed42logo.jpeg" alt="qed42logo" />

  )
}

export default Header

