import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
export const handleContactForm = async (req, res) => {
  const { userName, email, phone, company, postalcode, message } = req.body;

  if (!userName || !email || !phone || !company || !postalcode || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // use true for port 465, false for others
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"QubitNets Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Us Form Submission`,
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Full Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Postal Code:</strong> ${postalcode}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email. Try again later." });
  }
};
