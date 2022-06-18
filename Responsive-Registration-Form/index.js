const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const fnImg = document.getElementById("fnImg");
const fnErr = document.getElementById("fnErr");

const lnImg = document.getElementById("lnImg");
const lnErr = document.getElementById("lnErr");

const emImg = document.getElementById("emImg");
const emErr = document.getElementById("emErr");

const pwImg = document.getElementById("pwImg");
const pwErr = document.getElementById("pwErr");

const regForm = document.getElementById("regForm");

firstname.addEventListener("input", (e) => {
	if (firstname.value == "") {
		fnImg.classList.remove("hide");
		fnErr.classList.remove("hide");
		firstname.classList.add("inpErr");
		fnImg.classList.add("errImg");
		fnErr.classList.add("error");
	} else {
		fnImg.classList.add("hide");
		fnErr.classList.add("hide");
		firstname.classList.remove("inpErr");
		fnImg.classList.remove("errImg");
		fnErr.classList.remove("error");
	}
});

lastname.addEventListener("input", (e) => {
	if (lastname.value == "") {
		lnImg.classList.remove("hide");
		lnErr.classList.remove("hide");
		lastname.classList.add("inpErr");
		lnImg.classList.add("errImg");
		lnErr.classList.add("error");
	} else {
		lnImg.classList.add("hide");
		lnErr.classList.add("hide");
		lastname.classList.remove("inpErr");
		lnImg.classList.remove("errImg");
		lnErr.classList.remove("error");
	}
});

email.addEventListener("input", (e) => {
	if (email.value == "") {
		emImg.classList.remove("hide");
		emErr.classList.remove("hide");
		email.classList.add("inpErr");
		emImg.classList.add("errImg");
		emErr.classList.add("error");
	} else {
		emImg.classList.add("hide");
		emErr.classList.add("hide");
		email.classList.remove("inpErr");
		emImg.classList.remove("errImg");
		emErr.classList.remove("error");
	}
});

password.addEventListener("input", (e) => {
	if (password.value == "") {
		pwImg.classList.remove("hide");
		pwErr.classList.remove("hide");
		password.classList.add("inpErr");
		pwImg.classList.add("errImg");
		pwErr.classList.add("error");
	} else {
		pwImg.classList.add("hide");
		pwErr.classList.add("hide");
		password.classList.remove("inpErr");
		pwImg.classList.remove("errImg");
		pwErr.classList.remove("error");
	}
});

submit.addEventListener("click", (e) => {
	if (firstname.value == "") {
		fnImg.classList.remove("hide");
		fnErr.classList.remove("hide");
		firstname.classList.add("inpErr");
		fnImg.classList.add("errImg");
		fnErr.classList.add("error");
		submit.style = `
    padding: 15px 25px;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 7px;
	background-color: hsl(0, 100%, 74%);
	color: hsl(246, 25%, 100%);
	font-weight: 600;
	text-transform: uppercase;
	box-shadow: 0 4px 0 0 hsla(0, 100%, 74%, 50%);
	margin-bottom: 20px;
	cursor: pointer;
    `;
	}

	if (lastname.value == "") {
		lnImg.classList.remove("hide");
		lnErr.classList.remove("hide");
		lastname.classList.add("inpErr");
		lnImg.classList.add("errImg");
		lnErr.classList.add("error");
		submit.style = `
    padding: 15px 25px;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 7px;
	background-color: hsl(0, 100%, 74%);
	color: hsl(246, 25%, 100%);
	font-weight: 600;
	text-transform: uppercase;
	box-shadow: 0 4px 0 0 hsla(0, 100%, 74%, 50%);
	margin-bottom: 20px;
	cursor: pointer;
    `;
	}

	if (email.value == "") {
		emImg.classList.remove("hide");
		emErr.classList.remove("hide");
		email.classList.add("inpErr");
		emImg.classList.add("errImg");
		emErr.classList.add("error");
		submit.style = `
    padding: 15px 25px;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 7px;
	background-color: hsl(0, 100%, 74%);
	color: hsl(246, 25%, 100%);
	font-weight: 600;
	text-transform: uppercase;
	box-shadow: 0 4px 0 0 hsla(0, 100%, 74%, 50%);
	margin-bottom: 20px;
	cursor: pointer;
    `;
	}

	if (password.value == "") {
		pwImg.classList.remove("hide");
		pwErr.classList.remove("hide");
		password.classList.add("inpErr");
		pwImg.classList.add("errImg");
		pwErr.classList.add("error");
		submit.style = `
    padding: 15px 25px;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 7px;
	background-color: hsl(0, 100%, 74%);
	color: hsl(246, 25%, 100%);
	font-weight: 600;
	text-transform: uppercase;
	box-shadow: 0 4px 0 0 hsla(0, 100%, 74%, 50%);
	margin-bottom: 20px;
	cursor: pointer;
    `;
	}

	if (
		firstname.value != "" &&
		lastname.value != "" &&
		email.value != "" &&
		password.value != ""
	) {
		fnImg.classList.add("hide");
		fnErr.classList.add("hide");
		firstname.classList.remove("inpErr");
		fnImg.classList.remove("errImg");
		fnErr.classList.remove("error");

		lnImg.classList.add("hide");
		lnErr.classList.add("hide");
		lastname.classList.remove("inpErr");
		lnImg.classList.remove("errImg");
		lnErr.classList.remove("error");

		emImg.classList.add("hide");
		emErr.classList.add("hide");
		email.classList.remove("inpErr");
		emImg.classList.remove("errImg");
		emErr.classList.remove("error");

		pwImg.classList.add("hide");
		pwErr.classList.add("hide");
		password.classList.remove("inpErr");
		pwImg.classList.remove("errImg");
		pwErr.classList.remove("error");

		submit.style = `
    padding: 15px 25px;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 7px;
	background-color: hsl(154, 59%, 51%);
	color: hsl(246, 25%, 100%);
	font-weight: 600;
	text-transform: uppercase;
	box-shadow: 0 4px 0 0 hsl(154, 59%, 45%);
	margin-bottom: 20px;
	cursor: pointer;
    `;

		regForm.reset();

		alert("Free trial CLAIMED. Start learning...");
	}
});
