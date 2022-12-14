import { useContext } from "react";
import { randomIdContext } from "../contexts/randomIdContext";
import Button from "@mui/material/Button";
import { useQuery, useIsFetching } from "react-query";

export function QueryBtn() {
	const { setRandomId } = useContext(randomIdContext);
	const { data } = useQuery(["quotes"]);
	const isFetchingQuotes = useIsFetching(["quotes"]);

	return (
		<div className="bg-green-600/90 font-semibold text-white">
			<Button
				onClick={() => setRandomId(Math.floor(Math.random() * data?.length))}
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
