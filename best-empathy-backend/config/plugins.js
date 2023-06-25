module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "in-v3.mailjet.com"),
        port: env("SMTP_PORT", 465),
        auth: {
          user: env("SMTP_USERNAME", "b3faa30532d8bdfd4f3281da9c1d8b0e"),
          pass: env("SMTP_PASSWORD", "a4ded56eb1427af0485746353f1e5c19"),
        },
      },
      settings: {
        defaultFrom: "no-reply@bestempathy.com",
        defaultReplyTo: "no-reply@bestempathy.com",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "strapi-paypal": {
    enabled: true,
    config: {
      paypalSandBoxUrl:
        env("PAYPAL_SANDBOX_API_URL") || "https://api-m.sandbox.paypal.com",
      paypalLiveUrl: env("PAYPAL_LIVE_API_URL") || "https://api-m.paypal.com",
    },
  },
  // ...
});
