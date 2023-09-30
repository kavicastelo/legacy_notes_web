const template = (name, email, pass, believer) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
<link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">
</head>
<body>
<div
  style="width: 600px; padding: 5vw; background-color: white">
  <div
    style="text-align: center; font-size: 30px; color: red; font-family: 'Sedgwick Ave Display', cursive; border: 2px solid red; border-radius: 20px; padding: 5vw;">
    <b>Happy to say now you have full access to personal secret wallet of following person.</b>
    <img
      src="https://seeklogo.com/images/D/death-note-logo-56B2B24A8B-seeklogo.com.png"
      alt="banner"
      style="width: 100%">
    <p
      style="width: 400px; text-align: left; color: dimgray; font-size: 16px; font-family: sans-serif; margin-top: 5px">
      Dear ${believer}<br><br>
      This email is to inform you that, your loving person ended his life journey. He/She did sets you as their beloved believer in their personal secret wallet. That's the reason you get this email from him/her after pass away. Use the following details to enter their wallet. Now you are the only one knows their secrets and he/she strongly trusted you to share this. 
    </p>
    <p style="color: dimgray; font-size: 14px; font-family: sans-serif; text-align: left;">
      Your Wallet Address: <strong><a href="https://kavi-castelo-secret-wallet-0001.netlify.app/">https://kavi-castelo-secret-wallet-0001.netlify.app/</a></strong> <br>
      Username: <strong>${name}</strong><br>
      Password: <strong>${pass}</strong><br>
      Folder Lock: <strong>i have permission to access this folder!</strong>
    </p>
    <p style="width:400px; color: dimgray; font-size: 16px; font-family: sans-serif; text-align: left;">
      This wallet belongs to ${email} this person and our deepest sympathy about their pass away.! Keep up their secrets with you.!</p>
  </div>
</div>
<div style="background-color: black; padding: 3vw; width: 620px">
  <div style="width: 100%">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Death_Note_logo_%28black_background%29.png" alt="logo" style="width: 100%"></div>
  <p style="color: white">Email received from anonymous server. We are no longer keep their secrets. Now they are on your hands.!</p>
</div>

</body>
</html>`

module.exports = template