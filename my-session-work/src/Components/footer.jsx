import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

class Footer extends React.Component{
    render() {
    return (
        <Box>
            <h1 style={{ color: "green",
                textAlign: "center",
                marginTop: "-50px" }}>
                WildZoneCompany
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>  <FooterLink href="#">About Us</FooterLink></Heading>
                    </Column>
                    <Column>
                        <Heading>  <FooterLink href="#">Services</FooterLink></Heading>

                    </Column>
                    <Column>
                        <Heading><FooterLink href="#">Contact Us</FooterLink></Heading>
                    </Column>
                </Row>
            </Container>
        </Box>
    ) };
};
export default Footer;