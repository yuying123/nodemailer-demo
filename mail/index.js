const nodemailer = require("nodemailer")
module.exports = function (options) {
	// set options
	let _options = {
		from: "allhistory_fe@163.com",
		to: "dls-fe@pwrd.com",
		subject: "邮件主题",
		text: "邮件正文test",
	}
	Object.assign(_options, options)

	// nodemail
	let transporter = nodemailer.createTransport({
		host: 'smtp.163.com',
		port: 465, // SMTP 端口 port: 465,
		secureConnection: true, // 使用了 SSL加密
		auth: {
			user: _options.from,
			pass: 'EREHFKZNIRDQRMKH', //用于发邮件的邮箱的的smtp授权码
		}
	})

	transporter.sendMail(_options, (error, info) => {
		if (error) {
			return console.log(error)
		}
		console.log("MESSAGE SENT:", info.messageId)
	})
}