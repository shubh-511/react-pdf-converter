import { StyleSheet, Text, View, Font } from "@react-pdf/renderer";
import React from "react";

const Content = () => {

  const styles = StyleSheet.create({
    font: {
      fontSize: 11,
    },
  });

  return (
    <>
      <View>
        <Text style={styles.font}>
          We are incredibly excited to offer you the position of Associate
          Engineer - JavaScript with our Organization. QED42 is a growing open
          source company focused on making its clients successful by executing
          their ideas into beautiful and usable apps, most of our work is in the
          space of publishing, e-commerce, social, and enterprise. We have
          worked with some of the best Fortune 500 companies, promising
          startups, and delivered results to them. Our focus is on web
          application design and development.
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.font}>
          We are a small group of self-motivated individuals who take pride in
          our work and the success of our clients. We are a product of the
          open-source movement and try hard to contribute back to it in all
          possible ways. We firmly believe that contributing back to open source
          is our best bet to stay technically relevant and be stakeholders in
          frameworks we love and use.
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.font}>
          We envision you becoming an integral member of our JavaScript
          department, contributing to the QED42 mission. We invest in our many
          talented QED42 team members and we foresee opportunities for your
          personal and professional growth as a Associate Engineer - JavaScript.
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.font}>
          As a member of QED42, we would ask for your commitment to deliver
          outstanding quality and results that exceed client expectations. In
          addition, we expect your personal accountability in all the products,
          actions, advice, and results that you provide as a representative of
          our organization. In return, we are committed to providing you with
          every opportunity to learn, grow, and stretch to the highest level of
          your ability and potential.
        </Text>
      </View>
    </>
  );
};

export default Content;
