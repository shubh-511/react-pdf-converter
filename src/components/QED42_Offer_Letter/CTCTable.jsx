import {
  DataTableCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from "@david.kucsai/react-pdf-table";
import { StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  tableHeader: {
    textAlign: "center",
    fontSize: "10px",
    backgroundColor: "#C0C0C0",
  },

  tableCell: {
    textAlign: "center",
    fontSize: "10px",
  },
});

const CTCTable = ({ dataBreakups }) => {
  const totalAAnnual = () => {
    const annualATotal = dataBreakups["Annual Basic"] + dataBreakups["Annual HRA"] + dataBreakups["Annual Stat Bon."] + dataBreakups["Annual Spec. All"];
    return annualATotal;
  }

  const totalAMonthly = () => {
    const monthlyATotal = dataBreakups["Monthly Basic"] + dataBreakups["Monthly HRA"] + dataBreakups["Monthly Stat Bon."] + dataBreakups["Monthly Spec. All"];
    return monthlyATotal;
  }

  const totalBMonthly = () => {
    const monthlyBTotal = dataBreakups["Monthly EMPLOYER'S PF"] + dataBreakups["Monthly Gratuity"];
    return monthlyBTotal;
  }

  const totalBYearly = () => {
    const yearlyBTotal = dataBreakups["Annual EMPLOYER'S PF"] + dataBreakups["Annual Gratuity"];
    return yearlyBTotal;
  }
  
  return (
    <>
      <Table
        data={[
          { particular: "Basic Salary", annual: dataBreakups["Annual Basic"], monthly: dataBreakups["Monthly Basic"] },
          { particular: "HRA", annual: dataBreakups["Annual HRA"], monthly: dataBreakups["Monthly HRA"] },
          { particular: "Statutory Bonus", annual: dataBreakups["Annual Stat Bon."], monthly: dataBreakups["Monthly Stat Bon."] },
          {
            particular: "Special Allowance",
            annual: dataBreakups["Annual Spec. All"],
            monthly: dataBreakups["Monthly Spec. All"],
          },
          { particular: "Total A", annual: totalAAnnual(), monthly: totalAMonthly() },
        ]}
      >
        <TableHeader>
          <TableCell style={styles.tableHeader}>Particulars</TableCell>
          <TableCell style={styles.tableHeader}>Annual</TableCell>
          <TableCell style={styles.tableHeader}>Monthly</TableCell>
        </TableHeader>
        <TableBody>
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.particular}
          />
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.annual}
          />
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.monthly}
          />
        </TableBody>
      </Table>
      <Table
        data={[
          {
            particular: "PF Employer's Contribution",
            annual: dataBreakups["Annual EMPLOYER'S PF"],
            monthly: dataBreakups["Monthly EMPLOYER'S PF"],
          },
          {
            particular: "Gratuity",
            annual: dataBreakups["Annual Gratuity"],
            monthly: dataBreakups["Monthly Gratuity"],
          },
          {
            particular: "Total B",
            annual: totalBYearly(),
            monthly: totalBMonthly(),
          },
        ]}
      >
        <TableHeader>
          <TableCell style={styles.tableHeader}>Retirals(B)</TableCell>
        </TableHeader>
        <TableBody>
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.particular}
          />
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.annual}
          />
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.monthly}
          />
        </TableBody>
      </Table>
      <Table
        data={[
          { particular: "Annual Variable", annual: dataBreakups["Annual Variable"], monthly: dataBreakups["Monthly Variable"] },
          { particular: "Total C", annual: dataBreakups["Annual Variable"], monthly: dataBreakups["Monthly Variable"] },
        ]}
      >
        <TableHeader>
          <TableCell style={styles.tableHeader}>
            Variable Component (C)
          </TableCell>
          </TableHeader>
          <TableBody>
            <DataTableCell
              style={styles.tableCell}
              getContent={(r) => r.particular}
            />
            <DataTableCell
              style={styles.tableCell}
              getContent={(r) => r.annual}
            />
            <DataTableCell
              style={styles.tableCell}
              getContent={(r) => r.monthly}
            />
          </TableBody>
      </Table>
      <Table
        data={[
          { particular: "Medical Insurance", annual: dataBreakups["Annual Medical Insurance"], monthly: dataBreakups["Monthly Medical Insurance"] },
          { particular: "Total D", annual: dataBreakups["Annual Medical Insurance"], monthly: dataBreakups["Monthly Medical Insurance"] },
        ]}
      >
        <TableHeader>
          <TableCell style={styles.tableHeader}>
            Non Cash Component (D)
          </TableCell>
        </TableHeader>
        <TableBody>
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.particular}
          />
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.annual}
          />
          <DataTableCell
            style={styles.tableCell}
            getContent={(r) => r.monthly}
          />
        </TableBody>
      </Table>
    </>
  );
};

export default CTCTable;
