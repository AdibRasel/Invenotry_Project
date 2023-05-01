// var nodemailer = require("nodemailer");

// const SendEmailUtility = async (EmailTo, EmailText, EmailSubject)=>{
//     let transporter = nodemailer.createTransport({
//         // host: "smtp.ethereal.email",
//         // port: 587,
//         // secure: false,
//         service: 'gmail',
//         auth:{
//             // user: "info@teamrabbil.com",
//             // pass:'~sR4[bhaC[Qs'
//             user: 'publicuser487@gmail.com',
//             pass:'mrhthvgvbnv'
//         },
//         port: 587,
//         secure: false
//         // ,tls:{
//         //     rejectUnauthorized: false
//         // },
//     });
//     let mailOptions={
//         from:"Inventory Project MERN <inventory@project.com>",
//         to: EmailTo,
//         subject: EmailSubject,
//         text: EmailText
//     };
//     return await transporter.sendMail(mailOptions)
// }

// module.exports=SendEmailUtility




var nodemailer = require("nodemailer");

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject)=>{
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: "adibrasel.2022@gmail.com", // generated ethereal user
        pass: "AdibRaselmrhthvgvbnv73829" // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    return await transporter.sendMail(info)

    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports=SendEmailUtility