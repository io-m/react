import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "./logo.png"
const styles = StyleSheet.create({
    section: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      flexGrow: 1,
      fontSize: "12px"
    },
    firstRow: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: "3px",
      marginRight: "30px",
      marginLeft: "30px",
      justifyContent: "space-evenly"
    },
    secondRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-evenly",
      marginRight: 25,
      marginLeft: 50,
      width: "84%",
      fontSize: 14,
      po: {
        flex: 1.5,
        paddingTop: 5,
        width: "40%",
        borderTop: '1px solid black',
        fontSize: 11
      },
      faktura: {
        flex: 0.57,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 10,
        borderTop: '1px solid black',
        fontSize: 9
      }
    },
    img: {
      maxWidth: 100,
      maxHeight: 100,
      marginRight: 30,
      border: '1px solid black'
    },
  });

  const Header = ({ data }) => {
    let cvr = data.user.profile.companyId
    let numOfSides = Math.ceil(data.orderLine.length / 8)
    return (
      <View fixed>
          <View style={{ marginHorizontal: 'auto', paddingBottom: 10}} >
              <Text > 
                  Råhandel ApS
              </Text> 
          </View>
          <View style={styles.firstRow} >      
              <View style={styles.section} >
                <Text wrap={true}>{ data.billingCompany } - { data.handle } </Text>
                <Text>{ data.billingAddress }</Text>
                <Text style={{marginBottom: "10px"}}> { data.billingPostCode } { data.billingCity } </Text>
                <Text>CVR-nr.{cvr}</Text>
              </View>
              <View style={styles.section}>
                <Text wrap={true}>LeveringsAdresse:</Text>
                <Text>{data.shippingCompany}</Text>
                <Text style={{marginBottom: "10px"}}>{data.shippingAddress}</Text>
                <Text>{data.shippingPostCode} {data.shippingCity}</Text>
                <View render={() => (
                    data.enterprise !== null && data.user.enterprise.chain === 'Coop' && 
                    (
                      <Text style={{fontSize: 12}}>
                        Kardex: {data.user.customerInfo.enterpriseId}
                      </Text>
                    ) 
                )} />
                <Text>Plant-ID: {data.user.customerInfo.plantId}</Text>
                <Text>Att: {data.user.profile.contact}</Text>
              </View>
              <Image src={logo} style={styles.img} fixed={true} />
          </View>
          <Text style = {{ paddingTop: 10, marginLeft: "auto", marginRight: "80px", fontSize: 14}}>FØLGESEDDEL</Text>
          <View style={styles.secondRow}>
            <View style={styles.secondRow.po}>
              <Text style={{fontWeight: "bold"}} >
                PO: here comes po num
              </Text>
              <Text>
              {data.shippingComment}
              </Text>
              <Text>
                Forventes leveret:  {data.shippingDate}
              </Text>
            </View>
            
            <View style={styles.secondRow.faktura}>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text style={{maxWidth: "70px", flex: 1}}>Ordrenr.</Text> 
                <Text style={{maxWidth: "10px", flex: 1}}> ...... </Text>
                <Text style={{maxWidth: "70px", flex: 1}}> {data.handle} </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text style={{maxWidth: "70px", flex: 1}}>Leveringsdato</Text> 
                <Text style={{maxWidth: "10px", flex: 1}}> ...... </Text>
                <Text style={{maxWidth: "70px", flex: 1}}>{data.shippingDate}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text style={{maxWidth: "70px", flex: 1}}>Kundenr.</Text>
                <Text style={{maxWidth: "10px", flex: 1}}> ...... </Text>
                <Text style={{maxWidth: "70px", flex: 1}}>{data.user.handle}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text style={{maxWidth: "70px", flex: 1}}>Side</Text>
                <Text style={{maxWidth: "10px", flex: 1}}> ...... </Text>
                <Text style={{maxWidth: "70px", flex: 1}} render={({ pageNumber, totalPages }) => (
                      `${pageNumber} af ${totalPages}`
                )} />
              </View>
            </View>
          </View>
      </View>
    )
  }
   


  export default Header