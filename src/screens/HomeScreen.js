import React, { Component } from 'react'
import { Container, Button, Text, Content, Card, CardItem, Icon, Right, Header, Input, Item } from 'native-base';
import { TouchableOpacity } from 'react-native';

const customerArr = [
    {
        customerId: '0001',
        customerName: 'pawee'
    },
    {
        customerId: '0002',
        customerName: 'chinchain'
    },
    {
        customerId: '0003',
        customerName: 'nice'
    },
    {
        customerId: '0004',
        customerName: 'chim'
    }
]

export class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Serial Number Keeper',
    });

    render() {

        const { navigate } = this.props.navigation

        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Button onPress={() => navigate('AddCustomer')} transparent>
                            <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>Add Customer</Text>
                        </Button>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>

                    {
                        customerArr.map(data =>
                            <TouchableOpacity key={data.customerId} onPress={() => navigate('KeepSerial', { customerId: data.customerId })}>
                                <Card >
                                    <CardItem>
                                        <Icon active name="key" />
                                        <Text>{data.customerName} ( {data.customerId} )</Text>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        )
                    }
                </Content>
            </Container>
        )
    }
}

export default Home
