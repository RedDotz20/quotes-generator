import Button from "@mui/material/Button";
import { refetchQuotes } from "./Quotes";
import { useIsFetching } from "react-query";

export function QueryBtn() {
	const isFetchingQuotes = useIsFetching(["quotes"]);
	return (
		<div className="bg-green-600/90 font-semibold text-white">
			<Button
				onClick={refetchQuotes}
				className="w-full"
				variant="contained"
				color="success"
				disabled={isFetchingQuotes ? true : false}
			>
				{isFetchingQuotes ? "L O A D I N G ..." : "Generate New Random Quote"}
			</Button>
		</div>
	);
}
