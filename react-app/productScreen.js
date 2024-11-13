import react from "react";
import{View, Text, Flatlist, Stylesheet} from 'react-native'
import data from './data/countries.json'

class productScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        this.setState({
            products: data
        })
    }

    render(){
        return(
            <View>
                 <Text style={Stylesheet.screenTitle}>ProductsScreen</Text>
                <Flatlist data={this.state.products}
                keyExtractor={couproductsntries => products.id}
                renderItem={({item}) => (
                  <View style={styles.cardWrapper}>
                    <Text>Product Name: {item.name}</Text>
                    <Text>Product Name: {item.product}</Text>
                    <Text>Product Description: {item.description}</Text>
                  </View>
                  )}
               > </Flatlist>
            </View>
        )

    
    }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default productsScreen;