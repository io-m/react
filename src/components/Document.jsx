import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent';
import { response } from '../data';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: "auto",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 25,
  }
});

const data = response.data.orders
// console.log("DATA:: ", data.orderLine.length)
const PDFDocument = (
  <Document title="FØLGESEDDEL" author="Råhandel">
    <Page size="A4" style={styles.page} wrap={false} >
      <Header data={data}/>
      <MainContent data={data}/>
      <Footer />
    </Page>
  </Document>
);

export default PDFDocument