import React from "react"

import styled from "styled-components"

import { responsive, H3 } from "ui"

import VippsCheckout from "./vipps"

import {
  Form,
  Input,
  InputGroup,
  Label,
  PaymentSelector,
  PaymentMethods,
  PaymentButton,
  PaymentMethod,
} from "./styles"

const Outer = styled.div`
  width: 50%;
  padding-right: 50px;
  border-right: 1px solid #dfdfdf;

  ${responsive.xs} {
    width: 100%;
  }
`
const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.2rem;
`
const SectionHeader = styled(H3)`
  font-size: 14px;
  font-weight: 600;
`
class PaymentGateway extends React.Component {
  state = {
    paymentMethod: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  }

  render() {
    const { items, currency } = this.props
    const { paymentMethod, firstName, lastName, email, phone } = this.state

    const personalDetails = {
      firstName,
      lastName,
      email,
      phone,
    }

    return (
      <Outer>
        <Inner>
          <Form noValidate>
            <SectionHeader />
            <Row>
              <InputGroup>
                <Label htmlFor="firstname"> First Name</Label>
                <Input
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  required
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="lastname"> Last Name</Label>
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                  required
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Label htmlFor="email"> Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Label htmlFor="phone"> Phone</Label>
                <Input
                  name="phone"
                  type="phone"
                  placeholder="Personal number"
                  value={phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  required
                />
              </InputGroup>
            </Row>

            <SectionHeader>Choose payment method</SectionHeader>
            <PaymentMethods>
              <PaymentSelector>
                <PaymentButton
                  color="#FFFFFF"
                  type="button"
                  active={paymentMethod === "vipps"}
                  onClick={() => this.setState({ paymentMethod: "vipps" })}
                >
                  <img src="/static/vipps-logo.png" alt="Vipps logo" />
                </PaymentButton>
              </PaymentSelector>
              )}
              {paymentMethod === "vipps" && (
                <PaymentMethod>
                  <VippsCheckout
                    personalDetails={personalDetails}
                    items={items}
                    currency={currency}
                  />
                </PaymentMethod>
              )}
              )}
            </PaymentMethods>
          </Form>
        </Inner>
      </Outer>
    )
  }
}

export default PaymentGateway
