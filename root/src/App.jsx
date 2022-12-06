import React from "react";
import Quotes from "./components/Quotes";
import Button from "@mui/material/Button";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { refetchQuotes } from "./components/Quotes";
import "./index.css";
import "./App.css";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			staleTime: Infinity,
		},
	},
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<h1 className="font-semibold text-xl text-white mb-5">
				QUOTES GENERATOR
			</h1>
			<div className="min-h-[150px] min-w-[720px] max-w-[720px] p-6 bg-white rounded-lg text-black flex flex-col justify-center mb-4">
				<Quotes />
			</div>
			<Button
				onClick={refetchQuotes}
				className="w-full"
				variant="contained"
				color="success"
			>
				Generate New Random Quote
			</Button>
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}
