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

const CTCTable = () => {
  return (
    <>
      <Table
        data={[
          { particular: "Basic Salary", annual: "125003", monthly: "12333" },
          { particular: "HRA", annual: "12344", monthly: "12000" },
          { particular: "Statutory Bonus", annual: "45322", monthly: "2499" },
          {
            particular: "Special Allowance",
            annual: "435673",
            monthly: "26195",
          },
          { particular: "Total A", annual: "345543", monthly: "123456" },
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
            annual: "21230",
            monthly: "-",
          },
          {
            particular: "Gratuity",
            annual: "17316",
            monthly: "-",
          },
          {
            particular: "Total B",
            annual: "23421",
            monthly: "-",
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
          { particular: "Annual Variable", annual: "-", monthly: "-" },
          { particular: "Total C", annual: "-", monthly: "-" },
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
          { particular: "Medical Insurance", annual: "12756", monthly: "-" },
          { particular: "Total D", annual: "12756", monthly: "-" },
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
