//import mjml2html from '@nerdenough/mjml-ncc-bundle';
//import sgMail from '@sendgrid/mail';
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request';

import QUERY_ORDER_BY_ID from '../_utils/graph/queries/order-by-id.js';
import { ORDER_API_URL, SENDGRID_API_KEY } from '../../config.js';

const formatCurrency = ({ amount, currency }) =>
  new Intl.NumberFormat('nb-NO', { style: 'currency', currency }).format(
    amount
  );

module.exports = async orderId => {
  try {
    const response = await request(
      `${ORDER_API_URL}`,
      print(QUERY_ORDER_BY_ID),
      {
        id: orderId
      }
    );
    const order = response.orders.get;
    const { email } = order.customer.addresses[0];

    if (!email) {
      // Ideally an email address will always be provided, but if not...
      return;
    }

    const { html } = mjml2html(`
    <mjml>
      <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            <h1>Bestillings bekreftelse</h1>
            <p>Takk for din bestilling hos Ørn forlag. Her følger  en kopi av tranasaksjons detaljene dine. </p>
            <p>
              Ordre nr: <strong>#${order.id}</strong>
            </p>
            <p>
              Fornavn: <strong>${order.customer.firstName}</strong><br />
              Etternavn: <strong>${order.customer.lastName}</strong><br />
              Leverings adresse: <strong>${order.customer.address}</strong><br />
              Epost adresse: <strong>${email}</strong>
            </p>
            <p>
              Total: <strong>${formatCurrency({
                amount: order.total.net,
                currency: order.total.currency
              })}</strong>
            </p>
          </mj-text>
          <mj-table>
            <tr style="border-bottom:1px solid #ecedee;text-align:left;">
              <th style="padding: 0 15px 0 0;">Name</th>
              <th style="padding: 0 15px;">Quantity</th>
              <th style="padding: 0 0 0 15px;">Total</th>
            </tr>
            ${order.cart.map(
              item => `<tr>
                <td style="padding: 0 15px 0 0;">${item.name} (${item.sku})</td>
                <td style="padding: 0 15px;">${item.quantity}</td>
                <td style="padding: 0 0 0 15px;">${formatCurrency({
                  amount: item.price.net * item.quantity,
                  currency: item.price.currency
                })}</td>
              </tr>`
            )}
          </mj-table>
        </mj-column>
      </mj-section>
      </mj-body>
    </mjml>
  `);

    if (SENDGRID_API_KEY) {
      sgMail.setApiKey(SENDGRID_API_KEY);
      await sgMail.send({
        to: email,
        from: 'bjorn@ornforlag.no',
        subject: 'Bestillings kvitering | Ørn Forlag',
        html
      });
    }
  } catch (error) {
    Promise.resolve(error.stack);
  }
};
