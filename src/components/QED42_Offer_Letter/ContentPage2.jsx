import { View, Text, Font } from "@react-pdf/renderer";
import React from "react";

const ContentPage2 = ({ outlineData }) => {
  Font.register({
    family: "Lato Bold",
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
  });

  const styles = {
    font: {
      fontSize: 11,
    },
    textMargin: {
      marginTop: "20px",
    },
  };

  return (
    <>
      <View style={styles.font}>
        <Text>
          We are confident you will find this new opportunity both challenging
          and rewarding. The following points outline the terms and conditions
          we are proposing.
        </Text>
        <View style={{ marginTop: "7px" }}>
          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>Title</Text>: { outlineData["Title"] }
          </Text>

          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>Salary: </Text>
            INR { outlineData["CTC"] }/- per annum.(Tax Deduction at Source Applicable)
          </Text>

          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>Start date: </Text> { outlineData["DOJ"] }
          </Text>
          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>Hours Of Work: </Text> 9
            hours
          </Text>
          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>
              Reporting Relationship:{" "}
            </Text>{" "}
            { outlineData["Reporting Relationship"] }
          </Text>
          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>Leave Policy: </Text>A
            total of Twenty-one (21) leaves can be taken annually. The leave
            policy is excluding national holidays.
          </Text>

          <Text style={styles.textMargin}>
            <Text style={{ fontFamily: "Lato Bold" }}>Group Benefits: </Text>
            QED42 shall at its expense provide the Employee with the Health Plan
            that is currently in place or as may be in place from time to time
          </Text>

          <Text style={styles.textMargin}>
            Following the initial probationary period of 6(six) months, a
            performance review will be conducted on a quarterly basis to assess
            performance to date, and to clarify or modify this arrangement, as
            the need may arise. On the basis of this review, your services at
            QED42 will be confirmed. This arrangement may be terminated by
            either party upon notice in writing given by either party for two
            (2) months
          </Text>
          <Text style={styles.textMargin}>
            Further Employment Details would be provided with your Letter of
            Appointment. Please bring along the below-listed documents/details
            on your day of joining.
          </Text>
          <Text>a. Date of the Birth proof certificate (Copy of passport/birth certificate / S.S.C) (Two Copies)</Text>
          <Text>b. Original Academic Certificates (all from 10th to Highest)</Text>
          <Text>c. Four passport size photographs (recent)</Text>
        </View>
      </View>
    </>
  );
};

export default ContentPage2;
