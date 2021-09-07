// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default function handler(req, res) {
	const {email, subject, name, message} = req.body
	//res.status(200).json(form)
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		requireTLS: true,
		service: 'gmail',
		secure: false,
		auth: {
			user: 'mlupani2@gmail.com',
			pass: 'dawlxglgnwmjswbt'
		}
	})

	const content = `<h2>User information</h2>
	<ul>
		<li>${name}</li>
		<li>${email}</li>
		<li>${subject}</li>
		<li>${message}</li>
	</ul>
	`

	const mailOptions = {
		from: 'Contacto portafolio',
		to: 'mlupani2@gmail.com',
		subject: 'Contacto Portafolio',
		html: content
	}

	transporter.sendMail(mailOptions, (e) => {
		res.status(200).json({error: e})
	})
}
