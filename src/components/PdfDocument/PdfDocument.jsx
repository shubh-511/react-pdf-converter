import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import Header from "../QED42_Offer_Letter/Header";
import SemiHeader from "../QED42_Offer_Letter/SemiHeader";
import Content from "../QED42_Offer_Letter/Content";
import Footer from "../QED42_Offer_Letter/Footer";
import ContentPage2 from "../QED42_Offer_Letter/ContentPage2";
import CTCTable from "../QED42_Offer_Letter/CTCTable";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

async function pause(msec) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, msec || 1000);
  });
}
const MyDoc =  ({ data }) => {
  pdf(
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />

        <View>
          <SemiHeader SemiHeaderData={data} />
          <Text
            style={{
              fontSize: "14px",
              textAlign: "center",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            Letter Of Offer Of Employment - {data["Title"]}
          </Text>
          <Text style={{ fontSize: "12px" }}>Dear {data["Candidate Full Name"]},</Text>
        </View>
        <View
          style={{
            marginTop: "20px",
            wordSpacing: "10px",
            lineHeight: "1.5px",
            fontWeight: "light",
          }}
        >
          <Content designation={data["Title"]} department={data["Department"]} />
        </View>
        <Footer />
      </Page>
      <Page size="A4" style={styles.page}>
        <Header />
        <View
          style={{
            marginTop: "20px",  
            wordSpacing: "10px",
            lineHeight: "1.5px",
            fontWeight: "light",
          }}
        >
          <ContentPage2 outlineData={data} />
        </View>
        <Footer />
      </Page>
      <Page size="A4" style={styles.page}>
        <Header />
      <View
          style={{
            marginTop: "20px",
            wordSpacing: "10px",
            lineHeight: "1.5px",
            fontWeight: "light",
          }}
        >
          <CTCTable dataBreakups={data} />
        </View>
        <Footer />
      </Page>
    </Document>
  )
    .toBlob()
    .then(async (res) => {
      saveAs(res, data["Candidate Full Name"]);
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const PdfDocument = ({ data }) =>
  data.map((e, idx) => <MyDoc key={idx} data={e} />);
 
export default PdfDocument;
