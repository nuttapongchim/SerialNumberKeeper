import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Icon, Text } from 'native-base';

export class AddCustomerScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Add Customer',
    });

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Icon active name='person' />
                            <Input placeholder='Customer Name' />
                        </Item>
                        <Item>
                            <Icon active name='home' />
                            <Input placeholder='Address' />
                        </Item>
                        <Item>
                            <Input placeholder='Province' />
                        </Item>
                        <Item>
                            <Input placeholder='District' />
                        </Item>
                        <Item>
                            <Input placeholder='Sub District' />
                            <Icon active name='swap' />
                        </Item>
                    </Form>
                    <Button block success>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default AddCustomerScreen
