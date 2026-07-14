import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SibApiV3Sdk from 'sib-api-v3-sdk';

@Injectable()
export class EmailService {
  private apiInstance: SibApiV3Sdk.TransactionalEmailsApi;

  constructor(private configService: ConfigService) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = this.configService.get<string>('BREVO_API_KEY');
    
    if (apiKey) {
      defaultClient.authentications['api-key'].apiKey = apiKey;
      this.apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    }
  }

  async sendEmail(to: string, subject: string, htmlContent: string, senderName?: string, senderEmail?: string) {
    if (!this.apiInstance) {
      console.warn('Brevo API not configured. Email sending skipped.');
      return;
    }

    try {
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      
      sendSmtpEmail.to = [{ email: to }];
      sendSmtpEmail.subject = subject;
      sendSmtpEmail.htmlContent = htmlContent;
      sendSmtpEmail.sender = {
        name: senderName || 'Minim Global Services',
        email: senderEmail || this.configService.get<string>('BREVO_SENDER_EMAIL') || 'info@minimglobal.com',
      };

      const data = await this.apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('Email sent successfully:', data);
      return data;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  async sendContactNotification(contactData: any) {
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    `;

    return this.sendEmail(
      this.configService.get<string>('CONTACT_EMAIL') || 'info@minimglobal.com',
      'New Contact Form Submission',
      htmlContent
    );
  }

  async sendOrderNotification(orderData: any, type: 'food' | 'clothing') {
    const htmlContent = `
      <h2>New ${type === 'food' ? 'Food' : 'Clothing'} Order</h2>
      <p><strong>Name:</strong> ${orderData.name}</p>
      <p><strong>Email:</strong> ${orderData.email}</p>
      <p><strong>Phone:</strong> ${orderData.phone}</p>
      <p><strong>Address:</strong> ${orderData.address}</p>
      <p><strong>Items:</strong></p>
      <p>${orderData.items}</p>
      ${orderData.sizes ? `<p><strong>Sizes:</strong> ${orderData.sizes}</p>` : ''}
      ${orderData.specialRequests ? `<p><strong>Special Requests:</strong> ${orderData.specialRequests}</p>` : ''}
    `;

    return this.sendEmail(
      this.configService.get<string>('ORDERS_EMAIL') || 'orders@minimglobal.com',
      `New ${type === 'food' ? 'Food' : 'Clothing'} Order`,
      htmlContent
    );
  }

  async sendBookingNotification(bookingData: any) {
    const htmlContent = `
      <h2>New Booking Inquiry</h2>
      <p><strong>Name:</strong> ${bookingData.name}</p>
      <p><strong>Email:</strong> ${bookingData.email}</p>
      <p><strong>Phone:</strong> ${bookingData.phone}</p>
      <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
      <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
      <p><strong>Message:</strong></p>
      <p>${bookingData.message}</p>
    `;

    return this.sendEmail(
      this.configService.get<string>('BOOKINGS_EMAIL') || 'bookings@minimglobal.com',
      'New Booking Inquiry',
      htmlContent
    );
  }
}
