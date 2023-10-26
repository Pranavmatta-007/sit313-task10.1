const express = require('express')
const bodyParser = require('body-parser')
const mailgun = require('mailgun-js')
const app = express()
const cors  = require('cors');
app.use(cors());


const port = 2070

const Mailgun_API_KEY = 'key-1db3f1ff9953ef37ffbfa4dd0d2383f0'
const Mailgun_Domain = 'sandbox84095a226d8d474a90dbff5aedf760a9.mailgun.org'

const sendermail = 'pranav4874.be22@chitkara.edu.in'
const subject = 'Welcome to our Newsletter'
const text = 'Thanks for subscribing to our newsetter'

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post('/sendMail', (req, res) => {
    console.log(req.body)
    const {mail} = req.body

    const message = mailgun({ apiKey: Mailgun_API_KEY, domain: Mailgun_Domain })
    const Email_data = {
        from: 'pranav4874.be22@chitkara.edu.in',
        to: mail,
        subject: subject,
        text: text,
    };
    message.messages().send(Email_data,(error,body)=>{
        if(error)
        {
            console.error(error)
            res.status(500).json({error: 'Email not sent'})
        }
        else
        {
            res.status(200).json({message: 'Email sent succesfully'})
        }
    })
})
app.listen(port, function (Request, Response) {
    console.log("Server is running at port 2070")
})