import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class HeaderComp extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.header}</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}

const styles = {
    header: {
        backgroundColor: '#13A679'
    }
}

export default HeaderComp;