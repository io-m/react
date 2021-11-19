import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 'auto',
        fontSize: 9,
        paddingLeft: 5,
        paddingBottom: 5,
        maxWidth: 120,
        height: 'auto'
    },
    tableHeading: {
        display: 'flex',
        flexDirection: 'row',
        width: 'auto', 
        justifyContent: 'space-between',
        marginRight: 28,
        marginLeft: 28,
        marginTop: 1,
        fontSize: 10,
        paddingVertical: 2,
    },
    tableHead: {
        paddingVertical: 3,
        marginBottom: 10,
        paddingLeft: 20,
        height: 'auto',
        width: '90px',
        vare: {
            paddingVertical: 3,
            marginBottom: 10,
            height: 'auto',
            width: '120px',
        },
        vareNum: {
            paddingVertical: 3,
            marginBottom: 10,
            height: 'auto',
            width: '30px',
        },
        antal: {
            paddingVertical: 3,
            marginBottom: 10,
            height: 'auto',
            width: '30px',
        },
        beskrivelse: {
            paddingVertical: 3,
            paddingRight: 10,
            marginBottom: 10,
            height: 'auto',
            width: '70px',
        }
    },
    tableHeadPrice: {
        borderBottom: '1px solid black',
        paddingBottom: 2,
        marginBottom: 10,
        height: 'auto',
        width: '30px'
    },
    textFirst: {
        height: '40px',
        paddingLeft: 20
    },
    text: {
        height: '40px',
    },
    textVare: {
        height: '40px',
        width: '120px'
    },
    tableFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
        fontSize: 10,
    }
})

const MainContent = ({ data }) => {
    return (
        <>
            <View style={{marginHorizontal: 50, marginTop: 25, marginBottom: 15, borderBottom: '1px solid black'}} fixed>
                <Text></Text>
            </View>
            <View style={styles.tableHeading}>
                <View style={styles.main} >
                    <Text style={styles.tableHead} fixed>
                        Kolli-EAN
                    </Text>
                    {data.orderLine.map(line => (
                        <Text style={styles.textFirst}>
                            {line.bulkGln}
                        </Text>
                    ))}
                </View>
                <View style={styles.main}>
                    <Text style={styles.tableHead.vareNum} fixed>
                        Varenr.
                    </Text>
                    {data.orderLine.map(line => (
                        <Text style={styles.text}>
                            {line.product.handle}
                        </Text>
                    ))}
                </View>
                <View style={styles.main} >
                    <Text style={styles.tableHead.vare} fixed>
                        Vare
                    </Text>
                    {data.orderLine.map(line => (
                        <Text style={styles.textVare}>
                            <Text style={{fontSize: 10}}>
                                {line.title}
                            </Text> fra 
                            <Text style={{fontSize: 10}}>
                                {line.product.user.name}
                            </Text>
                            {line.organic ? " - (OKØ)" : null}
                        </Text>
                    ))}
                </View>
                <View style={styles.main}>
                    <Text style={styles.tableHead.antal} fixed>
                        Antal
                    </Text>
                    {data.orderLine.map(line => (
                        <Text style={styles.text}>
                            <Text style={{fontSize: 10}}>
                                {line.quantity}
                            </Text>
                        </Text>
                    ))}
                </View>
                <View style={styles.main}>
                    <Text style={styles.tableHead.beskrivelse} fixed>
                        Beskrivelse
                    </Text>
                    {data.orderLine.map(line => (
                        <Text style={styles.text}>
                            <Text style={{fontSize: 10}}>
                                {line.bulkSize} x {line.unitSize} {line.unit}
                            </Text>
                        </Text>
                    ))}
                </View>
            </View>        
        </>
    )
}

export default MainContent
