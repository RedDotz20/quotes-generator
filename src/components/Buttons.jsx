import Button from "@mui/material/Button";
import Loading from "./Loading";
import { useQuery } from "react-query";

export default function QueryBtn({ setRandomId }) {
	console.log("Render button");
	const { data, isFetching } = useQuery(["quotes"]);
	return (
		<div className="bg-green-600/90 font-semibold text-white">
			<Button
				onClick={() => setRandomId(Math.floor(Math.random() * data?.length))}
				className="w-full"
				variant="contained"
				color="success"
				disabled={isFetching ? true : false}
			>
				{isFetching ? <Loading /> : "Generate New Random Quote"}
			</Button>
		</div>
	);
}
