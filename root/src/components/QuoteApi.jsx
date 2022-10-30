import React from "react";

export default function QuoteApi() {
	fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "SIGN-UP-FORs-KEY",
			"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
		},
	})
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
	return <>QuoteApi</>;
}
