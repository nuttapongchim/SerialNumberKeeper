import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Icon, Text, Card, CardItem, Body, Right } from 'native-base';

export class KeepSerialScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Keep Serial Number',
    })

    constructor(props) {
        super(props)

        this.state = {
            customerId: '',
            product: [],
            productCounter: 1
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        this.setState({ customerId: navigation.getParam('customerId') })
        this.addProduct()
    }

    addProduct = () => {

        let product = [...this.state.product]

        let productList = {
            productPosition: this.state.productCounter,
            productId: `cc${this.state.customerId}${this.state.productCounter}`,
            productName: '',
            serialNumber: []
        }

        product.push(productList)

        this.setState(previousState => (
            {
                productCounter: previousState.productCounter + 1,
                product
            }
        ))

        console.log(`add after ${JSON.stringify(this.state.product)}`)
    }

    removeProduct = () => {

        let product = [...this.state.product]
        product.pop()

        this.setState(previousState => (
            {
                productCounter: previousState.productCounter - 1,
                product
            }
        ))
    }

    addSerial = (index) => {
        let i = index - 1
        let product = [...this.state.product]
        product[i].serialNumber.push('')
        this.setState({ product })
        console.log(`${JSON.stringify(product[i].serialNumber)}`)
    }

    removeSerial = (index) => {
        let i = index - 1
        let product = [...this.state.product]
        product[i].serialNumber.pop()
        this.setState({ product })
    }

    render() {

        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Icon active name='person' />
                            <Input placeholder='Customer ID' value={this.state.customerId} />
                        </Item>
                        <Item>
                            <Icon active name='reorder' />
                            <Input placeholder='Order' />
                        </Item>
                        <Button block info onPress={() => this.addProduct()}>
                            <Text>Add Product</Text>
                        </Button>

                        {
                            this.state.product.length ? (
                                this.state.product.map((data, i) =>
                                    <Card key={i}>
                                        <CardItem header>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Product {data.productPosition}</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <Item>
                                                    <Icon active name='cart' />
                                                    <Input placeholder='Product Name' />
                                                    <Button onPress={() => this.addSerial(data.productPosition)} transparent>
                                                        <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>Add Serial Number</Text>
                                                    </Button>
                                                </Item>

                                                {
                                                    data.serialNumber.map((serial, i) =>
                                                        <Item key={i}>
                                                            <Icon active name='keypad' />
                                                            <Input placeholder='Serial Number' value={serial} />
                                                        </Item>
                                                    )
                                                }

                                                {
                                                    this.state.product[data.productPosition - 1].serialNumber.length >= 1 &&
                                                    <Right>
                                                        <Button onPress={() => this.removeSerial(data.productPosition)} transparent>
                                                            <Text style={{ textAlign: 'center', textDecorationLine: 'underline', color: '#ea3e2599' }}>Remove Serial Number</Text>
                                                        </Button>
                                                    </Right>
                                                }
                                            </Body>
                                        </CardItem>
                                    </Card>
                                )
                            ) : null
                        }

                        {
                            this.state.product.length != 1 &&
                            <Right>
                                <Button onPress={() => this.removeProduct()} transparent>
                                    <Text style={{ textAlign: 'center', textDecorationLine: 'underline', color: '#ea3e2599' }}>Remove Product</Text>
                                </Button>
                            </Right>
                        }

                    </Form>
                    <Button block success>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container >
        )
    }
}

export default KeepSerialScreen
